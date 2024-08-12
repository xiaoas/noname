/**
 * 从读取的内容中获取数据
 */

import { ai, setAI } from "../ai/index.js";
import { get, setGet } from "../get/index.js";
import { lib, Library, setLibrary } from "../library/index.js";
import { game, setGame } from "../game/index.js";
import { _status } from "../status/index.js";
import { setUI, ui } from "../ui/index.js";
import { gnc } from "../gnc/index.js";
import { importMode } from "./import.js";
import { Mutex } from "../util/mutex.js";
import { load } from "../util/config.js";

/**
 *
 * @param {importCardConfig} cardConfig
 */
export function loadCard(cardConfig) {
	const cardConfigName = cardConfig.name;

	lib.cardPack[cardConfigName] ??= [];
	if (cardConfig.card) {
		for (let [cardPackName, cardPack2] of Object.entries(cardConfig.card)) {
			if (!(!cardPack2.hidden && cardConfig.translate[`${cardPackName}_info`])) continue;
			lib.cardPack[cardConfigName].add(cardPackName);
		}
	}

	for (const [configName, configItem] of Object.entries(cardConfig)) {
		switch (configName) {
			case "name":
			case "mode":
			case "forbid":
				break;
			case "connect":
				// @ts-ignore
				lib.connectCardPack.push(cardConfigName);
				break;
			case "list":
				if (lib.config.mode === "connect") {
					// @ts-ignore
					lib.cardPackList[cardConfigName] ??= [];
					// @ts-ignore
					lib.cardPackList[cardConfigName].addArray(configItem);
				} else if (lib.config.cards.includes(cardConfigName)) {
					/**
					 * @type {any[]}
					 */
					let pile = typeof configItem == "function" ? configItem() : configItem;

					lib.cardPile[cardConfigName] ??= [];
					lib.cardPile[cardConfigName].addArray(pile);

					if (lib.config.bannedpile[cardConfigName]) {
						pile = pile.filter((_value, index) => !lib.config.bannedpile[cardConfigName].includes(index));
					}

					if (lib.config.addedpile[cardConfigName]) {
						pile = [...pile, ...lib.config.addedpile[cardConfigName]];
					}

					lib.card.list.addArray(pile);
				}
				break;
			default:
				for (const [itemName, item] of Object.entries(configItem)) {
					if (configName === "skill" && itemName[0] === "_" && !item.forceLoad && (lib.config.mode !== "connect" ? !lib.config.cards.includes(cardConfigName) : !cardConfig.connect)) {
						continue;
					}

					if (configName === "translate" && itemName === cardConfigName) {
						lib[configName][`${itemName}_card_config`] = item;
					} else {
						if (lib[configName][itemName] == null) {
							if (configName === "skill" && !item.forceLoad && lib.config.mode === "connect" && !cardConfig.connect) {
								lib[configName][itemName] = {
									nopop: item.nopop,
									derivation: item.derivation,
								};
							} else {
								// @ts-ignore
								Object.defineProperty(lib[configName], itemName, Object.getOwnPropertyDescriptor(configItem, itemName));
							}
						} else {
							console.log(`duplicated ${configName} in card ${cardConfigName}:\n${itemName}:\nlib.${configName}.${itemName}`, lib[configName][itemName], `\ncard.${cardConfigName}.${configName}.${itemName}`, item);
						}

						if (configName === "card" && lib[configName][itemName].derivation) {
							// @ts-ignore
							lib.cardPack.mode_derivation ??= [];
							// @ts-ignore
							lib.cardPack.mode_derivation.push(itemName);
						}
					}
				}
				break;
		}
	}
}

export function loadCardPile() {
	if (lib.config.mode === "connect") {
		// @ts-ignore
		lib.cardPackList = {};
	} else {
		var pilecfg = lib.config.customcardpile[get.config("cardpilename") || "当前牌堆"];
		if (pilecfg) {
			lib.config.bannedpile = get.copy(pilecfg[0] || {});
			lib.config.addedpile = get.copy(pilecfg[1] || {});
		} else {
			lib.config.bannedpile = {};
			lib.config.addedpile = {};
		}
	}
}

/**
 * @param {importCharacterConfig} character
 */
