const translates = {
	sp_key_yuri: "SP仲村由理",
	sp_key_yuri_prefix: "SP",
	key_lucia: "此花露西娅",
	key_kyousuke: "枣恭介",
	key_yuri: "仲村由理",
	key_haruko: "神尾晴子",
	key_umi: "加藤うみ",
	key_umi2: "鹰原羽未",
	key_rei: "零",
	key_komari: "神北小毬",
	key_yukine: "宫泽有纪宁",
	key_yusa: "西森柚咲",
	key_misa: "黑羽美砂",
	key_masato: "井之原真人",
	key_iwasawa: "岩泽雅美",
	key_kengo: "宫泽谦吾",
	key_yoshino: "吉野晴彦",
	key_yui: "由依",
	key_tsumugi: "紬文德斯",
	key_saya: "朱鹭户沙耶",
	key_harukakanata: "三枝叶留佳&二木佳奈多",
	key_harukakanata_ab: "三枝二木",
	key_inari: "稻荷",
	key_shiina: "椎名",
	key_sunohara: "春原阳平&春原芽衣",
	key_sunohara_ab: "阳平芽衣",
	//该武将国战模式下不可用
	key_rin: "枣铃",
	key_sasami: "笹濑川佐佐美",
	key_akane: "千里朱音",
	key_doruji: "多鲁基",
	key_yuiko: "来谷唯湖",
	key_riki: "直枝理树" /*+'子'*/,
	key_hisako: "渕田久子",
	key_hinata: "日向秀树",
	key_noda: "野田",
	key_tomoya: "冈崎朋也",
	key_nagisa: "古河渚",
	key_ayato: "直井文人",
	key_ao: "空门苍",
	key_yuzuru: "音无结弦",
	sp_key_kanade: "SP立华奏",
	sp_key_kanade_prefix: "SP",
	key_mio: "西园美鱼",
	key_midori: "西园美鸟",
	key_kyoko: "岬镜子",
	key_shizuru: "中津静流",
	key_shiorimiyuki: "关根诗织&入江美雪",
	key_shiorimiyuki_ab: "关根入江",
	key_miki: "野村美希",
	key_shiori: "美坂栞",
	key_kaori: "美坂香里",
	key_akiko: "水濑秋子",
	key_abyusa: "游佐",
	key_godan: "松下护騨",
	key_yuu: "乙坂有宇",
	key_ryoichi: "三谷良一",
	key_kotori: "神户小鸟",
	key_jojiro: "高城丈士朗",
	key_shiroha: "鸣濑白羽",
	key_shizuku: "水织静久",
	key_hiroto: "铃木央人",
	key_sakuya: "凤咲夜",
	key_youta: "成神阳太",
	key_rumi: "七濑留美",
	key_chihaya: "凤千早",
	key_yukito: "国崎往人",
	key_crow: "小空",
	key_asara: "井上晶",
	key_kotomi: "一之濑琴美",
	key_mia: "藤川米娅",
	key_kano: "雾岛佳乃",
	db_key_liyingxia: "李映夏",
	key_erika: "苍井绘里香",
	key_satomi: "藏里见",
	key_iriya: "喵呜·喵呼",
	key_iriya_ab: "喵呜喵呼",
	key_fuuko: "伊吹风子",
	lucia_duqu: "毒躯",
	lucia_duqu_info: "锁定技，①当你对其他角色造成伤害或受到其他角色的伤害时，你令对方获得一张花色点数随机的【毒】。<br>②当你因【毒】失去体力时，你改为回复等量的体力。",
	lucia_zhenren: "振刃",
	lucia_zhenren_info: "锁定技，每个结束阶段，若你的装备区内有牌，则你弃置之。然后，你依次弃置场上的X张牌。（X为你以此法弃置的牌数）",
	nk_shekong: "设控",
	nk_shekong_info: "出牌阶段限一次，你可以弃置任意张手牌并选择一名其他角色（不能超过该角色的牌数），然后令其选择一项：弃置一张牌并令你摸X张牌，或弃置X张牌并令你摸一张牌。然后，你将你与其弃置的且位于弃牌堆中的牌以任意顺序置于牌堆顶。",
	key_huanjie: "幻界",
	key_huanjie_info: "锁定技，当你进行判定或摸牌时，你改为从牌堆的另一端获取相应的牌。",
	yuri_xingdong: "行动",
	yuri_xingdong_info: "锁定技，出牌阶段开始时，你获得一张【杀】或普通锦囊牌。出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌；或跳过下回合的判定阶段和摸牌阶段。",
	//目标角色跳过阶段的同时 该回合不能发动〖整经(郑玄)〗
	yuri_wangxi: "忘隙",
	yuri_wangxi_info: "主公技，限定技，当有角色因你发动的【行动】而死亡后，若其身份不为【明忠】，则其可以将身份改为忠臣并重新加入游戏，然后将势力改为与你相同，将体力值回复至2点并摸一张牌。",
	haruko_haofang: "豪放",
	haruko_haofang_info: "锁定技，你的延时锦囊牌视为【无中生有】。当你因执行【无中生有】的效果而摸牌时，你令摸牌数+2。",
	haruko_zhuishi: "追逝",
	haruko_zhuishi_info: "一名角色的判定阶段开始时，若其判定区内有牌，则你可以获得其判定区内的所有牌。若你的体力值大于1，你失去1点体力。",
	umi_chaofan: "炒饭",
	umi_chaofan_info: "出牌阶段限一次，你可以弃置两张花色不同的手牌并选择一名其他角色。你摸一张牌，若你的体力值：大于2，目标角色回复1点体力；等于2，目标角色摸两张牌；小于2，目标角色受到1点无来源且对应渠道为这两张牌的火焰伤害。",
	umi_lunhui: "轮回",
	umi_lunhui_info: "一名其他角色的回合结束时，若你的手牌数小于体力值，则你可以失去1点体力。若如此做，你摸两张牌并进行一个额外回合，且你于此回合内计算与此角色的距离视为1。",
	umi_shiroha: "轮回 - 延时效果",
	umi_qihuan: "七幻",
	umi_qihuan_info: "限定技，当你处于濒死状态时，你可以移去此武将牌。若如此做，你回复X点体力（X为场上势力数）。然后，你可获得场上已死亡角色武将牌上的至多两个技能。",
	komari_tiankou: "甜口",
	komari_tiankou_info: "锁定技，当你使用红色的非伤害性基本牌/锦囊牌选择目标时，或成为其他角色使用的这些牌的目标时，你选择一项：1.摸一张牌；2.为此牌增加一个目标。",
	komari_xueshang: "血殇",
	komari_xueshang_info: "锁定技，蓄能技，当有角色死亡时，你对自己造成<span class=yellowtext>1</span>点伤害，然后对所有其他角色依次造成<span class=firetext>1</span>点伤害。当有角色因此法进入濒死状态时，你加1点体力上限并回复1点体力，然后失去此技能并终止此技能的所有后续结算。",
	yukine_wenzhou: "问咒",
	yukine_wenzhou_info: "一名角色的出牌阶段开始时，其可以交给你一张牌。若如此做，你选择一项：交给其一张牌，或令其从牌堆中获得一张与此牌类型相同的牌，且其于此阶段内使用与此牌牌名相同的牌时无法被响应。",
	//如果对自己发动【问咒】，则自己可以响应这些牌。但其他角色发动【问咒】时，该角色自己并不能响应
	yusa_yanyi: "演艺",
	yusa_yanyi_info: "出牌阶段限一次，你可以指定至多X名与你距离不大于你的体力值的角色。这些角色选择一项：①令你摸一张牌。②回复1点体力，然后交给你一张牌。（X为你的攻击范围且至少为1）",
	misa_yehuo: "业火",
	misa_yehuo_info: "一名角色的摸牌阶段开始时，若其在你的攻击范围内，你可以弃置X张牌并选择一项：①对其造成1点火属性伤害。②令其于此摸牌阶段放弃摸牌。（X为你与其的的距离）",
	yusa_misa: "通灵",
	yusa_misa_info: "当你发动的〖演艺〗结算完成之后，你可以将武将牌翻面。",
	misa_yusa: "归魂",
	misa_yusa_info: "当你发动的〖业火〗结算完成后，你可以将武将牌翻面。",
	masato_baoquan: "暴拳",
	masato_baoquan_info: "锁定技，当你即将造成伤害时，你选择一项：1.令此伤害+2并减1点体力上限。2.防止此伤害。",
	iwasawa_yinhang: "引吭",
	iwasawa_yinhang_info: "锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。",
	iwasawa_mysong: "My Song",
	iwasawa_mysong_info: "锁定技，当你即将进行濒死结算时，取消之。回合开始时，若你的体力值小于1，则你获得技能〖奋音〗直到回合结束。回合结束时，若你的体力值小于1，你死亡。",
	iwasawa_fenyin: "奋音",
	iwasawa_fenyin_info: "你的回合内，当你使用牌时，若此牌与你于此回合内使用的上一张牌的颜色不同，则你可以摸一张牌。",
	iwasawa_refenyin: "奋音",
	iwasawa_refenyin_info: "锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。",
	//卡牌花色的计算不受〖红颜〗等技能的影响
	kengo_weishang: "伪伤",
	kengo_weishang_sha: "伪伤",
	kengo_weishang_shan: "伪伤",
	kengo_weishang_info: "出牌阶段限一次，你可以废除一个装备栏并摸两张牌。若你的武器栏已废除，则你使用【杀】的次数上限+1，且当你使用【杀】指定目标后，目标角色弃置一张牌；若你的防具栏已废除，则你可以将一张牌当做【闪】使用或打出；若你的攻击/防御坐骑栏已废除，则你至其他角色的距离-1/其他角色至你的距离-1。",
	kengo_guidui: "归队",
	kengo_guidui_info: "锁定技，准备阶段，若你有已废除的装备栏，则你恢复这些装备栏，且本局游戏内发动【伪伤】时不能废除这些装备栏。",
	yoshino_jueyi: "决义",
	yoshino_jueyi_info: "出牌阶段开始时，你可以选择一名其他角色。你摸一张牌并与其猜拳（平局则重来）。若你赢，你对其造成1点伤害。若你没赢，你本阶段内使用牌时不能指定其为目标。",
	yui_jiang: "激昂",
	yui_jiang_info: "每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
	yui_lieyin: "烈音",
	yui_lieyin_info: "锁定技，出牌阶段开始时，你选择一项：①本阶段内的红色牌均视为【杀】；②本阶段内的【杀】均视为【决斗】。",
	yui_takaramono: "珍宝",
	yui_takaramono_info: "觉醒技，准备阶段，若你满足以下条件中的至少两个：①体力值不大于1；②场上有已死亡的角色；③已因〖激昂〗累计获得过至少三张牌；则你获得技能〖引吭〗，将〖烈音〗描述中的「你选择」改为「你可选择」，然后加1点体力上限并回复1点体力。",
	//ユイ/孙笨双将组合时，孙笨的〖激昂〗不计入〖珍宝〗的次数统计
	yui_yinhang: "引吭",
	yui_yinhang_info: "锁定技，当你的体力值变化1点时，你可以令至多两名角色摸一张牌。",
	tsumugi_mugyu: "姆啾",
	tsumugi_mugyu_info: "当你成为牌的目标后，若你的手牌数小于体力上限，则你可以摸一张牌。",
	tsumugi_huilang: "回廊",
	tsumugi_huilang2: "回廊",
	tsumugi_huilang_info: "回合结束时，你可以将任意张牌扣置于武将牌下（均称为「隐」）。回合开始时，你获得所有「隐」，然后可令等量的角色各摸一张牌。",
	//〖回廊〗涉及的所有卡牌移动的结算不会触发〖良姻〗
	haruka_shuangche: "双掣",
	kanata_shuangche: "双掣",
	haruka_shuangche_backup: "双掣",
	haruka_shuangche_info: "出牌阶段，你可以视为使用任意基本牌或普通锦囊牌。此牌结算完成后，你选择一项：1.弃置X张牌。2.失去1点体力且本回合内不能再发动〖双掣〗。（X为你于此回合内发动过〖双掣〗的次数）",
	//你不能以此法使用〖回魂〗
	saya_shouji: "授计",
	saya_shouji_info: "每回合限一次，当你使用的牌结算完成后，你可以将此牌对应的所有实体牌交给一名其他角色。其可以使用这些牌中的一张，若如此做，你摸一张牌。",
	saya_powei: "破围",
	saya_powei_info: "限定技，回合结束后，你可以选择一名体力值大于你的其他角色。你与其交替进行额外回合，直到你与其中的一名角色死亡或进行到九个回合。你于回合开始时进行判定，若结果为红色，则你对其造成1点伤害。此过程中其他角色不计入距离和座次计算。",
	saya_judge: "破围",
	saya_nodis: "破围",
	//〖破围〗不会因为〖铁骑〗无效
	inari_baiwei: "摆尾",
	inari_baiwei_draw: "摆尾",
	inari_baiwei_info: "你可以将一张♦牌当做任意基本牌使用或打出。此牌结算完成后，你摸一张牌。",
	//你不能以此法使用【毒】
	inari_baiwei_backup: "摆尾",
	inari_baiwei_sha: "摆尾",
	inari_baiwei_shan: "摆尾",
	inari_huhun: "狐魂",
	inari_huhun_info: "锁定技，你的♣牌的花色均视为♦。你的手牌上限+1。",
	shiina_qingshen: "轻身",
	shiina_qingshen_info: "当你受到或造成伤害后，你可以获得此次伤害的渠道对应的实体牌，然后将等量的牌置于你的武将牌上，称为「轻」。锁定技，你的手牌上限和攻击范围+X（X为「轻」数）。",
	shiina_feiyan: "飞燕",
	shiina_feiyan_info: "一名其他角色的回合开始时，若其在你的攻击范围内，则你可以将一张「轻」置于弃牌堆，然后视为对其使用一张【杀】。若此【杀】未造成伤害，你摸一张牌。你于此【杀】的结算流程中视为拥有技能〖铁骑〗。",
	shiina_retieji: "铁骑",
	//你不能对稻荷和多鲁基发动〖飞燕〗
	sunohara_chengshuang: "成双",
	sunohara_chengshuang_phase: "成双",
	sunohara_chengshuang_info: "锁定技，游戏开始时，你选择你的性别。回合开始时，你可以切换你的性别。",
	sunohara_tiaoyin: "挑引",
	sunohara_tiaoyin_info: "出牌阶段限一次，你可以弃置任意张花色各不相同的手牌，然后获得等量角色区域内的各一张牌。若你以此法获得了异性角色区域内的牌，则你失去1点体力。",
	sunohara_jianren: "坚忍",
	sunohara_jianren_info: "当你受到伤害后，你可以令一名角色摸一张牌。若伤害无来源或来源与你性别不同，则改为摸三张牌。",
	rin_baoqiu: "暴球",
	rin_baoqiu_info: "锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。",
	sasami_miaobian: "喵变",
	sasami_miaobian_info: "当你的体力值变为：3以下时，你获得技能〖公清〗，2以下时，你获得技能〖复难〗，1以下时，你获得技能〖暴球〗。",
	sasami_gongqing: "公清",
	sasami_gongqing_info: "锁定技。当你受到伤害时，若伤害来源的攻击范围：<3，则你令此伤害的数值减为1。>3，你令此伤害+1。",
	sasami_funan: "复难",
	sasami_funan_info: "其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。",
	sasami_baoqiu: "暴球",
	sasami_baoqiu_info: "锁定技，你的攻击范围+2。当你使用【杀】指定目标后，你进行判定。若结果：为红色，此【杀】对其的伤害值基数+1；为黑色，其无法闪避此【杀】；为♠/♥，此【杀】不计入使用次数限制且你摸一张牌；为♦/♣，目标角色的所有非锁定技失效直到回合结束，且你弃置其一张牌。",
	akane_jugu: "巨贾",
	akane_jugu_info: "锁定技，1.你的手牌上限+X。2.游戏开始时，你摸X张牌（X为你的体力上限）。",
	akane_quanqing: "权倾",
	akane_quanqing_info: "出牌阶段，你可选择：1.弃置一张点数大于10的牌并对攻击范围内的一名其他角色造成1点伤害；2.弃置一张点数大于6的牌并弃置攻击范围内的一名其他角色区域内的一张牌。3.弃置一张牌并令攻击范围内的一名其他角色摸一张牌。",
	akane_yifu: "蚁附",
	akane_yifu2: "蚁附",
	akane_yifu_info: "主公技，其他键势力角色的出牌阶段限一次，其可交给你一张手牌。然后你摸一张牌，并将一张手牌交给该角色。",
	doruji_feiqu: "肥躯",
	doruji_feiqu_info: "锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。",
	yuiko_fenglun: "锋论",
	yuiko_fenglun_info: "出牌阶段限一次，你可以和一名其他角色拼点。若你赢，你本阶段内使用牌没有次数和距离限制。",
	yuiko_dilve: "底略",
	yuiko_dilve_info: "你可以使用牌堆底的一张牌进行拼点。当你拼点后，你可以获得两张拼点牌。",
	riki_spwenji: "问计",
	riki_spwenji_info: "出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌名称相同的牌时不能被其他角色响应。",
	riki_nvzhuang: "女装",
	riki_nvzhuang_info: "锁定技，此武将牌视为包含女性性别。结束阶段，若你：有手牌，你摸一张牌；没有手牌，你摸两张牌。",
	riki_mengzhong: "梦终",
	riki_mengzhong_info: "觉醒技，准备阶段，若你已因〖问计〗获得了三张或更多的牌，则你加1点体力上限并回复1点体力，失去〖问计〗并获得〖重振〗。",
	riki_chongzhen: "重振",
	riki_chongzhen_info: "出牌阶段开始时，你可以与一名角色拼点。若你赢，你获得该角色手牌区，装备区，判定区的各一张牌；若你没赢，你于此阶段内使用牌时不能指定其他角色为目标。",
	hisako_yinbao: "音爆",
	hisako_yinbao_info: "当你受到伤害/回复体力后，你可以判定。若结果为♠，则你对一名其他角色造成1点雷属性伤害。",
	hisako_zhuanyun: "转运",
	hisako_zhuanyun_info: "锁定技，你的判定会朝向对你有利的方向倾斜。",
	hinata_qiulve: "球略",
	hinata_qiulve_info: "你可以将一张非基本牌当做【杀】使用或打出（无距离限制）。你以此法使用的红色【杀】不可被响应，黑色【杀】不计入使用次数限制。",
	hinata_ehou: "扼喉",
	hinata_ehou_info: "其他角色对你使用的牌结算完成后，你可对其使用一张【杀】。若此【杀】造成伤害，则你摸一张牌。",
	noda_fengcheng: "奉承",
	noda_fengcheng_info: "锁定技，其他角色交给你牌后，其摸一张牌。",
	noda_xunxin: "寻衅",
	noda_xunxin2: "寻衅",
	noda_xunxin_info: "出牌阶段限X次，你可以视为对一名体力值不小于你的角色使用【决斗】。若如此做，此【决斗】结算完成后，没赢的角色交给赢的角色一张牌。（X为你的体力值）",
	tomoya_shangxian: "伤弦",
	tomoya_shangxian_info: "锁定技，你计算与其他角色的距离时始终从逆时针方向计算。出牌阶段开始时，你可摸一张牌，并改变此方向。",
	tomoya_wangjin: "往今",
	tomoya_wangjin_info: "每项每轮各限一次。一名其他角色的回合结束时，若其：在你的攻击范围内，你可令其摸一张牌。若其的体力值小于你，则你摸一张牌，并可交给其一张牌。不在你的攻击范围内，则你摸两张牌，并令其弃置你的一张手牌。若其的体力值大于你，则你视为对其使用一张【杀】（无距离限制）。",
	nagisa_tiandu: "天妒",
	nagisa_tiandu_info: "当你的判定牌生效后，你可以获得此牌。",
	nagisa_fuxin: "抚心",
	nagisa_fuxin_info: "当一名角色于回合外受到伤害，或其手牌被其他角色弃置或获得后，你可以令其判定。若结果为：红色，其摸一张牌。黑色，当前回合角色弃置一张牌。",
	ayato_jianshen: "僭神",
	ayato_jianshen_info: "锁定技，你手牌中的【杀】均视为神属性。",
	ayato_zonghuan: "纵幻",
	ayato_zonghuan_info: "出牌阶段限一次，你可以观看一名其他角色的手牌，然后选择一项：将其中的一张牌置入弃牌堆，或以该角色的视角使用其中的一张，然后摸一张牌。",
	ao_xishi: "习事",
	ao_xishi_info: "锁定技，当你使用或打出♦牌时，或其他角色使用♦牌指定你为目标后，你摸一张牌。",
	ao_kuihun: "窥魂",
	ao_kuihun_info: "其他角色进入濒死状态时，你可以摸一张牌，然后观看其手牌并将其中一张牌置于你的武将牌上，称为「蝶」。你使用与一张「蝶」花色相同的牌时无距离和次数限制。你的手牌上限+X（X为蝶数）。",
	ao_shixin: "释心",
	ao_shixin_info: "觉醒技，准备阶段，若你的「蝶」中包含至少三种花色，则你加1点体力上限并回复1点体力，失去〖窥魂〗并获得〖蝶归〗。",
	ao_diegui: "蝶归",
	ao_diegui_backup: "蝶归",
	ao_diegui_info: "出牌阶段限一次，你可以将一张「蝶」交给一名角色，该角色摸两张牌并复原武将牌。",
	yuzuru_wuxin: "无心",
	yuzuru_wuxin_info: "结束阶段，你可以选择一项：失去1点体力并令一名角色摸两张牌，或弃置两张牌并回复1点体力。",
	yuzuru_deyi: "得义",
	yuzuru_deyi_info: "觉醒技，当有其他角色死亡后，你减1点体力上限并回复1点体力，失去技能〖无心〗，获得技能〖往生〗〖困奋〗和〖去疾〗。",
	yuzuru_wangsheng: "往生",
	yuzuru_wangsheng_info: "觉醒技，当你即将死亡时，你防止此次死亡。你可以将任意张牌交给一名其他角色，然后减1点体力上限并将体力回复至2点，修改技能〖困奋〗和〖去疾〗。",
	yuzuru_kunfen: "困奋",
	yuzuru_kunfen_info: "锁定技，结束阶段，你失去1点体力并摸两张牌。然后你可以将两张牌交给一名其他角色。",
	yuzuru_quji: "去疾",
	yuzuru_quji_info: "出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。若你以此法弃置了黑色牌，则你失去1点体力。（X为你已损失的体力值）",
	yuzuru_kunfen_rewrite: "困奋·改",
	yuzuru_kunfen_rewrite_info: "锁定技，结束阶段，你摸两张牌。然后你可以将两张牌交给一名其他角色。",
	yuzuru_quji_rewrite: "去疾·改",
	yuzuru_quji_rewrite_info: "出牌阶段限一次，你可以弃置X张牌并选择至多等量已受伤的其他角色，这些角色各回复1点体力。（X为你已损失的体力值）",
	yuzuru_bujin: "步进",
	yuzuru_bujin_info: "锁定技，己方其他角色计算与其他角色的距离-1且摸牌阶段的额定摸牌数+1。",
	kanade_mapo: "麻婆",
	kanade_mapo_info: "你可以将一张♥牌当做【麻婆豆腐】使用。你使用的【麻婆豆腐】可以多指定一个目标。",
	kanade_benzhan: "奔战",
	kanade_benzhan_info: "每回合限一次。当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置两张牌或令一名角色摸两张牌；非基本牌，你可对一名角色造成1点伤害或令一名其他角色回复1点体力。",
	mio_tuifu: "推腐",
	mio_tuifu_info: "锁定技，当一名角色对一名同性角色造成伤害时，你摸一张牌。",
	mio_tishen: "替身",
	mio_tishen_info: "限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鸟】。",
	midori_nonghuan: "弄幻",
	midori_nonghuan_info: "出牌阶段限X次（X为你的体力值），你可以获得一名本阶段内未选择过的其他角色的区域内的一张牌。你摸一张牌，然后将一张牌交给该角色。然后你清除此技能结算过程中所有卡牌移动事件的移动记录。",
	//即技能结算完成后，所有涉及到的牌移动事件不会再被getHistory获取
	midori_tishen: "替身",
	midori_tishen_info: "限定技，准备阶段，你可以将体力值回复至体力上限并摸等同于回复量的牌，然后将武将牌替换为【西园美鱼】。",
	kyoko_juwu: "聚物",
	kyoko_juwu_info: "你的回合外，当有装备牌进入弃牌堆后，若这些牌不是从你的区域移动的，则你可以获得这些牌。",
	kyoko_zhengyi: "整遗",
	kyoko_zhengyi_info: "锁定技，若你装备区的花色数：大于等于1，你视为拥有〖精策〗；大于等于2，你视为拥有〖涉猎〗：大于等于3，你视为拥有〖制衡〗；大于等于4，你将〖精策〗和〖制衡〗改为界限突破版本。",
	kyoko_jingce: "精策",
	kyoko_shelie: "涉猎",
	kyoko_zhiheng: "制衡",
	shizuru_nianli: "念力",
	shizuru_nianli_info: "每轮限一次，你可以展示一张♦/♣/♥/♠手牌，然后视为使用一张不计入次数限制和记录的雷【杀】/【闪】/【桃】/【无懈可击】。",
	shizuru_benzhan: "奔战",
	shizuru_benzhan_info: "每回合限一次。当你使用或打出牌响应其他角色，或其他角色使用或打出牌响应你后，若此牌为：基本牌，你可令一名角色弃置两张牌或令一名角色摸两张牌；非基本牌，你可对一名角色造成1点伤害或令一名其他角色回复1点体力。",
	shiorimiyuki_banyin: "伴音",
	shiorimiyuki_banyin_info: "当你受到伤害或回复体力后，你可令一名其他角色回复1点体力。",
	shiorimiyuki_tingxian: "铤险",
	shiorimiyuki_tingxian_info: "出牌阶段开始时，你可以摸至多三张牌。若如此做，你回复1点体力，且此阶段结束时你失去X点体力。（X为你得到的牌中仍在手牌区的牌的数量）",
	shiorimiyuki_tingxian2: "铤险",
	miki_shenqiang: "神枪",
	miki_shenqiang_info: "锁定技，游戏开始时，你将一张【海德洛格拉迪尔特·改】和一张【望远镜】置入你的装备区。你装备区内的武器牌和宝物牌不能被其他角色弃置。",
	miki_huanmeng: "幻梦",
	miki_huanmeng_info: "准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）",
	miki_zhiluo: "治裸",
	miki_zhiluo_info: "锁定技，一名其他角色的回合结束时，若其在你的攻击范围内且其装备区内没有牌，则你选择：①摸一张牌。②视为对其使用一张【杀】。",
	miki_hydrogladiator: "海德洛",
	miki_hydrogladiator_info: "全名为【海德洛格拉迪尔特·改】。锁定技，当你因执行【杀】的效果而对目标角色造成伤害后，你弃置所有至目标角色距离为1的其他角色的一张牌或弃置其两张牌。",
	miki_hydrogladiator_skill: "海德洛格拉迪尔特·改",
	miki_binoculars: "望远镜",
	miki_binoculars_info: "锁定技，其他角色的手牌对你可见。",
	shiori_huijuan: "绘卷",
	shiori_huijuan_discard: "绘卷",
	shiori_huijuan_info: "锁定技，其他角色的结束阶段开始时，你可以视为使用一张该角色本回合出牌阶段内使用过的基本牌或普通锦囊牌。准备阶段开始时，若你自上个回合起以此法使用的牌数不小于X，则你选择一项：①弃置装备区或判定区内的一张牌。②跳过本回合的出牌阶段。（X为场上玩家数的一半且至少为2）",
	kaori_siyuan: "思愿",
	kaori_siyuan_info: "出牌阶段，你可以将一张装备牌或延时锦囊牌置于一名其他角色的装备区内，然后可以视为使用一张基本牌或普通锦囊牌。",
	akiko_dongcha: "洞察",
	akiko_dongcha_info_identity: "锁定技，其他角色的手牌对你可见。游戏开始时，你令其他角色的身份牌对你可见。",
	akiko_dongcha_info: "锁定技，其他角色的手牌对你可见。",
	abyusa_jueqing: "绝情",
	abyusa_jueqing_info: "当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力，并于此伤害结算完成后修改〖绝情〗（X为伤害值）。",
	abyusa_jueqing_1st: "绝情",
	abyusa_jueqing_rewrite: "绝情·改",
	abyusa_jueqing_rewrite_info: "锁定技，你即将造成的伤害均视为失去体力。",
	abyusa_dunying: "遁影",
	abyusa_dunying_info: "锁定技，其他角色计算与你的距离时+X。准备阶段和结束阶段，你摸X张牌（X为你已损失的体力值）。",
	godan_yuanyi: "远忆",
	godan_yuanyi_info: "锁定技，回合开始时，你摸X张牌并进行一个额外的出牌阶段。（X为游戏轮数且至多为3）",
	godan_feiqu: "肥躯",
	godan_feiqu_info: "锁定技，当你使用【杀】时，或你成为【杀】的目标后，你令此【杀】不可被响应。",
	godan_xiaoyuan: "消元",
	godan_xiaoyuan_info: "觉醒技，当你扣减体力时，若你的体力值小于4，则你减3点体力上限并摸三张牌，失去【肥躯】。",
	yuu_lveduo: "掠夺",
	yuu_lveduo_info: "每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。",
	yuu_lveduo_full_info: "每轮限一次，其他角色的回合开始时，若你本局游戏内未对其发动过〖掠夺〗且你的武将牌正面朝上，你可以将武将牌翻面并获得该角色本回合内的控制权。此回合结束时，你将武将牌翻回正面，获得该角色武将牌上所有的带有「Charlotte」标签的技能，且该角色失去这些技能。锁定技，若你的武将牌背面朝上，则你不能使用或打出牌。",
	ryoichi_baoyi: "爆衣",
	ryoichi_baoyi_info: "锁定技，当你失去装备区内的一张牌后，你摸一张牌，然后选择一项：①令一名其他女性角色失去1点体力。②弃置一名其他非女性角色区域内的两张牌。",
	ryoichi_tuipi: "褪皮",
	ryoichi_tuipi_info: "锁定技，你不是【顺手牵羊】和【过河拆桥】的合法目标。你装备区的牌于弃牌阶段内计入手牌上限。",
	kotori_yumo: "驭魔",
	kotori_yumo_damage: "驭魔",
	kotori_yumo_gain: "驭魔",
	kotori_yumo_info: "锁定技，游戏开始时，你获得蓝色、红色、绿色、黄色、灰色魔物各一个。当有角色受到伤害后，若你没有对应的标记，你根据其势力获得一个对应魔物：魏：蓝、蜀：红、吴：绿、群：黄、灰：晋、键：紫。回合开始时，你可以弃置一个对应的魔物并获得以下技能之一直到回合结束：蓝：魏业、红：蜀义、绿：吴耀、黄：群心、灰：晋势、紫：键魂。",
	kotori_skill_wei: "魏业",
	kotori_skill_wei_info: "回合开始时，你可以弃置一张牌并指定一名其他角色，该角色须弃置一张牌，否则你摸一张牌。",
	kotori_skill_shu: "蜀义",
	kotori_skill_shu_info: "你使用【杀】上限+1；出牌阶段结束时，若你于此阶段使用【杀】次数不少于2，摸一张牌。",
	kotori_skill_wu: "吴耀",
	kotori_skill_wu_info: "回合结束时，若你的手牌数不等于你的体力值，则你摸一张牌。",
	kotori_skill_qun: "群心",
	kotori_skill_qun_info: "锁定技，弃牌阶段开始时，若你的手牌数比体力值多2或更多，你本回合手牌上限+1；若你已损失体力值大于1，你手牌上限+1。",
	kotori_skill_key: "键魂",
	kotori_skill_key_info: "出牌阶段限一次，你可以摸一张牌并获得1点护甲。若如此做，你于当前回合结束时失去1点体力。",
	kotori_skill_jin: "晋势",
	kotori_skill_jin_info: "摸牌阶段结束时，你可以展示你于此阶段内因摸牌而得到的牌。若这些牌的花色均不同，则你摸一张牌。",
	kotori_yumo_wei: '<span class="thundertext">魔物</span>',
	kotori_yumo_shu: '<span class="firetext">魔物</span>',
	kotori_yumo_wu: '<span class="greentext">魔物</span>',
	kotori_yumo_qun: '<span class="yellowtext">魔物</span>',
	kotori_yumo_key: '<span class="legendtext">魔物</span>',
	kotori_yumo_jin: '<span class="icetext">魔物</span>',
	kotori_huazhan: "花绽",
	kotori_huazhan_info: "每回合每种魔物限一次，你可将一个蓝色/红色/绿色/黄色/紫色/灰色魔物当做【树上开花】使用。",
	jojiro_shensu: "神速",
	jojiro_shensu_info: "你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张没有距离限制的【杀】。",
	jojiro_shensu1: "神速",
	jojiro_shensu2: "神速",
	jojiro_shensu4: "神速",
	jojiro_shunying: "瞬影",
	jojiro_shunying_info: "锁定技，回合结束时，若你本回合内跳过了阶段，则你选择一项：1.失去1点体力。2.移动至多X格并摸X张牌（X为你本回合内跳过的阶段数）。",
	shiroha_yuzhao: "预兆",
	shiroha_yuzhao_umi: "预兆",
	shiroha_yuzhao_info: "锁定技，游戏开始时，你将牌堆顶的X张牌扣置于你的武将牌上，称为「兆」。一名角色的回合开始时，若你有「兆」且其至你的距离不大于1，则你将牌堆顶的X张牌扣置为「兆」，然后将等量的「兆」置于牌堆顶。（X为势力数）",
	shiroha_guying: "孤影",
	shiroha_guying_info: "锁定技，每回合限一次，当你受到伤害/对其他角色造成伤害时，你进行判定。若结果为红色/黑色，此伤害-1/+1。",
	shiroha_guying_rewrite: "孤影·改",
	shiroha_guying_rewrite_info: "当你受到伤害/对其他角色造成伤害时，你可进行判定。若结果为红色/黑色，此伤害-1/+1。",
	shiroha_jiezhao: "解兆",
	shiroha_jiezhao_info: "一名角色的判定牌生效前，你可打出一张「兆」代替之。当你以此法移去最后一张「兆」后，你加1点体力上限并回复1点体力，然后修改〖孤影〗并随机获得以下技能中的一个：〖炒饭〗/〖习事〗/〖呣啾〗/〖结伴〗。",
	//猴年马月爆料再利用
	shizuku_sizhi: "思智",
	shizuku_sizhi2: "思智",
	shizuku_sizhi_info: "出牌阶段限一次，你可以弃置任意张点数之和为13的牌，然后摸两倍数量的牌。以此法得到的牌中，黑色牌本回合无距离和次数限制，红色牌本回合不计入手牌上限。",
	shizuku_biyi: "避忆",
	shizuku_biyi_info: "当你受到伤害后，你可以进行一次判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复1点体力。",
	shizuku_sanhua: "散花",
	shizuku_sanhua_info: "当你死亡时，你可令一名其他角色从牌堆中获得四张名称各不相同的基本牌。",
	hiroto_huyu: "虎驭",
	hiroto_huyu2: "虎驭",
	hiroto_huyu_info: "其他角色的出牌阶段结束时，若你没有技能〖纵略〗，则其可将两张手牌交给你。若如此做，你获得〖纵略〗。你的下回合结束时，你失去〖纵略〗并将本回合内得到的所有牌交给该角色。",
	hiroto_zonglve: "纵略",
	hiroto_zonglve_info: "锁定技，你的手牌上限+3。出牌阶段限一次，你可以将一张手牌背面朝下放置，并展示一名其他角色的一张手牌。若这两张牌：颜色相同，你对其造成1点伤害并弃置其展示的牌。颜色不同，你获得该角色区域内的两张牌。",
	hiroto_tuolao: "脱牢",
	hiroto_tuolao_info: "觉醒技，回合结束后，若此回合不是你的第一个回合且你此回合未因〖虎驭〗失去过牌，则你摸三张牌，失去〖虎驭〗并获得〖纵略〗。",
	sakuya_junbu: "均步",
	sakuya_junbu_info: "锁定技，若你已废除的装备栏数量：≥1，你使用牌无距离限制。≥2，你使用牌无次数限制。≥3，你使用牌时可以多指定一个目标。≥4，你使用的牌不可被响应。≥5，你使用牌造成伤害时失去1点体力，令此伤害+1。",
	rumi_shuwu: "淑武",
	rumi_shuwu2: "淑武",
	rumi_shuwu_info: "锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。出牌阶段结束时，你令X=0，且每满足一项便令X+1：①你于本阶段内使用【杀】的次数不大于1。②你于本阶段内未使用锦囊牌造成过伤害。③你的体力值不大于3。你摸X张牌，且本回合手牌上限+X。",
	chihaya_liewu: "烈武",
	chihaya_liewu2: "烈武",
	chihaya_liewu_info: "锁定技，你使用【杀】无距离和次数限制，你使用普通锦囊牌选择目标后，可增加一个目标。当你首次废除最后一个装备栏后，你减4点体力上限并获得技能〖怀柔〗。",
	chihaya_youfeng: "游凤",
	chihaya_youfeng_info: "转换技，阴，每轮限一次，你可以加1点体力上限，视为使用一张普通锦囊牌；阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张基本牌。",
	chihaya_huairou: "怀柔",
	chihaya_huairou_info: "出牌阶段，你可以重铸装备牌。",
	yukito_kongwu: "控物",
	yukito_kongwu_info: "出牌阶段限一次，你可以表演《小空飞天》。若如此做，你从以下项目中随机选择X项，并执行其中的一项：①令一名角色摸两张牌。②对一名角色造成1点伤害。③令一名已受伤的角色回复1点体力。④弃置一名角色区域内的两张牌。⑤移动场上的一张牌。若X=0，则你弃置两张牌。（X为你的得分）",
	yukito_yaxiang: "鸦翔",
	yukito_yaxiang_info: "限定技，当有角色进入濒死状态时，你可移去此武将牌，然后令该角色将体力值回复至3点，弃置判定区的所有牌并获得技能〖终愿〗。",
	misuzu_zhongyuan: "终愿",
	misuzu_zhongyuan_info: "限定技。当你的判定结果生效时，你可将判定结果改为任意花色和点数并结束此时机。",
	asara_shelu: "摄录",
	asara_shelu_info: "出牌阶段限一次，你可以弃置一张牌，然后展示一名其他角色的一张手牌并将其置于你的武将牌上，称为“影”。若你以此法弃置的牌和展示的牌：花色相同，则你摸两张牌。点数相同，则你回复1点体力。",
	asara_yingwei: "影威",
	asara_yingwei_info: "你可以如手牌般使用或打出“影”。锁定技，当你使用“影”时，强制触发对应的应变效果。",
	kotomi_qinji: "琴击",
	kotomi_qinji_info: "出牌阶段开始时，你可视为使用【万箭齐发】。你以此法使用【万箭齐发】造成的伤害视为失去体力。",
	kotomi_chuanxiang: "传箱",
	kotomi_chuanxiang2: "传箱",
	kotomi_chuanxiang_info: "其他角色的出牌阶段限一次，其可以将装备区内的一张牌移动到另一名角色的装备区内，然后你摸一张牌。若你是目标角色，则你改为摸两张牌。",
	mia_shihui: "时迴",
	mia_shihui_info: "锁定技，摸牌阶段，你改为摸X+1张牌（X为你上回合弃置的牌数）；结束阶段，你弃置一张牌并回复1点体力。",
	mia_qianmeng: "潜梦",
	mia_qianmeng_info: "使命技。①游戏开始时，你摸一张牌，然后将一张牌置于牌堆的正中央。②使命：当有角色获得“潜梦”牌时，其将此牌交给你。你将体力值回复至上限，失去〖时迴〗并获得〖风发〗。③失败：当你死亡时，你可令一名角色获得牌堆中所有与“潜梦”牌花色点数相同的牌。",
	mia_fengfa: "风发",
	mia_fengfa_info: "锁定技。摸牌阶段，你多摸X张牌（X为你上回合使用过的牌数）。",
	kano_liezhen: "列阵",
	kano_liezhen_info: "结束阶段，若你本回合内使用过牌且这些牌的类型：不均相同，你可视为使用【排兵布阵】或智囊；均相同，你获得仁库中的所有牌（没有则改为摸两张牌）。",
	kano_paibingbuzhen: "排兵布阵",
	kano_paibingbuzhen_info: "出牌阶段，对至多三名角色使用。目标角色摸一张牌，然后将一张牌置入仁库。若仁库中的牌类型或颜色均相同，则你摸一张牌。",
	kano_poyu: "破羽",
	kano_poyu_info: "当你成为【杀】或伤害性锦囊牌的目标后，若仁库中有牌，你可判定。然后你可从仁库中移去一张与此牌类型或花色相同的牌，令此牌对你无效。",
	liyingxia_sanli: "三礼",
	liyingxia_sanli_info: "锁定技。其他角色于其回合内前两次使用牌指定你为目标后，你摸一张牌；第三次使用牌指定你为目标后，你交给其一张牌。",
	liyingxia_zhenjun: "振军",
	liyingxia_zhenjun_info: "键势力技。结束阶段，你可以令至多X+1名角色各摸一张牌，且这些角色于自己的下个回合内第一次造成的伤害+1（X为你本回合内使用【杀】和伤害性锦囊牌的次数）。",
	liyingxia_wumai: "武脉",
	liyingxia_wumai_info: "蜀势力技。一轮游戏开始时，你可以选择获得其中一个未选择过的技能直到本轮结束：〖八阵〗/〖集智〗/〖观星〗/〖游龙〗。若均已选择过，则你可以摸X张牌（X为场上已受伤的角色数且至多为3）。",
	erika_shisong: "识诵",
	erika_shisong_info: "锁定技。①你的手牌上限+X（X为你的护甲数）。②当你于回合内使用第Y张牌时，若此牌与你上回合使用的第Y张牌类型相同，则你摸一张牌。",
	erika_yousheng: "佑生",
	erika_yousheng_info: "使命技。①限定技。一轮游戏开始时，你可以选择至多两名其他角色。你减2点体力上限并增加3点护甲。②当你〖佑生①〗选择的角色成为【杀】或伤害类锦囊牌的目标时，你可以弃置X张牌并将此目标转移给自己（X为你本轮内发动过〖佑生②〗的次数）。此牌结算结束后，你可令一名原目标角色获得此牌。③成功：当你失去最后的护甲后，若你已发动过〖佑生①〗，则你和所有〖佑生①〗选择的角色各摸三张牌。④失败：当一名〖佑生①〗选择的角色因【杀】或伤害类锦囊牌而受到伤害时，你失去所有护甲并弃置等量的牌。",
	erika_yousheng_append: '<span style="font-family: yuanli">Death is not the end of life, but the completion of life.</span>',
	satomi_luodao: "落刀",
	satomi_luodao_info: "当你使用【杀】指定目标后，你可以展示目标角色的所有手牌。若其中：有【闪】，则你弃置其中的一张【闪】；没有【闪】，则你弃置一张牌。",
	satomi_daohai: "稻海",
	satomi_daohai_info: "结束阶段，若你本回合内弃置过牌，则你可以视为使用一张【五谷丰登】。然后你可以将你于此【五谷丰登】中得到的牌当做【乐不思蜀】使用。",
	satomi_daohai_append: '<span style="font-family: yuanli">五穀豊穣、刈り入れ時だね！</span>',
	tenzen_fenghuan: "封还",
	tenzen_fenghuan_info: "其他角色使用的【杀】或伤害性锦囊牌结算结束后，若你是此牌的唯一目标，则你可以弃置任意张点数之和大于等于此牌点数两倍的牌，然后视为对其使用一张名称相同的牌。",
	tenzen_retianquan: "天全",
	tenzen_retianquan_info: "每回合限一次。当你使用【杀】指定目标后，你可失去1点体力或弃置一张牌，然后亮出牌堆顶的三张牌（若你的体力值小于体力上限的50%，则改为展示五张牌）。这些牌中每有一张基本牌，响应此牌所需的【闪】的数量便+1。此牌结算结束后，若此牌造成过伤害，则你获得展示牌中的所有非基本牌。",
	iriya_yinji: "殷极",
	iriya_yinji_info: "锁定技。出牌阶段开始时，你将手牌摸至17张。你不能直接使用以此法得到的牌。",
	iriya_haozhi: "豪掷",
	iriya_haozhi_info: "出牌阶段，你可以按照斗地主牌型弃置至少两张牌，且其他角色可以依次对其进行一轮响应。最后一名进行响应的角色可以根据对应牌型执行对应效果。" + "对子：其可以令至多两名角色各摸一张牌。" + "三带：其可以弃置至多三名其他角色的各一张牌，然后摸一张牌。" + "单顺：其可以弃置一名其他角色的一张牌。若其未以此法弃置过颜色相同的牌，则其可以重复此流程。然后其摸等量的牌。" + "双顺：其可以获得一名其他角色的一张牌。若其未以此法获得过颜色相同的牌，则其可以重复此流程。然后其回复等量的体力。" + "三顺/飞机：其可以令至多3名其他角色翻面，然后对其中一名角色造成1点火属性伤害。" + "炸弹/四带二：其可以对一名角色造成2点雷属性伤害，然后目标角色翻面，弃置装备区的所有牌和四张手牌。",
	visible_fuuko_xingdiao: '<span data-nature="soilmm">星</span>',
	fuuko_xingdiao: "星雕",
	fuuko_xingdiao_info: "锁定技。游戏开始时，你将手牌摸至8张，然后将所有手牌明置（称为“星”，不计入手牌上限）。每名其他角色限一次，其可以于出牌阶段选择获得你的一张“星”，然后你摸一张牌。",
	fuuko_chuanyuan: "传愿",
	fuuko_chuanyuan_info: "锁定技。当你失去一张“星”后，你回复1点体力，然后从牌堆中获得一张和“星”花色点数相同的牌（没有则改为摸一张牌，且使用此牌无距离和次数限制）。",

	key_kagari: "篝",
	kagari_zongsi: "纵丝",
	kagari_zongsi_info: "出牌阶段限一次，你可以选择一张不在游戏外的牌，然后将其置于牌堆/弃牌堆的顶部/底部或一名角色的对应区域内。",
	key_shiki: "神山识",
	key_shiki_ab: "神山识",
	shiki_omusubi: "御结",
	shiki_omusubi_info: "一轮游戏开始时，你可以减1点体力上限，然后将一名其他角色武将牌上的技能加入到你的武将牌上。",
	shiki_omusubi_append: '<span style="font-family: yuanli">来吧，羽依里。用你的手，让我变成那只真正的鬼吧！</span>',
	db_key_hina: "佐藤雏",
	hina_shenshi: "神视",
	hina_shenshi_yingbian: "神视",
	hina_shenshi_info: "神势力技。出牌阶段开始时/结束时，你可摸两张牌，然后将其中一张牌置于牌堆顶。你以此法得到的牌视为拥有全部应变效果，且可以无条件发动。",
	hina_xingzhi: "幸凪",
	hina_xingzhi_info: "键势力技。每回合限一次，你可以通过“助战”触发一张牌的全部应变效果，且响应助战的角色摸两张牌。",

	
	key_kud: "库特莉亚芙卡",
	kud_qiaoshou: "巧手",
	kud_qiaoshou_equip: "巧手",
	kud_qiaoshou_end: "巧手",
	kud_qiaoshou_backup: "巧手",
	kud_qiaoshou_info: "出牌阶段限一次/结束阶段开始时，若你没有“巧”，则你可以将一张手牌当作任意一张武器牌或进攻坐骑牌/防具牌或防御坐骑牌置入装备区（不占用装备区栏位），称为“巧”。出牌阶段结束时/准备阶段开始时，你将“巧”置入弃牌堆。",
	kud_buhui: "不悔",
	kud_buhui_info: "限定技，当你进入濒死状态时，你可弃置装备区内的所有牌（至少一张）并摸等量的牌，将体力回复至2点，获得技能〖重振〗。",
	key_misuzu: "神尾观铃",
	misuzu_hengzhou: "恒咒",
	misuzu_hengzhou_info: "锁定技，准备阶段开始时，或当你受到1点伤害或回复1点体力后，你获得一个“诅咒”标记。你的手牌上限和摸牌阶段的额定摸牌数+X。结束阶段开始时，若X大于3，则你移去所有“诅咒”标记并失去1点体力。（X为“诅咒”标记数）",
	misuzu_nongyin: "浓饮",
	misuzu_nongyin_info: "当你需要使用【桃】时，你可将一张红色非锦囊牌当做【乐不思蜀】置入自己的判定区，然后视为使用一张【桃】。",
	misuzu_zhongxing: "终幸",
	misuzu_zhongxing_info: "每回合限一次，当你判定区的牌移动到其他区域后，你可令一名角色回复1点体力或摸两张牌。",
	key_kamome: "久岛鸥",
	kamome_yangfan: "扬帆",
	kamome_yangfan_info: "锁定技，游戏开始时，你将一张【旅行箱】置入你的装备区。当你失去装备区内的一张牌后，你摸两张牌。",
	kamome_huanmeng: "幻梦",
	kamome_huanmeng_info: "准备阶段开始时，你可以观看牌堆顶的X+1张牌并可以按任意顺序置于牌堆顶或牌堆底。（X为你装备区内的牌数）",
	kamome_jieban: "结伴",
	kamome_jieban_info: "转换技。每回合限一次，当你受到或造成伤害后，阴：你可将两张牌交给一名其他角色，然后其交给你一张牌。阳：你可将一张牌交给一名其他角色，然后其交给你两张牌。",
	kamome_suitcase: "旅行箱",
	kamome_suitcase_info: "锁定技，你跳过你的判定阶段和弃牌阶段；当你即将翻面时，取消之。",
	key_nao: "友利奈绪",
	nao_duyin: "独隐",
	nao_duyin2: "独隐",
	nao_duyin_info: "一名其他角色的回合开始时，若你本局游戏内未对其发动过〖独隐〗，则你可以弃置一张牌或将武将牌翻面。若如此做，你不能成为其使用牌的目标，且对其使用牌没有距离限制且不计入使用次数直到你的下回合结束。",
	nao_wanxin: "挽心",
	nao_wanxin_info: "一名角色的回合结束时，你可以令一名本回合内受到过伤害的角色摸两张牌，然后你与其将武将牌重置。",
	nao_shouqing: "守情",
	nao_shouqing2: "守情",
	nao_shouqing3: "守情",
	nao_shouqing_info: "其他角色的出牌阶段内可以对你使用非转化的【桃】。若如此做，其摸一张牌，且本局游戏内的手牌上限+1。",
	key_yuuki: "冰室忧希",
	yuuki_yicha: "异插",
	yuuki_yicha_info: "出牌阶段开始时，你可依次进行两次判定并将判定牌依次置入两行三列方阵的两个随机位置中。然后你依次进行四次判定，每次可将当前判定牌置入空方格，且须与相邻方格的牌颜色均不同。若如此做，你令一名角色获得方阵内的所有牌。",
	key_kyouko: "伊座并杏子",
	kyouko_rongzhu: "容助",
	kyouko_rongzhu_info: "其他角色不因此技能而得到你的牌后，你可摸一张牌，然后交给其一张牌。若其是当前回合角色，则其本回合使用【杀】的次数上限+1；若你是当前回合角色，则你本回合的手牌上限+1。",
	kyouko_gongmian: "共勉",
	kyouko_gongmian_use: "共勉",
	kyouko_gongmian_exchange: "共勉",
	kyouko_gongmian_info: "①出牌阶段，你可以选择一名未以此法选择过的角色，若其手牌：大于你，你获得其一张牌，然后交给其一张牌；小于你，其交给你一张牌，然后你交给其一张牌；等于你，你与其各摸一张牌。②出牌阶段结束时，你可以获得一名其他角色区域内的至多X张牌，然后交给其等量的牌。③弃牌阶段开始时，若X不小于你的体力值，你可以获得一名手牌数少于你的角色的所有手牌，然后将手牌数的一半（向上取整）交给该角色。（X为你本回合内发动过〖共勉①〗的次数）",
	key_tenzen: "加纳天善",
	key_kotarou: "天王寺瑚太朗",
	kotarou_aurora: "丝刃",
	kotarou_aurora_info: "锁定技，当扣减体力或增加体力上限后，若你的装备区内：有武器牌，你视为使用一张【杀】；没有武器牌，你使用牌堆中的一张不为赠物的武器牌。",
	kotarou_rewrite: "改写",
	kotarou_rewrite_damage: "改写",
	kotarou_rewrite_recover: "改写",
	kotarou_rewrite_sha: "改写",
	kotarou_rewrite_block: "改写",
	kotarou_rewrite_info: "出牌阶段，你可选择：①视为使用一张本局游戏没有以此法使用过的基本牌或普通锦囊牌；②移动场上的一张牌；③增加1点体力上限并失去1点体力（体力上限至多为5）；④下一次造成的伤害+1；⑤下一次回复的体力值+1；⑥本回合内的手牌上限和使用【杀】的使用次数+1。若你于本回合内发动过〖改写〗的次数超过两次，则你令此技能失效，且于回合结束后将体力上限降至3点，失去〖丝刃〗和〖改写〗。",
	key_kyou: "藤林杏",
	kyou_zhidian: "掷典",
	kyou_zhidian_info: "你可以将一张锦囊牌当做【杀】使用（无距离限制）。当你使用【杀】指定第一个目标后，你选择一个与上次不同的选项：①此【杀】不可被响应。②此【杀】无视防具。③此【杀】伤害+1。④此【杀】不计入次数限制。",
	kyou_duanfa: "断发",
	kyou_duanfa_info: "限定技，当你受到伤害时，若伤害值不小于你的体力值，则你可弃置所有手牌，防止此伤害并回复1点体力；且当你于你的下回合开始前成为【杀】或伤害性锦囊牌的目标后，你摸一张牌。",
	key_seira: "樱庭星罗",
	seira_xinghui: "星辉",
	seira_xinghui_info: "准备阶段，你可以投掷一枚骰子，观看牌堆顶的X张牌（X为投掷点数）并以任意顺序扣置于一名没有“星屑”的角色的武将牌上，称为“星屑”。有“星屑”的角色造成的伤害+1，且当其从牌堆顶摸牌或取得判定牌时，改为从“星屑”中获取。",
	seira_yuanying: "缘映",
	seira_yuanying_info: "出牌阶段限一次，你可选择两名角色。这两名角色成为“姻缘者”且获得〖姻缘〗直到你下次发动〖缘映〗。",
	seira_yinyuan: "姻缘",
	seira_yinyuan_info: "你的手牌对其他“姻缘者”可见。出牌阶段限一次，你可以获得一名其他“姻缘者”区域内的一张牌，然后其回复1点体力。",
	key_kiyu: "露娜Ｑ",
	kiyu_yuling: "玉灵",
	kiyu_yuling_info: "锁定技。你不是有距离限制的锦囊牌的合法目标；你成为【杀】的目标后，使用者需弃置X张牌（X为其至你的距离）。",
	kiyu_rexianyu: "先预",
	kiyu_rexianyu_info: "每轮限一次。出牌阶段结束时，你可以选择一名其他角色。该角色于下个出牌阶段内使用第X张牌时，其可以将一张牌当做你本阶段内使用的第X张基本牌或普通锦囊牌使用（X至多为3）；若如此做，你摸一张牌，且其本回合的手牌上限+1。",
	key_tomoyo: "坂上智代",
	tomoyo_wuwei: "武威",
	tomoyo_wuwei_info: "①每回合每种花色限一次。你可以将一张手牌当做【杀】使用或打出。②当有角色使用【闪】后，若你在其攻击范围内，你可以对其使用一张【杀】（无距离限制）。",
	tomoyo_zhengfeng: "整风",
	tomoyo_zhengfeng_info: "使命技。①准备阶段，你可以令攻击范围内的一名角色进行判定。若如此做，你获得如下效果直到下回合开始：你视为在该角色的攻击范围内，且当该角色使用与判定牌颜色相同的牌时，你摸一张牌。②失败：结束阶段，若你于本回合内未发动过〖整风①〗，则你可以减1点体力上限。你失去〖武威〗，摸两张牌并回复1点体力，然后获得〖长誓〗。",
	tomoyo_changshi: "长誓",
	tomoyo_changshi_info: "锁定技。一名攻击范围内包含你的角色回复体力后，你获得1点护甲；一名攻击范围内包含你的角色一次性获得至少两张牌后，你摸一张牌。",
	key_minagi: "远野美凪",
	minagi_peiquan: "配券",
	minagi_peiquan_info: "锁定技。①游戏开始时，你将你所有的手牌记录为“米券”。②出牌阶段，你可以赠予一张“米券”，然后执行一项本回合内未被选择过的效果：⒈对其造成1点伤害；⒉摸两张牌；⒊弃置其的两张牌；⒋亮出牌堆顶的一张牌，然后你可以使用之。",
	minagi_huanliu: "幻流",
	minagi_huanliu_info: "准备阶段开始时，你可与一名其他角色进行协力，并获得“远野小满”的所有技能直到目标角色的结束阶段开始。若“协力”成功，则你可以将所有手牌记录为“米券”。",
	key_michiru: "远野小满",
	michiru_sheyuan: "舍愿",
	michiru_sheyuan_info: "每轮限一次。若你没有“米券”，则你可以将所有手牌当做任意基本牌或普通锦囊牌使用，然后摸等量的牌。",
	minagi_tag: "米券",
};

export default translates;
