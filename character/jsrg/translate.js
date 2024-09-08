const translates = {
	//江山如故·起
	jsrg_liuhong: "起刘宏",
	jsrg_liuhong_prefix: "起",
	jsrgchaozheng: "朝争",
	jsrgchaozheng_info: "准备阶段，你可以令所有其他角色议事。若结果为：红色，意见为红色的角色各回复1点体力；黑色，意见为红色的角色各失去1点体力。然后若所有意见均相同，你摸X张牌（X为此次议事的角色数）。",
	jsrgshenchong: "甚宠",
	jsrgshenchong_info: "限定技。出牌阶段，你可以令一名其他角色获得〖飞扬〗、〖跋扈〗。若如此做，当你死亡时，其失去所有技能并弃置所有手牌。",
	jsrgjulian: "聚敛",
	jsrgjulian_info: "主公技。①其他群势力角色每回合限两次。当其不于摸牌阶段且不因〖聚敛〗摸牌后，其可以摸一张牌。②结束阶段，你可以获得所有其他群势力角色各一张牌。",
	jsrgfeiyang: "飞扬",
	jsrgfeiyang_info: "判定阶段开始时，若你的判定区里有牌，你可以弃置两张手牌并弃置你判定区里的一张牌。",
	jsrgbahu: "跋扈",
	jsrgbahu_info: "锁定技。①准备阶段，你摸一张牌。②你使用【杀】的次数上限+1。",
	jsrg_hejin: "起何进",
	jsrg_hejin_prefix: "起",
	jsrgzhaobing: "诏兵",
	jsrgzhaobing_info: "结束阶段，你可以弃置所有手牌，然后令至多X名其他角色依次选择一项：1.正面向上交给你一张【杀】；2.失去1点体力（X为你本次弃置的牌数）。",
	jsrgzhuhuan: "诛宦",
	jsrgzhuhuan_info: "准备阶段，你可以展示所有手牌并弃置所有【杀】，然后令一名其他角色选择一项：1.弃置等量的牌，然后受到1点伤害；2.令你摸等量的牌，然后你回复1点体力。",
	jsrgyanhuo: "延祸",
	jsrgyanhuo_info: "锁定技。当你死亡时，你增加如下全局技能：当有角色使用【杀】时，此【杀】的伤害值基数+1。",
	jsrg_sunjian: "起孙坚",
	jsrg_sunjian_prefix: "起",
	jsrgpingtao: "平讨",
	jsrgpingtao_info: "出牌阶段限一次。你可以令一名其他角色选择一项：1.交给你一张牌，然后你于此回合使用【杀】的次数上限+1；2.令你视为对其使用一张【杀】。",
	jsrgjuelie: "绝烈",
	jsrgjuelie_info: "①当你使用【杀】指定一名角色为目标后，你可以弃置任意张牌并弃置其等量的牌。②若你的手牌数或体力值为全场最小，则你使用【杀】造成的伤害+1。",
	jsrg_huangfusong: "起皇甫嵩",
	jsrg_huangfusong_prefix: "起",
	jsrgguanhuo: "观火",
	jsrgguanhuo_info: "①出牌阶段，你可以视为使用一张【火攻】。②当你因〖观火①〗使用的【火攻】结算结束后，若此牌未造成过伤害，且：若{你此阶段发动〖观火①〗的次数为1，则你于此阶段造成渠道为【火攻】的伤害时，此伤害+1}，否则你失去〖观火〗。",
	jsrgjuxia: "居下",
	jsrgjuxia_info: "每回合限一次。当其他角色使用牌指定你为目标后，若其技能数多于你，其可以令此牌对你无效，然后令你摸两张牌。",
	jsrg_xushao: "起许劭",
	jsrg_xushao_prefix: "起",
	jsrgyingmen: "盈门",
	jsrgyingmen_info: "锁定技。①游戏开始时，你将武将牌堆中随机四张武将牌置于你的武将牌上，称为“访客”。②回合开始时，若你的“访客”数小于4，你随机从武将牌堆中将“访客”补至四张。",
	jsrgpingjian: "评鉴",
	jsrgpingjian_info: "你可以于满足你“访客”上的一个无技能标签或仅有锁定技标签的技能条件的时机发动此技能，然后你选择移去一张“访客”。若移去的是本次发动技能的“访客”，你摸一张牌。",
	jsrg_dongbai: "起董白",
	jsrg_dongbai_prefix: "起",
	jsrgshichong: "恃宠",
	jsrgshichong_info: "转换技。当你使用牌指定其他角色为唯一目标后，阴：你可以获得目标角色一张手牌；阳：目标角色可以交给你一张手牌。",
	jsrglianzhu: "连诛",
	jsrglianzhu_info: "出牌阶段限一次。你可以展示一张黑色手牌并交给一名其他角色，然后视为你对所有与其势力相同的其他角色依次使用一张【过河拆桥】。",
	jsrg_qiaoxuan: "起桥玄",
	jsrg_qiaoxuan_prefix: "起",
	jsrgjuezhi: "绝质",
	jsrgjuezhi_info: "①当你失去一张装备区里的装备牌后，你可以废除对应的装备栏。②你的回合每阶段限一次。当你使用牌对目标角色造成伤害时，你令此伤害+X（X为其装备区里的牌与你已废除的装备栏中相同副类别的数量）。",
	jsrgjizhao: "急召",
	jsrgjizhao_info: "准备阶段或结束阶段，你可以令一名角色选择一项：1.使用一张手牌；2.令你可以移动其区域里的一张牌。",
	jsrg_yangbiao: "起杨彪",
	jsrg_yangbiao_prefix: "起",
	jsrgzhaohan: "昭汉",
	jsrgzhaohan_info: "锁定技。准备阶段，若本局游戏：未洗过牌，你回复1点体力；洗过牌，你失去1点体力。",
	jsrgrangjie: "让节",
	jsrgrangjie_info: "当你受到1点伤害后，你可以移动场上的一张牌，然后你可以于弃牌堆中选择获得一张本回合进入弃牌堆且与此牌花色相同的牌。",
	jsrgyizheng: "义争",
	jsrgyizheng_info: "出牌阶段限一次。你可以与一名手牌数大于你的角色拼点。若你：赢，其跳过下一个摸牌阶段；没赢，其可以对你造成至多2点伤害。",
	jsrg_kongrong: "起孔融",
	jsrg_kongrong_prefix: "起",
	jsrglirang: "礼让",
	jsrglirang_info: "每轮限一次。其他角色的摸牌阶段开始时，你可以交给其两张牌。然后此回合的弃牌阶段结束时，你可以获得所有其于此阶段因弃置进入弃牌堆的牌。",
	jsrgzhengyi: "争义",
	jsrgzhengyi_info: "当你每回合首次受到伤害时，本轮因〖礼让〗得到过牌的其他角色可以将此伤害转移给其。",
	jsrg_zhujun: "起朱儁",
	jsrg_zhujun_prefix: "起",
	jsrgfendi: "分敌",
	jsrgfendi_tag: "分敌",
	jsrgfendi_info: "每回合限一次。当你使用【杀】指定唯一目标后，你可以展示其任意张手牌，令其不能使用或打出对应实体牌不全为这些牌的牌直到此【杀】结算结束。然后当此【杀】对其造成伤害后，你于其手牌区或弃牌堆获得这些牌。",
	jsrgjuxiang: "拒降",
	jsrgjuxiang_info: "当你不于摸牌阶段得到牌后，你可以弃置之，令当前回合角色于此回合额定的出牌阶段内使用【杀】的次数上限+X（X为你以此法弃置的牌的花色数）。",
	jsrg_liubei: "起刘备",
	jsrg_liubei_prefix: "起",
	jsrgjishan: "积善",
	jsrgjishan_info: "①每回合限一次。当一名角色受到伤害时，你可以失去1点体力并防止此伤害，然后你与其各摸一张牌。②每回合限一次。当你造成伤害后，你可以令一名体力值最小且你对其发动过〖积善①〗的角色回复1点体力。",
	jsrgzhenqiao: "振鞘",
	jsrgzhenqiao_info: "锁定技。①你的攻击范围+1。②当你使用【杀】指定目标后，若你的武器栏为空且未废除，你令此【杀】的效果额外结算一次。",
	jsrg_wangyun: "起王允",
	jsrg_wangyun_prefix: "起",
	jsrgshelun: "赦论",
	jsrgshelun_info: "出牌阶段限一次。你可以选择一名你攻击范围内的角色，然后令除其外所有手牌数不大于你的角色议事。若结果为：红色，你弃置其一张牌；黑色，你对其造成1点伤害。",
	jsrgfayi: "伐异",
	jsrgfayi_info: "当你议事结算结束后，你可以对一名意见与你不同的角色造成1点伤害。",
	jsrg_liuyan: "起刘焉",
	jsrg_liuyan_prefix: "起",
	jsrgtushe: "图射",
	jsrgtushe_info: "当你使用非装备牌指定目标后，你可以展示所有手牌（无牌则不展示）。若你没有基本牌，你可以摸X张牌（X为此牌指定的目标数）。",
	jsrgtongjue: "通绝",
	jsrgtongjue_info: "主公技。出牌阶段限一次。你可以将任意张牌交给等量名其他群势力角色。然后你不能使用牌指定这些角色为目标直到回合结束。",
	jsrg_caocao: "梦曹操",
	jsrg_caocao_prefix: "梦",
	jsrgzhenglve: "政略",
	jsrgzhenglve_info: "①一号位的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若一号位本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_identity: "①主公的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若主公本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_guozhan: "①君主的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若君主本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_doudizhu: "①地主的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若地主本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_boss: "①BOSS的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若BOSS本回合没有造成过伤害，则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_versus_three: "①主公的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若主公本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_versus_four: "①主公的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若主公本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrgzhenglve_info_versus_guandu: "①主公的回合结束时，你可以摸一张牌，然后令一名没有“猎”标记的角色获得“猎”（若主公本回合没有造成过伤害则改为至多两名）。②你对有“猎”的角色使用牌无距离和次数限制。③每回合限一次。当你对有“猎”的角色造成伤害后，你可以摸一张牌并获得造成此伤害的牌。",
	jsrghuilie: "会猎",
	jsrghuilie_info: "觉醒技。准备阶段，若有“猎”的角色数大于2，你减1点体力上限，然后获得〖平戎〗和〖飞影〗。",
	jsrgpingrong: "平戎",
	jsrgpingrong_info: "每轮限一次。一名角色的回合结束时，你可以移去一名角色的“猎”，然后你于此回合后执行一个额外回合。该回合结束后，若你于此回合未造成过伤害，你失去1点体力。",
	jsrg_nanhualaoxian: "起南华老仙",
	jsrg_nanhualaoxian_prefix: "起",
	jsrgshoushu: "授术",
	jsrgshoushu_info: "锁定技。①一轮游戏开始时，若场上没有【太平要术】，你可以从游戏外将【太平要术】置于一名角色的装备区内。②当【太平要术】离开一名角色的装备区后，你令此牌销毁。",
	jsrgxundao: "寻道",
	jsrgxundao_info: "当你的判定牌生效前，你可以令至多两名角色依次弃置一张牌，然后你选择一张以此法弃置且位于弃牌堆中的牌代替此判定牌。",
	jsrglinghua: "灵化",
	jsrglinghua_info: "①准备阶段，你可以执行目标角色为你的【闪电】效果。若你未因此受到伤害，你可以令一名角色回复1点体力。②结束阶段，你可以执行目标角色为你且判定效果反转的【闪电】效果。若你未因此受到伤害，你可以对一名角色造成1点雷电伤害。",
	sbyingmen: "盈门",
	sbyingmen_info: "锁定技。①游戏开始时，你将武将牌堆中随机四张武将牌置于你的武将牌上，称为“访客”。②回合开始时，若你的“访客”数小于4，你随机从武将牌堆中将“访客”补至四张。",
	sbpingjian: "评鉴",
	sbpingjian_info: "你可以于满足你“访客”上的一个无技能标签或仅有锁定技标签的技能条件的时机发动此技能，然后你选择移去一张“访客”。若移去的是本次发动技能的“访客”，则你于此技能结算结束时摸一张牌。",
	//江山如故·承
	jsrg_sunce: "梦孙策",
	jsrg_sunce_prefix: "梦",
	jsrgduxing: "独行",
	jsrgduxing_info: "出牌阶段限一次。你可以视为使用一张可以指定任意名目标角色的【决斗】，且所有目标角色的手牌均视为【杀】直到此牌结算结束。",
	jsrgzhiheng: "猘横",
	jsrgzhiheng_info: "锁定技。当你因执行牌的效果对目标角色造成伤害时，若其于此回合响应过你使用过的牌，此伤害+1。",
	jsrgzhasi: "诈死",
	jsrgzhasi_info: "限定技。当你受到伤害值不小于你的体力值的伤害时，你可以防止此伤害，然后失去〖猘横〗并获得〖制衡〗。然后你不计入距离和座次计算直到你对其他角色使用牌后或当你受到伤害后。",
	jsrgbashi: "霸世",
	jsrgbashi_info: "主公技。当你需要打出【杀】或【闪】时，你可以令其他吴势力角色选择是否打出一张【杀】或【闪】。若有角色响应，则视为你打出了一张【杀】或【闪】。",
	jsrg_xuyou: "承许攸",
	jsrg_xuyou_prefix: "承",
	jsrglipan: "离叛",
	jsrglipan_info: "回合结束时，你可以变更势力，然后摸X张牌并执行一个额外的出牌阶段。此阶段结束时，所有与你势力相同的角色依次可以将一张牌当【决斗】对你使用（X为与你势力相同的其他角色数）。",
	jsrgqingxi: "轻袭",
	jsrgqingxi_info: "群势力技。出牌阶段每名角色限一次。你可以选择一名手牌数小于你的角色，你将手牌数弃置至与其相同，然后视为对其使用一张刺【杀】。",
	jsrgjinmie: "烬灭",
	jsrgjinmie_info: "魏势力技。出牌阶段限一次。你可以选择一名手牌数大于你的角色，你视为对其使用一张火【杀】。当此牌造成伤害后，你将其手牌数弃置至与你相同。",
	jsrg_lvbu: "承吕布",
	jsrg_lvbu_prefix: "承",
	jsrgwuchang: "无常",
	jsrgwuchang_info: "锁定技。①当你获得其他角色的牌后，你变更势力为与其相同。②当你使用【杀】或【决斗】对与你势力相同的目标角色造成伤害时，此伤害+1，然后变更势力为群。",
	jsrgqingjiao: "轻狡",
	jsrgqingjiao_info: "群势力技。出牌阶段各限一次。你可以将一张牌当【推心置腹】/【趁火打劫】对一名手牌数大于/小于你的角色使用。",
	jsrgchengxu: "乘虚",
	jsrgchengxu_info: "蜀势力技。与你势力相同的其他角色不能响应你使用的牌。",
	jsrg_zhanghe: "承张郃",
	jsrg_zhanghe_prefix: "承",
	jsrgqiongtu: "穷途",
	jsrgqiongtu_info: "群势力技。每回合限一次。你可以将一张非基本牌置于武将牌上视为使用一张【无懈可击】。若此牌生效，你摸一张牌，否则你变更势力为魏并获得所有“穷途”牌。",
	jsrgxianzhu: "先著",
	jsrgxianzhu_info: "魏势力技。你可以将一张普通锦囊牌当无次数限制的【杀】使用。当此牌对唯一目标造成伤害后，你视为对该角色使用一张此普通锦囊牌。",
	jsrg_zoushi: "承邹氏",
	jsrg_zoushi_prefix: "承",
	jsrgguyin: "孤吟",
	jsrgguyin_info: "准备阶段，你可以翻面，且令所有其他男性角色依次选择是否翻面。然后你和所有背面朝上的角色轮流各摸一张牌，直到你们累计以此法得到X张牌（X为场上存活角色与死亡角色中男性角色数）。",
	jsrgzhangdeng: "帐灯",
	jsrgzhangdeng_info: "①当一名武将牌背面朝上的角色需要使用【酒】时，若你的武将牌背面朝上，其可以视为使用之。②当一名角色于一回合第二次发动〖帐灯①〗时，你将武将牌翻面至正面朝上。",
	jsrg_guanyu: "承关羽",
	jsrg_guanyu_prefix: "承",
	jsrgguanjue: "冠绝",
	jsrgguanjue_info: "锁定技。当你使用或打出有花色的牌时，你令所有其他角色于此回合内不能使用或打出该花色的牌。",
	jsrgnianen: "念恩",
	jsrgnianen_info: "你可以将一张牌当任意基本牌使用或打出，然后若此牌不为红色或你以此法使用或打出的牌不为普通【杀】，则直到此回合结束，该技能失效且你视为拥有〖马术〗。",
	jsrg_chendeng: "承陈登",
	jsrg_chendeng_prefix: "承",
	jsrglunshi: "论势",
	jsrglunshi_info: "出牌阶段限一次。你可以令一名角色摸等同于其攻击范围内角色数的牌（至多摸至五张），然后其弃置等同于攻击范围内含有其的角色数的牌。",
	jsrgguitu: "诡图",
	jsrgguitu_info: "准备阶段，你可以交换场上的两张武器牌，然后攻击范围以此法减少的角色回复1点体力。",
	jsrg_zhenji: "承甄宓",
	jsrg_zhenji_prefix: "承",
	jsrgjixiang: "济乡",
	jsrgjixiang_info: "回合内每种牌名限一次。当一名其他角色需要使用或打出一张基本牌时，你可以弃置一张牌令其视为使用或打出之，然后你摸一张牌并令〖称贤〗于此阶段可发动次数上限+1。",
	jsrgchengxian: "称贤",
	jsrgchengxian_info: "出牌阶段限两次。你可以将一张手牌当一张本回合未以此法使用过的普通锦囊牌使用（此转化牌须与以此法转化的手牌的合法目标数相同）。",
	jsrg_zhangliao: "承张辽",
	jsrg_zhangliao_prefix: "承",
	jsrgzhengbing: "整兵",
	jsrgzhengbing_info: "群势力技。出牌阶段限三次。你可以重铸一张牌，若此牌为：【杀】，你本回合手牌上限+2；【闪】，你摸一张牌；【桃】，你变更势力为魏。",
	jsrgtuwei: "突围",
	jsrgtuwei_info: "魏势力技。出牌阶段开始时，你可以获得攻击范围内任意名角色各一张牌。然后此回合结束时，这些角色中未于本回合受到过伤害的角色依次获得你的一张牌。",
	jsrg_xugong: "承许贡",
	jsrg_xugong_prefix: "承",
	jsrgbiaozhao: "表召",
	jsrgbiaozhao_info: "准备阶段，你可以选择两名其他角色A和B。直到你的下回合开始时或你死亡后，A对B使用牌无次数和距离限制，且B对你使用的牌造成的伤害+1。",
	jsrgyechou: "业仇",
	jsrgyechou_info: "当你死亡时，你可以令一名其他角色获得如下效果：当其受到伤害值不小于其体力值的伤害时，其令此伤害翻倍。",
	jsrg_chunyuqiong: "承淳于琼",
	jsrg_chunyuqiong_prefix: "承",
	jsrgcangchu: "仓储",
	jsrgcangchu_info: "一名角色的结束阶段，你可以令至多X名角色各摸一张牌，若X大于存活角色数，则改为各摸两张牌（X为你于此回合得到的牌数）。",
	jsrgshishou: "失守",
	jsrgshishou_info: "锁定技。①当你使用【酒】时，你摸三张牌，然后你本回合不能再使用牌。②当你受到火焰伤害后，你令〖仓储〗失效直到你的下回合结束后。",
	//江山如故·转
	ying: "影",
	ying_info: "当此牌进入弃牌堆后，系统将此牌移出游戏。",
	jsrg_guojia: "梦郭嘉",
	jsrg_guojia_prefix: "梦",
	jsrgqingzi: "轻辎",
	jsrgqingzi_info: "准备阶段，你可以弃置任意名其他角色装备区里的各一张牌，然后令这些角色获得〖神速〗直到你的下回合开始。",
	jsrgdingce: "定策",
	jsrgdingce_info: "当你受到伤害后，你可以依次弃置你与伤害来源的各一张手牌。若这两张牌颜色相同，你视为使用一张【洞烛先机】。",
	jsrgzhenfeng: "针锋",
	jsrgzhenfeng_info: "出牌阶段每种类别各限一次。你可以视为使用一张存活角色的技能描述中包含的基本牌或普通锦囊牌（无距离和次数限制）。当此牌对技能描述中包含此牌的角色生效时，你对其造成1点伤害。",
	jsrg_zhangfei: "转张飞",
	jsrg_zhangfei_prefix: "转",
	jsrgbaohe: "暴喝",
	jsrgbaohe_info: "一名角色的出牌阶段结束时，你可以弃置两张牌，然后视为你对攻击范围内包含其的所有角色使用一张【杀】。当一名角色使用牌响应此【杀】后，此【杀】对后续目标角色造成的伤害+1。",
	jsrgxushi: "虚势",
	jsrgxushi_info: "出牌阶段限一次。你可以交给任意名角色各一张牌，然后你获得两倍数量的【影】。",
	jsrg_machao: "转马超",
	jsrg_machao_prefix: "转",
	jsrgzhuiming: "追命",
	jsrgzhuiming_info: "当你使用【杀】指定唯一目标后，你可以声明一种颜色并令目标角色弃置任意张牌，然后你展示目标角色一张牌。若此牌颜色与你声明的颜色相同，则此【杀】不计入次数限制、不可被响应且伤害+1。",
	jsrg_lougui: "转娄圭",
	jsrg_lougui_prefix: "转",
	jsrgshacheng: "沙城",
	jsrgshacheng_info: "①游戏开始时，你将牌堆顶的两张牌置于武将牌上，称为“城”。②当一名角色使用【杀】结算结束后，你可以移去一张“城”，令此牌的其中一名目标角色摸X张牌（X为该角色本回合失去过的牌数且至多为5）。",
	jsrgninghan: "凝寒",
	jsrgninghan_info: "锁定技。①所有角色手牌中的♣【杀】均视为冰【杀】。②当一名角色受到冰冻伤害后，你将造成此伤害的牌对应的实体牌置入“城”。",
	jsrg_zhangren: "转张任",
	jsrg_zhangren_prefix: "转",
	jsrgfuni: "伏匿",
	jsrgfuni_info: "锁定技。①你的攻击范围终值为0。②一轮游戏开始时，你令任意名角色获得共计X张【影】（X为存活角色数的一半，向上取整）。③当有牌进入弃牌堆后，若其中有【影】，你于本回合使用牌无距离限制且不能被响应。",
	jsrgchuanxin: "穿心",
	jsrgchuanxin_info: "一名角色的结束阶段，你可以将一张牌当【杀】使用。当一名角色受到渠道为此【杀】的伤害时，此伤害+Y（Y为其本回合回复过的体力值）。",
	jsrg_huangzhong: "转黄忠",
	jsrg_huangzhong_prefix: "转",
	jsrgcuifeng: "摧锋",
	jsrgcuifeng_info: "限定技。出牌阶段，你可以视为使用一张单目标的伤害类牌（无距离限制）。此回合结束时，若此牌未造成伤害或造成的伤害值大于1，你重置〖摧锋〗。",
	jsrgdengnan: "登难",
	jsrgdengnan_info: "限定技。出牌阶段，你可以视为使用一张非伤害类普通锦囊牌。此回合结束时，若此牌的目标均于此回合受到过伤害，你重置〖登难〗。",
	jsrg_xiahourong: "转夏侯荣",
	jsrg_xiahourong_prefix: "转",
	jsrgfenjian: "奋剑",
	jsrgfenjian_info: "每回合各限一次。当你需要对其他角色使用【决斗】或【桃】时，你可以令你本回合受到的伤害+1，视为使用之。",
	jsrg_sunshangxiang: "转孙尚香",
	jsrg_sunshangxiang_prefix: "转",
	jsrgguiji: "闺忌",
	jsrgguiji_info: "每回合限一次。出牌阶段，你可以与一名手牌数小于你的男性角色交换手牌。然后其下个出牌阶段结束时，你可以与其交换手牌。",
	jsrgjiaohao: "骄豪",
	jsrgjiaohao_info: "①其他角色的出牌阶段限一次。其可以将手牌中的一张装备牌置于你的装备区。②准备阶段，你获得X张【影】（X为你空置装备栏数的一半，向上取整）。",
	jsrg_pangtong: "转庞统",
	jsrg_pangtong_prefix: "转",
	jsrgmanjuan: "漫卷",
	jsrgmanjuan_info: "若你没有手牌，你可以如手牌般使用或打出于本回合进入弃牌堆的牌（每种点数每回合限一次）。",
	jsrgyangming: "养名",
	jsrgyangming_info: "出牌阶段限一次。你可以与一名角色拼点，若其：没赢，你可以与其重复此流程；赢，其摸X张牌，然后你回复1点体力（X为其此阶段没赢的次数）。",
	jsrg_hansui: "转韩遂",
	jsrg_hansui_prefix: "转",
	jsrgniluan: "逆乱",
	jsrgniluan_info: "准备阶段，你可以选择一项：1.弃置一张牌，对一名未对你造成过伤害的角色造成1点伤害；2.令一名对你造成过伤害的角色摸两张牌。",
	jsrghuchou: "互雠",
	jsrghuchou_info: "锁定技。当你对最后对你使用伤害类牌的角色造成伤害时，此伤害+1。",
	jsrgjiemeng: "皆盟",
	jsrgjiemeng_info: "主公技，锁定技。所有群势力角色至其他角色的距离-X（X为群势力角色数）。",
	jsrg_zhangchu: "转张楚",
	jsrg_zhangchu_prefix: "转",
	jsrghuozhong: "惑众",
	jsrghuozhong_info: "所有角色出牌阶段限一次。其可以将一张黑色非锦囊牌当【兵粮寸断】置于其判定区，然后令你摸两张牌。",
	jsrgrihui: "日彗",
	jsrgrihui_info: "①当你使用【杀】对目标角色造成伤害后，你可以令判定区有牌的其他角色各摸一张牌。②你于一回合内对判定区没有牌的角色使用的第一张【杀】无任何次数限制。",
	jsrg_xiahouen: "转夏侯恩",
	jsrg_xiahouen_prefix: "转",
	jsrghujian: "护剑",
	jsrghujian_info: "①游戏开始时，你从游戏外获得一张【赤血青锋】。②一名角色的回合结束时，此回合最后一名使用或打出牌的角色可以获得弃牌堆中的【赤血青锋】。",
	jsrgshili: "恃力",
	jsrgshili_info: "出牌阶段限一次。你可以将一张手牌中的装备牌当【决斗】使用。",
	jsrg_fanjiangzhangda: "转范强张达",
	jsrg_fanjiangzhangda_ab: "转范疆张达",
	jsrg_fanjiangzhangda_prefix: "转",
	jsrgfushan: "负山",
	jsrgfushan_info: "出牌阶段开始时，所有其他角色可以依次交给你一张牌并令你此阶段使用【杀】的次数上限+1。此阶段结束时，若你使用【杀】的次数未达到上限且此阶段以此法交给你牌的角色均存活，你失去2点体力，否则你将手牌摸至体力上限。",
	//江山如故·合
	jsrg_zhugeliang: "梦诸葛亮",
	jsrg_zhugeliang_prefix: "梦",
	jsrgwentian: "问天",
	jsrgwentian_info: "①你可以将牌堆顶的牌当【无懈可击】/【火攻】使用，若此牌不为黑色/红色，〖问天〗于本轮失效。②每回合限一次。你的一个阶段开始时，你可以观看牌堆顶的五张牌，然后将其中一张牌交给一名其他角色，将其余牌以任意顺序置于牌堆顶或牌堆底。",
	jsrgchushi: "出师",
	jsrgchushi_info: "出牌阶段限一次。若你不为主公，你可以与主公议事。若结果为：红色，你与其各摸一张牌，若你与其手牌数之和小于7，重复此流程；黑色，当你于本轮内造成属性伤害时，此伤害+1。",
	jsrgyinlve: "隐略",
	jsrgyinlve_info: "每轮各限一次。当一名角色受到火焰/雷电伤害时，你可以防止此伤害，然后于当前回合结束后执行一个只有摸牌/弃牌阶段的回合。",
	jsrg_jiangwei: "合姜维",
	jsrg_jiangwei_prefix: "合",
	jsrgjinfa: "矜伐",
	jsrgjinfa_info: "出牌阶段限一次。你可以展示一张手牌，然后令所有体力上限不大于你的角色议事。若结果与此牌颜色：相同，你令其中至多两名角色将手牌摸至体力上限；不同，你获得两张【影】。然后若没有其他角色与你意见相同，你可以变更势力。",
	jsrgfumou: "复谋",
	jsrgfumou_info: "魏势力技。当你议事结算结束后，与你意见不同的角色本回合不能使用或打出与其意见颜色相同的牌，你可以将一张【影】当【出其不意】对一名与你意见不同的角色使用。",
	jsrgxuanfeng: "选锋",
	jsrgxuanfeng_info: "蜀势力技。你可以将一张【影】当无距离和次数限制的刺【杀】使用。",
	jsrg_luxun: "合陆逊",
	jsrg_luxun_prefix: "合",
	jsrgyoujin: "诱进",
	jsrgyoujin_info: "出牌阶段开始时，你可以与一名角色拼点，你与其本回合不能使用或打出点数小于自己拼点牌的手牌，且赢的角色视为对没赢的角色使用一张【杀】。",
	jsrgdailao: "待劳",
	jsrgdailao_info: "出牌阶段，若你没有可以使用的手牌，你可以展示所有手牌并摸两张牌，然后结束此回合。",
	jsrgzhubei: "逐北",
	jsrgzhubei_info: "锁定技。①当你对本回合受到过伤害的角色造成伤害时，此伤害+1。②你对本回合失去过最后手牌的角色使用牌无次数限制。",
	jsrg_zhaoyun: "合赵云",
	jsrg_zhaoyun_prefix: "合",
	jsrglonglin: "龙临",
	jsrglonglin_info: "其他角色于其出牌阶段内首次使用【杀】指定第一个目标后，你可以弃置一张牌令此【杀】无效，然后其可以视为对你使用一张【决斗】，你以此法造成伤害后，其本阶段不能再使用手牌。",
	jsrgzhendan: "镇胆",
	jsrgzhendan_info: "①你可以将一张非基本手牌当任意基本牌使用或打出。②当你受到伤害后，你摸X张牌并令该技能本轮失效（X为本轮所有角色执行过的回合数且至多为5）。③一轮游戏开始时，若上一轮该技能未因〖镇胆②〗失效过，你摸Y张牌（Y为上一轮所有角色执行过的回合数且至多为5）。",
	jsrg_simayi: "合司马懿",
	jsrg_simayi_prefix: "合",
	jsrgyingshi: "鹰眎",
	jsrgyingshi_info: "当你翻面时，你可以观看牌堆底的三张牌（若死亡角色数大于2则改为五张），然后将其中任意数量的牌以任意顺序置于牌堆顶，其余以任意顺序置于牌堆底。",
	jsrgtuigu: "蜕骨",
	jsrgtuigu_info: "①回合开始时，你可以翻面并令你本回合的手牌上限+X，然后摸X张牌并视为使用一张【解甲归田】（X为存活角色数的一半，向下取整），目标角色不能使用以此法得到的牌直到其回合结束。②一轮游戏开始时，若你上一轮未执行过回合（因〖蜕骨②〗执行的回合除外），你获得一个额外的回合。③当你失去装备牌里的牌后，你回复1点体力。",
	jsrg_guoxun: "合郭循",
	jsrg_guoxun_prefix: "合",
	jsrgeqian: "遏前",
	jsrgeqian_info: "①结束阶段，你可以蓄谋任意次。②当你使用【杀】或蓄谋牌指定其他角色为唯一目标后，你可以令此牌不计入次数限制并获得目标一张牌，然后其可以令你本回合至其的距离+2。",
	jsrgfusha: "伏杀",
	jsrgfusha_info: "限定技。出牌阶段，若你的攻击范围内仅有一名角色，你可以对其造成X点伤害（X为你的攻击范围，至多为游戏人数）。",
	jsrg_sunlubansunluyu: "合大小虎",
	jsrg_sunlubansunluyu_prefix: "合",
	jsrgdaimou: "殆谋",
	jsrgdaimou_info: "每回合各限一次。当一名角色使用【杀】指定其他角色/你为目标时，你可以用牌堆顶的牌蓄谋/你须弃置你区域里的一张蓄谋牌。",
	jsrgfangjie: "芳洁",
	jsrgfangjie_info: "准备阶段，若你没有蓄谋牌，你回复1点体力并摸一张牌，否则你可以弃置你区域里的任意张蓄谋牌并失去〖芳洁〗。",
	jsrg_caofang: "合曹芳",
	jsrg_caofang_prefix: "合",
	jsrgzhaotu: "诏图",
	jsrgzhaotu_info: "每轮限一次。你可以将一张红色非锦囊牌当【乐不思蜀】使用，然后当前回合结束后，目标执行一个手牌上限-2的额外回合。",
	jsrgjingju: "惊惧",
	jsrgjingju_info: "当你需要使用任意一种基本牌时，你可以将其他角色判定区里的一张牌移动至你的判定区，视为你使用之。",
	jsrgweizhui: "危坠",
	jsrgweizhui_info: "主公技。其他魏势力角色的结束阶段，其可以将一张黑色手牌当【过河拆桥】对你使用。",
	jsrg_sunjun: "合孙峻",
	jsrg_sunjun_prefix: "合",
	jsrgyaoyan: "邀宴",
	jsrgyaoyan_info: "准备阶段，你可以令所有角色依次选择是否于回合结束时议事，若议事结果为：红色，你获得任意名未议事的角色各一张手牌；黑色，你可以对一名议事的角色造成2点伤害。",
	jsrgbazheng: "霸政",
	jsrgbazheng_info: "当你参与的议事展示意见时，本回合受到过你伤害的角色意见视为与你相同。",
	jsrg_liuyong: "合刘永",
	jsrg_liuyong_prefix: "合",
	jsrgdanxin: "丹心",
	jsrgdanxin_info: "你可以将一张牌当【推心置腹】使用，你展示以此法交出与得到的牌，以此法得到♥牌的角色回复1点体力，然后你至目标角色的距离+1直到回合结束。",
	jsrgfengxiang: "封乡",
	jsrgfengxiang_info: "锁定技。当你受到伤害后，你与一名其他角色交换装备区里的所有牌。若你装备区里的牌因此减少，你摸等同于减少牌数的牌。",
	jsrg_weiwenzhugezhi: "合卫温诸葛直",
	jsrg_weiwenzhugezhi_prefix: "合",
	jsrgfuhai: "浮海",
	jsrgfuhai_info: "出牌阶段限一次。你可以令所有有手牌的其他角色同时展示一张手牌，然后你选择一个方向并摸X张牌（X为该方向上的角色展示的点数连续严格递增或严格递减的牌数，至少为1）。",
	jsrg_zhangxuan: "合张嫙",
	jsrg_zhangxuan_prefix: "合",
	jsrgtongli: "同礼",
	jsrgtongli_info: "当你于出牌阶段内使用基本牌或普通锦囊牌指定第一个目标后，若你手牌中的花色数和你于本阶段内使用过的牌数相等，则你可以展示所有手牌，令此牌额外结算一次。",
	jsrgshezang: "奢葬",
	jsrgshezang_info: "每轮限一次。当你或你回合内的其他角色进入濒死状态时，你可以亮出牌堆顶的四张牌，获得其中任意张花色各不相同的牌。",
	jsrg_gaoxiang: "合高翔",
	jsrg_gaoxiang_prefix: "合",
	jsrgchiying: "驰应",
	jsrgchiying_info: "出牌阶段限一次。你可以选择一名角色，令其攻击范围内的其他角色依次弃置一张牌。若以此法弃置的基本牌数不大于其体力值，其获得这些基本牌。",
	jsrg_guozhao: "合郭照",
	jsrg_guozhao_prefix: "合",
	jsrgpianchong: "偏宠",
	jsrgpianchong_info: "一名角色的结束阶段，若你于此回合内失去过牌，你可以判定。若结果为红色/黑色，你摸此回合进入弃牌堆的红色/黑色牌数量的牌。",
	jsrgzunwei: "尊位",
	jsrgzunwei_info: "出牌阶段限一次。你可以选择一名其他角色并选择执行一项，然后移除该选项：1.将手牌数摸至与该角色相同（最多摸五张）；2.将其装备牌移至你的装备区，直到你装备区的牌数不少于其；3.将体力值回复至与该角色相同。",

	xumou_jsrg: "蓄谋",
	xumou_jsrg_info: "“蓄谋”牌可在判定区内重复存在。判定阶段开始时，你选择一项：⒈使用此牌对应的实体牌，然后本阶段不能再使用此牌名的牌；⒉将所有的“蓄谋”牌置入弃牌堆。",

	jsrg_yuanshao: "梦袁绍",
	jsrg_yuanshao_prefix: "梦",
	jsrgzhimeng: "执盟",
	jsrgzhimeng_info: "准备阶段，你可以亮出牌堆顶的Ｘ张牌（Ｘ为存活角色数），然后令所有角色同时展示一张手牌。若有角色展示的手牌花色与其他角色均不同，则这些角色从亮出牌中获得该花色的所有牌。",
	jsrgtianyu: "天予",
	jsrgtianyu_info: "当一张具有“伤害”标签的牌或装备牌被置入弃牌堆时，若此牌本回合内未处于过任何角色的手牌区或装备区，则你可以获得之。",
	jsrgzhuni: "诛逆",
	jsrgzhuni_info: "出牌阶段限一次，你可以令所有角色同时选择一名除你之外的其他角色。若有角色本回合内被指定过的次数唯一最多，则你本回合内对该角色使用牌没有次数和距离限制。",
	jsrghezhi: "合志",
	jsrghezhi_info: "主公技，锁定技。其他群势力角色需要因〖诛逆〗而选择角色时，改为选择你本次选择的角色。",
	jsrg_caojiewangfu: "衰曹节王甫",
	jsrg_caojiewangfu_prefix: "衰",
	jsrgzonghai: "纵害",
	jsrgzonghai_info: "每轮限一次。当有其他角色进入濒死状态时，你可以令其选择至多两名角色。未被选择的角色不能于此次濒死结算中使用牌，且此次濒死状态结算结束后，你对其选择的角色各造成１点伤害。",
	jsrgjueyin: "绝禋",
	jsrgjueyin_info: "当你于一回合内首次受到伤害后，你可以摸三张牌，然后本回合内所有角色受到的伤害+1。",
	jsrg_songhuanghou: "衰宋皇后",
	jsrg_songhuanghou_prefix: "衰",
	jsrgzhongzen: "众谮",
	jsrgzhongzen_info: "锁定技。①弃牌阶段开始时，你令所有手牌数小于你的角色各交给你一张手牌。②弃牌阶段结束时，若你本阶段弃置的♠牌数大于你的体力值，则你弃置所有牌。",
	jsrgxuchong: "虚宠",
	jsrgxuchong_info: "当你成为牌的目标后，你可以选择一项：⒈摸一张牌；⒉令当前回合角色本回合的手牌上限+2。选择完成后，你获得一张【影】。",
	jsrg_zhangjiao: "衰张角",
	jsrg_zhangjiao_prefix: "衰",
	jsrgxiangru: "相濡",
	jsrgxiangru_info: "当一名已受伤的其他角色／你受到致命伤害时，你／已受伤的其他角色可以交给伤害来源两张牌，然后防止此伤害。",
	jsrgwudao: "悟道",
	jsrgwudao_info: "觉醒技。一名角色进入濒死状态时，若你没有手牌，则你加１点体力上限并回复１点体力，然后获得〖惊雷〗。",
	jsrgjinglei: "惊雷",
	jsrgjinglei_info: "准备阶段，你可以选择一名其他角色Ａ，然后选择任意名手牌数之和小于Ａ的角色，令这些角色依次对Ａ造成１点雷属性伤害。",
	jsrg_yangqiu: "衰阳球",
	jsrg_yangqiu_prefix: "衰",
	jsrgsaojian: "扫奸",
	jsrgsaojian_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，然后展示其中的一张（对该角色自己不可见）。然后该角色重复弃置一张手牌，直到其以此法弃置了五张牌／弃置了你选择的牌／没有可弃置的手牌。若其弃置完成后的手牌数大于你，则你失去１点体力。",
	jsrg_dongzhuo: "衰董卓",
	jsrg_dongzhuo_prefix: "衰",
	jsrgguanshi: "观势",
	jsrgguanshi_info: "出牌阶段限一次，你可以将【杀】当作【火攻】对任意名角色使用。当此【火攻】对一名目标角色结算结束后，若未对其造成伤害，则此牌对其余目标角色改为以【决斗】的形式结算。",
	jsrgcangxiong: "藏凶",
	jsrgcangxiong_info: "当你因弃置或被其他角色得到牌而失去一张牌后，你可以用此牌蓄谋。然后若此时在你的出牌阶段内，则你摸一张牌。",
	jsrgjiebing: "劫柄",
	jsrgjiebing_info_identity: "觉醒技。准备阶段，若你的蓄谋牌数大于主公的体力值，则你加２点体力上限并回复２点体力，然后获得〖暴威〗。",
	jsrgjiebing_info: "觉醒技。准备阶段，若你的蓄谋牌数大于一号位的体力值，则你加２点体力上限并回复２点体力，然后获得〖暴威〗。",
	jsrgbaowei: "暴威",
	jsrgbaowei_info: "锁定技。结束阶段，若本回合内使用或打出过牌的其他角色数：大于２，则你失去２点体力；不大于２，则你对其中一名角色造成２点伤害。",
	jsrg_zhanghuan: "衰张奂",
	jsrg_zhanghuan_prefix: "衰",
	jsrgzhushou: "诛首",
	jsrgzhushou_info: "一名角色的回合结束时，若你于本回合内失去过牌，则你可以选择弃牌堆中本回合置入的点数唯一最大的牌，并对本回合失去过此牌的一名角色造成1点伤害。",
	jsrgyangge: "扬戈",
	jsrgyangge_mizhao: "密诏",
	jsrgyangge_info: "每轮限一次。体力值最低的其他角色可以于其出牌阶段内对你发动〖密诏〗。",
	jsrg_liubiao: "衰刘表",
	jsrg_liubiao_prefix: "衰",
	jsrgyansha: "宴杀",
	jsrgyansha_info: "准备阶段，你可以视为对任意名角色使用【五谷丰登】。此牌结算结束后，所有非目标角色可以依次将一张装备牌当作【杀】对其中一名目标角色使用。",
	jsrgqingping: "清平",
	jsrgqingping_info: "结束阶段，若你攻击范围内的角色均有手牌且手牌数均不大于你，则你可以摸等同于这些角色数的牌。",
	jsrg_yl_luzhi: "衰卢植",
	jsrg_yl_luzhi_prefix: "衰",
	jsrgruzong: "儒宗",
	jsrgruzong_info: "回合结束时，若你本回合使用牌指定过的目标角色仅有一名，则你可以将手牌数摸至与其相同。若该角色为你自己，则你可以改为令任意名其他角色将手牌摸至与你相同（均至多摸五张）。",
	jsrgdaoren: "蹈刃",
	jsrgdaoren_info: "出牌阶段限一次，你可以将一张手牌交给一名其他角色，然后对你与其攻击范围内均包含的所有角色各造成１点伤害。",
	jsrg_chenfan: "衰陈蕃",
	jsrg_chenfan_prefix: "衰",
	jsrggangfen: "刚忿",
	jsrggangfen_info: "当手牌数大于你的角色使用【杀】指定其他角色为目标时，你可以成为此【杀】的额外目标，并令所有其他角色也选择是否如此做。然后使用者展示其手牌，若其黑色手牌数小于目标数，则取消此【杀】的所有目标。",
	jsrgdangren: "当仁",
	jsrgdangren_info: "转换技。阴：当你需要对自己使用【桃】时，你可以视为使用之。阳：当你可以对其他角色使用【桃】时，你须视为使用之。",
	jsrg_zhangju: "衰张举",
	jsrg_zhangju_prefix: "衰",
	jsrgqiluan: "起乱",
	jsrgqiluan_info: "每回合限两次。当你需要使用【杀】或【闪】时，你可以弃置任意张牌，并令至多等两名其他角色选择是否代替你使用之。若有角色响应，则你摸等同与你弃置牌数的牌。",
	jsrgxiangjia: "相假",
	jsrgxiangjia_info: "出牌阶段限一次。若你的装备区内有武器牌，则你可以视为使用一张【借刀杀人】。然后此牌的目标角色可以视为对你使用一张【借刀杀人】。",
	//江山如故·兴
	jsrg_jiananfeng: "兴贾南风",
	jsrg_jiananfeng_prefix: "兴",
	jsrgfuyu: "覆雨",
	jsrgfuyu_info: "出牌阶段限一次，你可以与任意名角色议事，若结果与你的意见一致，你可以分别对一名意见不同和未参与议事的角色各造成1点伤害。",
	jsrgshanzheng: "擅政",
	jsrgshanzheng_info: "你参与议事选择议事牌前，若你手牌数或体力值为全场最大，则你此次议事无需展示手牌，仅声明颜色，且你的意见视为两名角色的意见。",
	jsrgxiongbao: "凶暴",
	jsrgxiongbao_info: "锁定技，其他女性角色和手牌数小于你的角色不能响应你使用的牌。",
	jsrgliedu: "烈妒",
	jsrgliedu_info: "每回合限一次，当你对体力值小于你的女性角色或体力值为1的角色造成伤害时，你可以令此伤害值翻倍。",
};

export default translates;