export function loadCharacter(character) {
	let name = character.name;

	if (character.character) {
		const characterPack = lib.characterPack[name];
		if (characterPack) {
			Object.assign(characterPack, character.character);
		} else {
			lib.characterPack[name] = character.character;
		}
	}

	// 摆了
	for (let key in character) {
		let value = character[key];

		switch (key) {
			case "name":
			case "mode":
			case "forbid":
				break;
			case "connect":
				// @ts-ignore
				lib.connectCharacterPack.push(name);
				break;
			case "character":
				if (!lib.config.characters.includes(name) && lib.config.mode !== "connect") {
					if (lib.config.mode === "chess" && get.config("chess_mode") === "leader" && get.config("chess_leader_allcharacter")) {
						for (let charaName in value) {
							// @ts-ignore
							lib.hiddenCharacters.push(charaName);
						}
					} else if (lib.config.mode !== "boss" || name !== "boss") {
						break;
					}
				}
			// [falls through]
			default:
				if (Array.isArray(lib[key]) && Array.isArray(value)) {
					lib[key].addArray(value);
					break;
				}

				for (let key2 in value) {
					let value2 = value[key2];

					if (key === "character") {
						if (lib.config.forbidai_user && lib.config.forbidai_user.includes(key2)) {
							lib.config.forbidai.add(key2);
						}
						if (Array.isArray(value2)) {
							if (!value2[4]) {
								value2[4] = [];
							}
							if (value2[4].includes("boss") || value2[4].includes("hiddenboss")) {
								lib.config.forbidai.add(key2);
							}
							for (let skill of value2[3]) {
								lib.skilllist.add(skill);
							}
						} else {
							if (value2.isBoss || value2.isHiddenBoss) {
								lib.config.forbidai.add(key2);
							}
							if (value2.skills) {
								for (let skill of value2.skills) {
									lib.skilllist.add(skill);
								}
							}
						}
					}

					if (key === "skill" && key2[0] === "_" && (lib.config.mode !== "connect" ? !lib.config.characters.includes(name) : !character.connect)) {
						continue;
					}

					if (key === "translate" && key2 === name) {
						lib[key][`${key2}_character_config`] = value2;
					} else {
						if (lib[key][key2] == null) {
							if (key === "skill" && !value2.forceLoad && lib.config.mode === "connect" && !character.connect) {
								lib[key][key2] = {
									nopop: value2.nopop,
									derivation: value2.derivation,
								};
							} else if (key === "character") {
								lib.character[key2] = value2;
							} else {
								// @ts-ignore
								Object.defineProperty(lib[key], key2, Object.getOwnPropertyDescriptor(character[key], key2));
							}
							if (key === "card" && lib[key][key2].derivation) {
								// @ts-ignore
								if (!lib.cardPack.mode_derivation) {
									// @ts-ignore
									lib.cardPack.mode_derivation = [key2];
								} else {
									// @ts-ignore
									lib.cardPack.mode_derivation.push(key2);
								}
							}
						} else if (Array.isArray(lib[key][key2]) && Array.isArray(value2)) {
							lib[key][key2].addArray(value2);
						} else {
							console.log(`duplicated ${key} in character ${name}:\n${key2}:\nlib.${key}.${key2}`, lib[key][key2], `\ncharacter.${name}.${key}.${key2}`, value2);
						}
					}
				}
				break;
		}
	}
}

export async function loadExtension(extension) {
	if (!extension[5] && lib.config.mode === "connect") return;

	try {
		_status.extension = extension[0];
		// @ts-ignore
		_status.evaluatingExtension = extension[3];
		if (typeof extension[1] == "function") {
			try {
				await (gnc.is.coroutine(extension[1]) ? gnc.of(extension[1]) : extension[1]).call(extension, extension[2], extension[4]);
			} catch (e) {
				console.log(`加载《${extension[0]}》扩展的content时出现错误。`, e);
				// @ts-ignore
				if (!lib.config.extension_alert) alert(`加载《${extension[0]}》扩展的content时出现错误。\n该错误本身可能并不影响扩展运行。您可以在“设置→通用→无视扩展报错”中关闭此弹窗。\n${decodeURI(e.stack)}`);
			}
		}

		if (extension[4]) {
			if (extension[4].character) {
				const content = { ...extension[4].character };
				content.name = extension[0];
				content.translate ??= {};
				content.translate[content.name] = content.name;

				if (lib.imported.character) {
					lib.imported.character[extension[0]] = content;
				}

				if (!lib.config[`@Experimental.extension.${extension[0]}.character`]) {
					game.saveConfig(`@Experimental.extension.${extension[0]}.character`, true);
					lib.config.characters.add(extension[0]);
					await game.promises.saveConfigValue("characters");
				}

				loadCharacter(content);
			}
			if (extension[4].card) {
				const content = { ...extension[4].card };
				content.name = extension[0];
				content.translate ??= {};
				content.translate[content.name] = content.name;

				if (lib.imported.card) {
					lib.imported.card[extension[0]] = content;
				}

				if (!lib.config[`@Experimental.extension.${extension[0]}.card`]) {
					game.saveConfig(`@Experimental.extension.${extension[0]}.card`, true);
					lib.config.cards.add(extension[0]);
					await game.promises.saveConfigValue("cards");
				}

				loadCard(content);
			}
			if (extension[4].skill) {
				for (const [skillName, skillInfo] of Object.entries(extension[4].skill.skill)) {
					if (lib.skill[skillName]) {
						console.log(`duplicated skill in extension ${extension[0]}:\n${skillName}:\nlib.skill.${skillName}`, lib.skill[skillName], `\nextension.${extension[0]}.skill.skill.${skillName}`, skillInfo);
						continue;
					}

					const info = { ...skillInfo };
					if (typeof info.audio == "number" || typeof info.audio == "boolean") {
						info.audio = `ext:${extension[0]}:${info.audio}`;
					}

					lib.skill[skillName] = info;
				}

				for (const [transName, translate] of Object.entries(extension[4].skill.translate)) {
					if (lib.translate[transName]) {
						console.log(`duplicated translate in extension ${extension[0]}:\n${transName}:\nlib.translate.${transName}`, lib.translate[transName], `\nextension.${extension[0]}.skill.translate.${transName}`, translate);
						continue;
					}

					lib.translate[transName] = translate;
				}
			}
		}
		delete _status.extension;
		// @ts-ignore
		delete _status.evaluatingExtension;
	} catch (e) {
		console.error(e);
	}
}

/**
 * @param {importModeConfig} mode
 */
export function loadMode(mode) {
	mixinLibrary(mode, lib);
	mixinGeneral(mode, "game", game);
	mixinGeneral(mode, "ui", ui);
	mixinGeneral(mode, "get", get);
	mixinGeneral(mode, "ai", ai);

	// @ts-ignore
	delete window.noname_character_rank;

	["onwash", "onover"].forEach(name => {
		if (game[name]) {
			lib[name]?.push(game[name]);
			delete game[name];
		}
	});

	if (typeof mode.init == "function") {
		mode.init();
	}
}

/**
 *
 * @param {importPlayConfig} playConfig
 */
export function loadPlay(playConfig) {
	const i = playConfig.name;

	if (lib.config.hiddenPlayPack.includes(i)) return;
	if (playConfig.forbid && playConfig.forbid.includes(lib.config.mode)) return;
	if (playConfig.mode && !playConfig.mode.includes(lib.config.mode)) return;

	// @ts-ignore
	lib.element = mixinElement(playConfig, lib.element);
	mixinGeneral(playConfig, "game", game);
	mixinGeneral(playConfig, "ui", ui);
	mixinGeneral(playConfig, "get", get);
	for (const [configName, configItem] of Object.entries(playConfig)) {
		switch (configName) {
			case "name":
			case "mode":
			case "forbid":
			case "init":
			case "element":
			case "game":
			case "get":
			case "ui":
			case "arenaReady":
				break;
			default:
				for (const [itemName, item] of Object.entries(configItem)) {
					// lib[j][k+'_play_config']=play[i][j][k];
					if (configName !== "translate" || itemName !== i) {
						if (lib[configName][itemName] != null) {
							console.log(`duplicated ${configName} in play ${i}:\n${itemName}:\nlib.${configName}.${itemName}`, lib[configName][itemName], `\nplay.${i}.${configName}.${itemName}`, item);
						}
						lib[configName][itemName] = item;
					}
				}
				break;
		}
	}

	if (typeof playConfig.init == "function") playConfig.init();
	if (typeof playConfig.arenaReady == "function") lib.arenaReady?.push(playConfig.arenaReady);
}

/**
 * 通用形式的内容注入
 *
 * 由于历史原因，故直接覆盖对应的变量
 *
 * @template {Object} T
 * @param {importModeConfig | importPlayConfig} config
 * @param {string} name
 * @param {T} where
 * @return {void}
 */
function mixinGeneral(config, name, where) {
	if (!config[name]) return;

	for (let [key, value] of Object.entries(config[name])) {
		where[key] = typeof value == "object" ? Object.assign(where[key] ?? {}, value) : value;
	}
}

/**
 *
 * @param {importModeConfig | importPlayConfig} config
 * @param {Library} lib
 * @return {void}
 */
function mixinLibrary(config, lib) {
	const KeptWords = ["name", "element", "game", "ai", "ui", "get", "config", "onreinit", "start", "startBefore"];

	// @ts-ignore
	lib.element = mixinElement(config, lib.element);
	// @ts-ignore
	lib.banned = lib.config[`${lib.config.mode}_banned`] || [];
	// @ts-ignore
	lib.bannedcards = lib.config[`${lib.config.mode}_bannedcards`] || [];
	// @ts-ignore
	lib.rank = window.noname_character_rank;

	for (let name in config) {
		if (KeptWords.includes(name)) continue;
		if (lib[name] == null) lib[name] = Array.isArray(config[name]) ? [] : {};

		Object.assign(lib[name], config[name]);
	}
}

/**
 *
 * @param {importModeConfig | importPlayConfig} config
 * @param {Record<string, Object>} element
 * @return {Record<string, Object>}
 */
function mixinElement(config, element) {
	let newElement = { ...element };

	if (config.element) {
		for (let name in config.element) {
			if (!newElement[name]) newElement[name] = [];

			let source = config.element[name];
			let target = newElement[name];

			for (let key in source) {
				if (key === "init") {
					if (!target.inits) target.inits = [];
					target.inits.push(source[key]);
				} else {
					target[key] = source[key];
				}
			}
		}
	}

	return newElement;
}
