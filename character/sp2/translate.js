const translates = {
	lijue: "李傕",
	zhangji: "张济",
	fanchou: "樊稠",
	guosi: "郭汜",
	lvkai: "吕凯",
	zhanggong: "张恭",
	weiwenzhugezhi: "卫温诸葛直",
	sp_liuqi: "刘琦",
	xf_tangzi: "唐咨",
	gz_xf_huangquan: "黄权",
	xf_huangquan: "OL黄权",
	xf_huangquan_prefix: "OL",
	gz_xf_sufei: "苏飞",
	xf_sufei: "OL苏飞",
	xf_sufei_prefix: "OL",
	xinfu_langxi: "狼袭",
	xinfu_langxi_info: "准备阶段，你可以对一名体力小于或等于你的其他角色造成0～2点随机伤害。",
	xinfu_yisuan: "亦算",
	xinfu_yisuan_info: "每回合限一次。当你于出牌阶段内使用的锦囊牌结算结束后，你可以减1点体力上限并获得此牌对应的所有实体牌。",
	xinfu_xingluan: "兴乱",
	xinfu_xingluan_info: "每回合限一次。当你于出牌阶段内使用的仅指定一个目标的牌结算完成后，你可以从牌堆中随机获得一张点数为6的牌。",
	xinfu_lveming: "掠命",
	xinfu_lveming_info: "出牌阶段限一次，你可以选择一名装备区装备比你少的角色，令其选择一个点数，然后你进行判定：<br>若点数相同，你对其造成2点伤害；<br>若点数不同，则你随机获得其区域内的一张牌。",
	xinfu_tunjun: "屯军",
	xinfu_tunjun_info: "限定技，出牌阶段，你可以选择一名角色，令其随机使用牌堆中的X张装备牌。(X为你发动过“掠命”的次数)",
	xinfu_tanbei: "贪狈",
	xinfu_tanbei_info: "出牌阶段限一次，你可以令一名其他角色选择一项：1.令你随机获得其区域内的一张牌，本回合内你不能对其使用牌。2.令你此回合内对其使用牌没有次数与距离限制。",
	xinfu_sidao: "伺盗",
	xinfu_sidaox: "伺盗",
	xinfu_sidao_info: "出牌阶段限一次，当你对一名其他角色连续使用两张牌后，你可以将一张手牌当做【顺手牵羊】对其使用。",
	tanbei_effect1: "贪狈",
	tanbei_effect1_info: "",
	tanbei_effect2: "贪狈",
	tanbei_effect2_info: "",

	xinfu_tunan: "图南",
	xinfu_tunan_info: "出牌阶段限一次，你可以亮出牌堆顶的一张牌并选择一名其他角色，然后该角色选择一项：使用此牌（无距离限制）；或将此牌当普通【杀】使用。",
	xinfu_bijing: "闭境",
	xinfu_bijing_info: "结束阶段，你可以选择至多两张手牌并标记为“闭境”，然后你获得如下效果：1.其他角色的弃牌阶段开始时，若你于本回合内失去过“闭境”，其弃置两张牌；2.准备阶段，你重铸所有“闭境”牌。",
	xinfu_zhenxing: "镇行",
	xinfu_zhenxing_info: "结束阶段开始时或当你受到伤害后，你可以观看牌堆顶的至多三张牌，然后你获得其中与其余牌花色均不相同的一张牌。",
	xinfu_qianxin: "遣信",
	xinfu_qianxin_info: "出牌阶段限一次，若牌堆中没有“信”，你可以选择一名角色并将任意张手牌放置于牌堆中X倍数的位置（X为存活人数），称为“信”。该角色的弃牌阶段开始时，若其手牌区内有于本回合内获得过的“信”，其选择一项：令你将手牌摸至四张；本回合手牌上限-2。",
	qianxin_effect: "遣信",
	qianxin_effect_info: "",
	xinfu_qianxin2: "遣信",
	xinfu_qianxin2_info: "",

	xinfu_fuhai: "浮海",
	xinfu_fuhai_info: "出牌阶段每个方向限一次，你可以展示一张手牌并选择上家或下家。该角色展示一张手牌，若你展示的牌点数大于等于其展示的牌点数，你弃置你展示的牌，然后继续对其上家或下家重复此流程；若你展示的牌点数小于该展示角色牌的点数，则该角色弃置其展示的牌，然后你与其各摸X张牌（X为你此回合内发动此技能选择的角色数），且你此阶段内不能再发动〖浮海〗。",
	fuhai_clear: "浮海",
	fuhai_clear_info: "",

	xz_xunxun: "恂恂",
	xz_xunxun_info: "摸牌阶段，你可以观看牌堆顶的四张牌，然后将其中的两张牌置于牌堆顶，并将其余的牌以任意顺序置于牌堆底。",
	xinfu_xingzhao: "兴棹",
	xinfu_xingzhao_info: "锁定技。若场上已受伤的角色数：≥1，你视为拥有技能〖恂恂〗；X≥2，有装备牌进入或离开你的装备区时，你摸一张牌；X≥3，判定阶段或弃牌阶段开始时，你跳过此阶段；为0或≥4，当你造成伤害时，此伤害+1。",
	xinfu_xingzhao2: "兴棹",
	xinfu_xingzhao2_info: "",
	xinfu_xingzhao3: "兴棹",
	xinfu_dianhu: "点虎",
	xinfu_dianhu_info: "锁定技，游戏开始时，你选择一名其他角色。当其受到来自你的伤害后或回复体力后，你摸一张牌。",
	xinfu_dianhu2: "点虎",
	xinfu_dianhu2_info: "",
	xinfu_jianji: "谏计",
	xinfu_jianji_info: "出牌阶段限一次，你可以令一名其他角色摸一张牌。然后该角色可以使用此牌。",
	xinfu_lianpian: "联翩",
	xinfu_lianpian_info: "出牌阶段限三次。当你对一名角色连续使用牌时，你可以摸一张牌，然后可以将一张牌交给该角色。",
	spwenji: "问计",
	spwenji_info: "出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌名称相同的牌时不能被其他角色响应。",
	rewenji: "问计",
	rewenji_info: "出牌阶段开始时，你可以令一名其他角色交给你一张牌。你于本回合内使用与该牌类型相同的牌时不能被其他角色响应。",
	sptunjiang: "屯江",
	sptunjiang_info: "结束阶段，若你未于本回合的出牌阶段内使用牌指定过其他角色为目标，则你可以摸X张牌（X为全场势力数）。",
	zongkui: "纵傀",
	zongkui_mark: "纵傀",
	zongkui_mark_bg: "傀",
	zongkui_info: "回合开始前，你可以指定一名未拥有“傀”标记的其他角色，令其获得一枚“傀”标记。一轮游戏开始时，你指定一名体力值最少且没有“傀”标记的其他角色，令其获得一枚“傀”标记。",
	guju: "骨疽",
	guju_info: "锁定技，拥有“傀”标记的角色受到伤害后，你摸一张牌。",
	baijia: "拜假",
	baijia_info: "觉醒技，准备阶段，若你因〖骨疽〗得到的牌不少于7张，则你增加1点体力上限，回复1点体力，然后令所有未拥有“傀”标记的其他角色获得“傀”标记，最后失去技能〖骨疽〗，并获得技能〖蚕食〗。",
	bmcanshi: "蚕食",
	bmcanshi_info: "一名角色使用基本牌或普通锦囊牌指定你为唯一目标时，若其有“傀”标记，你可以取消之，然后其失去“傀”标记；你使用牌仅指定一名角色为目标时，你可以额外指定任意名带有“傀”标记的角色为目标（无距离限制），然后这些角色失去“傀”标记。",

	xinpi: "辛毗",
	lisu: "李肃",
	zhangwen: "张温",
	xushao: "许劭",
	mangyachang: "忙牙长",
	xugong: "许贡",
	zhangchangpu: "张昌蒲",
	pingjian: "评荐",
	pingjian_use: "评荐",
	pingjian_info: "结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以令系统随机检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌。然后你可以选择尝试发动其中一个技能。每个技能每局游戏只能选择一次。",

	songshu: "颂蜀",
	songshu_info: "出牌阶段，你可以和其他角色拼点。若你没赢，你与其各摸两张牌，且你本阶段内不能再发动〖颂蜀〗。",
	sibian: "思辩",
	sibian_info: "摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶的四张牌，然后获得其中所有点数最大与点数最小的牌，且可以将剩余的牌交给手牌数最少的角色。",
	lslixun: "利熏",
	lslixun_fate: "利熏",
	lslixun_info: "锁定技，当你受到伤害时，你防止此伤害，然后获得等同于伤害值的“珠”标记。出牌阶段开始时，你进行判定，若结果点数小于“珠”的数量，你弃置等同于“珠”数量的手牌（若弃牌的牌数不够，则失去剩余数量的体力值）。",
	lskuizhu: "馈珠",
	lskuizhu_info: "出牌阶段结束时，你可以选择体力值为全场最多的一名其他角色，将手牌摸至与该角色相同（最多摸至五张），然后该角色观看你的手牌，弃置任意张手牌并从观看的牌中获得等量的牌。若其得到的牌大于一张，则你选择一项：移去一个“珠”；或令其对其攻击范围内的一名角色造成1点伤害。",
	xpchijie: "持节",
	xpchijie_info: "每回合每项各限一次。1.当其他角色使用的牌对你结算结束后，你可以令此牌对所有后续目标无效。2.其他角色使用的牌结算完成时，若你是此牌的目标之一且此牌未造成过伤害，则你可以获得此牌对应的所有实体牌。",
	xpchijie2: "持节",
	yinju: "引裾",
	yinju_info: "限定技，出牌阶段，你可以选择一名其他角色。若如此做，直到回合结束：1.当你使用牌指定其为目标后，你与其各摸一张牌；2.当你即将对其造成伤害时，防止此伤害，然后其回复等量的体力。",
	yinju2: "引裾",

	spjiedao: "截刀",
	spjiedao_info: "当你每回合第一次造成伤害时，你可令此伤害至多+X（X为你损失的体力值）。然后若受到此伤害的角色没有死亡，你弃置等同于此伤害加值的牌。",
	biaozhao: "表召",
	biaozhao_info: "结束阶段，你可以将一张牌置于武将牌上，称为“表”。当有一张与“表”花色点数均相同的牌进入弃牌堆后，你将“表”置入弃牌堆并失去1点体力，若此牌是其他角色因弃置而进入弃牌堆的，则改为该角色获得“表”。准备阶段，若你的武将牌上有“表”，则你将“表”置入弃牌堆。然后你选择一名角色，该角色回复1点体力且将手牌摸至与全场手牌数最多的人相同（最多摸五张）。",
	biaozhao2: "表召",
	biaozhao2_info: "",
	biaozhao3: "表召",
	biaozhao3_info: "",
	yechou: "业仇",
	yechou_info: "当你死亡时，你可以选择一名已损失体力值大于1的角色。直到其下个回合开始前，每个回合结束时，该角色失去1点体力。",
	yechou2: "业仇",
	yechou2_info: "",
	yanjiao: "严教",
	yanjiao_info: "出牌阶段限一次，你可以选择一名其他角色并从牌堆顶亮出四张牌。该角色将这些牌分成点数之和相等的两组，你与其各获得其中一组，然后将剩余未分组的牌置入弃牌堆。若未分组的牌超过一张，则你本回合手牌上限-1。",
	yanjiao2: "严教",
	yanjiao2_info: "",
	xingshen: "省身",
	xingshen_info: "当你受到伤害后，你可以摸一张牌且下一次发动〖严教〗亮出的牌数+1。若你的手牌数为全场最少，则改为摸两张牌；若你的体力值为全场最少，则〖严教〗亮出的牌数改为+2（加值总数不能超过4）。",

	sp_zhanghe: "SP张郃",
	sp_zhanghe_prefix: "SP",
	yuanlve: "远略",
	yuanlve_info: "出牌阶段限一次，你可以将一张非装备牌交给一名角色，然后该角色可以使用该牌并令你摸一张牌。",
	xunchen: "OL荀谌",
	xunchen_prefix: "OL",
	fenglve: "锋略",
	fenglve2: "锋略",
	fenglve_info: "出牌阶段开始时，你可以与一名角色拼点，若你赢，该角色将其区域内的各一张牌交给你；若你没赢，你交给其一张牌。当你的单人拼点结算后，你可以令对方获得你拼点的牌。",
	mouzhi: "谋识",
	mouzhi2: "谋识",
	mouzhi_info: "出牌阶段限一次，你可以将一张手牌交给一名角色，若如此做，当其于其下回合的出牌阶段内对一名角色造成伤害后，若是此阶段其第一次对该角色造成伤害，你摸一张牌。",
	sp_shenpei: "SP审配",
	sp_shenpei_prefix: "SP",
	gangzhi: "刚直",
	gangzhi_info: "锁定技，当你即将受到其他角色造成的伤害时，或即将对其他角色造成伤害时，你防止此伤害，改为受到伤害的角色失去等量的体力。",
	beizhan: "备战",
	beizhan2: "备战",
	beizhan_info: "结束阶段，你可以令一名角色将手牌摸至体力上限（至多为5）。其下个回合开始时，若其手牌数为全场最多，则其此回合内使用的牌不能指定其他角色为目标。",
	gaolan: "OL高览",
	gaolan_prefix: "OL",
	xiying: "袭营",
	xiying2: "袭营",
	xiying_info: "出牌阶段开始时，你可以弃置一张非基本手牌，然后令所有其他角色依次选择一项：弃置一张牌，或本回合内不能使用或打出牌；且你本回合内获得如下效果：结束阶段，若你于本回合的出牌阶段内造成过伤害，则你从牌堆中获得一张伤害性基本牌或普通锦囊牌。",
	lvkuanglvxiang: "OL吕旷吕翔",
	lvkuanglvxiang_prefix: "OL",
	liehou: "列侯",
	liehou_info: "出牌阶段限一次，你可以令一名攻击范围内的角色交给你一张手牌，然后你将一张手牌交给攻击范围内的另一名角色。",
	qigong: "齐攻",
	qigong_info: "当你使用的【杀】被【闪】抵消之后，你可以令一名角色再对目标角色使用一张【杀】（不可被响应）。",
	chunyuqiong: "淳于琼",
	sushou: "宿守",
	sushou_info: "弃牌阶段开始时，你可以摸X+1张牌（X为“粮”数），然后可以交给任意名友方角色各一张牌。",
	cangchu: "仓储",
	cangchu_info: "锁定技，游戏开始时，你获得3枚“粮”标记，当你受到1点火焰伤害后，你失去一枚“粮”标记。",
	liangying: "粮营",
	liangying_info: "锁定技，若你有“粮”标记，则友方角色摸牌阶段摸牌数+1；当你失去所有“粮”标记后，你减1点体力上限，然后令敌方角色各摸两张牌。",
	sp_xuyou: "SP许攸",
	sp_xuyou_prefix: "SP",
	spshicai: "恃才",
	spshicai2: "恃才",
	spshicai_info: "出牌阶段，牌堆顶的一张牌对你可见。你可以弃置一张牌，然后获得牌堆顶的一张牌，且不能再发动〖恃才〗直到此牌离开你的手牌区。",
	spfushi: "附势",
	spfushi_info: "锁定技，若己方存活角色数：大于敌方，你视为拥有〖择主〗；小于敌方，你视为拥有〖逞功〗。",
	zezhu: "择主",
	zezhu_info: "出牌阶段限一次，你可以获得双方主帅的各一张牌（若无牌则改为你摸一张牌），然后交给双方主帅各一张牌。",
	chenggong: "逞功",
	chenggong_info: "当有角色使用牌指定目标后，若此牌对目标数大于1，则你可令使用者摸一张牌。",
	sp_zhangliao: "SP张辽",
	sp_zhangliao_prefix: "SP",
	//这仨技能给SP仲村由理毫无违和感好吗！！！
	mubing: "募兵",
	mubing_info: "出牌阶段开始时，你可以亮出牌堆顶的三张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。",
	ziqu: "资取",
	ziqu_info: "每名角色限一次，当你对有牌的其他角色造成伤害后，你可以防止此伤害。然后其将其点数最大的牌交给你。",
	diaoling: "调令",
	diaoling_info: "觉醒技，准备阶段，若你已因〖募兵〗获得了6张或更多的【杀】或武器牌或伤害锦囊牌，则你回复1点体力或摸两张牌，然后修改〖募兵〗。",
	mubing_rewrite: "募兵·改",
	mubing_rewrite_info: "出牌阶段开始时，你可以亮出牌堆顶的四张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。然后你可将以此法得到的牌以任意方式交给其他角色。",
	caobuxing: "曹不兴",
	moying: "墨影",
	moying_info: "每回合限一次，当你于回合外不因使用而失去单一一张锦囊牌或装备牌后，你可以选择一个花色和与此牌点数差绝对值不超过2的点数，然后获得牌堆中所有与此牌花色点数相同的牌。",
	juanhui: "绢绘",
	juanhui2: "绢绘",
	juanhui2_backup: "绢绘",
	juanhui_info: '结束阶段，你可以选择一名其他角色。记录该角色下回合的出牌阶段里使用的基本牌和普通锦囊牌（每种牌名限记一次），你的下回合出牌阶段，可将一张手牌当这些牌里的任意一张牌使用（每张限使用一次，且【杀】不计次数）。当"绢绘"的牌全部用完时，你回复1点体力并将手牌摸至三张。',
	re_maliang: "新杀马良",
	re_maliang_prefix: "新杀",
	rexiemu: "协穆",
	rexiemu_info: "结束阶段，若全场没有“协穆”标记，你可以选择一名角色获得“协穆”标记直到你的下回合开始。你或该角色在各自的回合外使用或打出手牌时，你与其各摸一张牌（每回合限一次）。",
	heli: "贺励",
	heli_info: "出牌阶段限一次，你可以选择手牌数比你少的一名其他角色。该角色展示所有手牌，然后每缺少一种类型的牌，便从牌堆中随机获得一张此类型的牌。",
	zhujun: "朱儁",
	gongjian: "攻坚",
	gongjian_info: "每回合限一次，当有角色使用【杀】指定第一个目标后，若此【杀】的目标和本局游戏内被使用的上一张【杀】的目标的交集A不为空，则你可以依次弃置A中所有角色的至多两张牌，然后获得以此法弃置的所有【杀】。",
	kuimang: "溃蟒",
	kuimang_info: "锁定技，一名角色死亡后，若你对其造成过伤害，你摸两张牌。",
	liuhong: "刘宏",
	yujue: "鬻爵",
	yujue_backup: "鬻爵",
	yujue_info: "出牌阶段限一次，你可以废除一个装备栏，然后令一名有手牌的其他角色交给你一张手牌。其获得〖执笏〗直到你的下回合开始。",
	zhihu: "执笏",
	zhihu_mark: "执笏",
	zhihu_info: "锁定技，每回合限两次，当你对其他角色造成伤害后，你摸两张牌。",
	tuxing: "图兴",
	tuxing2: "图兴",
	tuxing_info: "锁定技，当你废除一个装备栏时，你加1点体力上限并回复1点体力。然后若你所有的装备栏均已被废除，则你减4点体力上限，且本局游戏内造成的伤害+1。",
	re_hejin: "新杀何进",
	re_hejin_prefix: "新杀",
	xin_baosanniang: "新杀鲍三娘",
	xin_baosanniang_prefix: "新杀",
	decadexushen: "许身",
	decadexushen2: "许身",
	decadexushen_info: "限定技，当你进入濒死状态后，你可以回复1点体力并获得技能“镇南”，然后如果你脱离濒死状态且“关索”不在场，你可令一名其他角色选择是否用“关索”代替其武将并令其摸三张牌。",
	decadezhennan: "镇南",
	decadezhennan_info: "当有角色使用普通锦囊牌指定目标后，若此牌目标数大于1，你可以对一名其他角色造成1点伤害。",
	ol_dingyuan: "丁原",
	cixiao: "慈孝",
	cixiao_info: "准备阶段，若场上没有“义子”标记，你可令一名其他角色获得一个“义子”标记；若场上有“义子”标记，你可以弃置一张牌移动“义子”标记。拥有“义子”标记的角色获得技能“叛弑”。",
	panshi: "叛弑",
	panshi_info: "锁定技，准备阶段，你交给有“慈孝”技能的角色一张手牌；当你于出牌阶段因使用【杀】对其他角色造成伤害时，若其拥有技能“慈孝”，则此伤害+1，且你结束出牌阶段。",
	xianshuai: "先率",
	xianshuai_info: "锁定技，有角色造成伤害后，若此伤害是本轮第一次造成伤害：你摸一张牌；若伤害来源是你，则你对受伤角色再造成1点伤害。",
	wangrong: "王荣",
	minsi: "敏思",
	minsi2: "敏思",
	minsi_info: "出牌阶段限一次，你可以弃置任意张点数之和为13的牌，然后摸两倍数量的牌。以此法得到的牌中，黑色牌本回合无距离限制，红色牌本回合不计入手牌上限。",
	jijing: "吉境",
	jijing_info: "当你受到伤害后，你可以进行一次判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复1点体力。",
	zhuide: "追德",
	zhuide_info: "当你死亡时，你可令一名其他角色从牌堆中获得四张名称各不相同的基本牌。",
	decadewuniang: "武娘",
	decadewuniang_info: "当你使用或打出【杀】时，你可以获得一名其他角色的一张牌。若如此做，其摸一张牌。（若你已发动许身，则关索也摸一张牌）",
	dongxie: "董翓",
	juntun: "军屯",
	juntun_info: "锁定技，准备阶段，若X大于1，则你减1点体力上限并摸X张牌（X为你的体力上限）。",
	jiaojie: "狡黠",
	jiaojie_info: "锁定技，你的红色牌不计入手牌上限。你使用黑色牌无距离和次数限制。",
	dcjiaoxia: "狡黠",
	dcjiaoxia_info: "①出牌阶段开始时，你可以令自己的所有手牌于此阶段均视为【杀】。若如此做，你使用以此法转化的【杀】造成伤害后，你可以使用此牌对应的原卡牌。②出牌阶段，你对你本阶段未使用过【杀】的角色使用【杀】无距离和次数限制。",
	dchumei: "狐魅",
	dchumei_info: "出牌阶段各限一次，你可以选择一名体力值不大于X的角色，令其：①摸一张牌。②交给你一张牌。③回复1点体力。（X为你本阶段造成的伤害数）",
	buchen: "不臣",
	buchen_info: "隐匿技，你于其他角色的回合登场时，可获得当前回合角色的一张牌。",
	smyyingshi: "鹰视",
	smyyingshi_info: "锁定技，出牌阶段，你可观看牌堆顶的X张牌（X为你的体力上限）。",
	xiongzhi: "雄志",
	xiongzhi_info: "限定技，出牌阶段，你可亮出牌堆顶的一张牌并使用之。若如此做，你重复此流程，直到你以此法展示的牌无法使用。",
	quanbian: "权变",
	quanbian2: "权变",
	quanbian_info: "当你于出牌阶段内使用/打出手牌时，若此牌有花色且你本回合内未使用/打出过该花色的其他手牌，则你可以选择一项：①摸一张牌。②将牌堆顶X张牌中的一张置于牌堆底（X为你的体力上限）。若你发动此技能，则你本回合内不能再使用与此牌花色相同的手牌。",
	re_hansui: "新杀韩遂",
	re_hansui_prefix: "新杀",
	re_quyi: "新杀麴义",
	re_quyi_prefix: "新杀",
	refuqi: "伏骑",
	refuqi_info: "锁定技，当你使用牌时，你令所有距离为1的其他角色不能使用或打出牌响应此牌。",
	hanfu: "韩馥",
	hfjieying: "节应",
	hfjieying2: "节应",
	hfjieying3: "节应",
	hfjieying_info: "结束阶段，你可以选择一名其他角色，该角色下回合使用目标数为1的【杀】或普通锦囊牌无距离限制且可多指定一个目标，且当其造成伤害后，其无法再使用牌直到回合结束。",
	weipo: "危迫",
	weipo_info: "锁定技，其他角色使用【杀】或普通锦囊牌指定你为目标后，若你的手牌数小于X，则你将手牌摸至X张，并记录摸牌事件结算后的手牌数Y。此牌结算结束后，若你的手牌数小于Y，则你将一张手牌交给此牌的使用者，且此技能失效直到你的下回合开始。（X为你的体力上限且至多为5）",
	zhaozhong: "赵忠",
	yangzhong: "殃众",
	yangzhong_info: "当你造成或受到伤害后，若受伤角色和伤害来源均存活，则伤害来源可弃置两张牌，然后令受伤角色失去1点体力。",
	huangkong: "惶恐",
	huangkong_info: "锁定技，当你于回合外成为【杀】或普通锦囊牌的目标后，若你没有手牌，则你摸两张牌。",
	re_taoqian: "陶谦",
	reyixiang: "义襄",
	reyixiang_info: "锁定技，其他角色于其出牌阶段内使用的第一张牌对你的伤害-1；其使用的第二张牌若为黑色，则对你无效。",
	caosong: "曹嵩",
	cslilu: "礼赂",
	cslilu_info: "摸牌阶段，你可以放弃摸牌，改为将手牌摸至X张（X为你的体力上限和5中的最小值），然后将至少一张手牌交给一名其他角色。若你以此法给出的牌数大于你上次以此法给出的牌数，则你加1点体力上限并回复1点体力。",
	csyizheng: "翊正",
	csyizheng2: "翊正",
	csyizheng_info: "结束阶段开始时，你可以选择一名其他角色。你的下回合开始前，当该角色造成伤害或回复体力时，若其体力上限小于你，则你减1点体力上限，且令此伤害值/回复值+1。",
	reyirang: "揖让",
	reyirang_info: "出牌阶段开始时，你可以将所有非基本牌交给一名其他角色。若其体力上限大于你，则你将体力上限调整至与其相同并回复X点体力（X为你以此法交给其的牌数）。",
	liangxing: "梁兴",
	lulve: "掳掠",
	lulve_info: "出牌阶段开始时，你可选择一名有手牌且手牌数少于你的角色。其选择一项：①将所有手牌交给你，然后你将武将牌翻面。②将武将牌翻面，然后其视为对你使用一张【杀】。",
	lxzhuixi: "追袭",
	lxzhuixi_info: "锁定技，当你造成伤害或受到伤害时，若受伤角色的翻面状态和伤害来源的翻面状态不同，则此伤害+1。",
	zhangmiao: "张邈",
	mouni: "谋逆",
	mouni_info: "准备阶段，你可对一名其他角色依次使用你手牌中所有的【杀】（若其进入了濒死状态，则终止此流程）。然后若这些【杀】中有未造成伤害的【杀】，则你跳过本回合的出牌阶段和弃牌阶段。",
	zongfan: "纵反",
	zongfan_info: "觉醒技。结束阶段，若你本回合内因〖谋逆〗使用过【杀】且未跳过本回合的出牌阶段，则你将任意张牌交给一名其他角色，然后加X点体力上限并回复X点体力（X为你以此法给出的牌数且至多为5）。最后失去〖谋逆〗并获得〖战孤〗。",
	zhangu: "战孤",
	zhangu_info: "锁定技，准备阶段，若你的体力上限大于1且没有手牌/装备区内没有牌，则你减1点体力上限，然后从牌堆中获得三张类型不同的牌。",
	re_niujin: "新杀牛金",
	re_niujin_prefix: "新杀",
	recuorui: "摧锐",
	recuorui_info: "限定技，出牌阶段，你可以依次获得至多X名角色的各一张手牌（X为你的体力值）。",
	reliewei: "裂围",
	reliewei_info: "每回合限Y次，当有角色进入濒死状态时，你可以摸一张牌（Y为你的体力值，若当前回合角色为你，则Y为Infinity）。",
	duanwei: "段煨",
	langmie: "狼灭",
	langmie_damage: "狼灭",
	langmie_info: "其他角色的出牌阶段结束时，若其本阶段内使用过的牌中有类型相同的牌，则你可以摸一张牌；其他角色的结束阶段开始时，若其本回合内造成的伤害大于1，则你可以弃置一张牌并对其造成1点伤害。",
	zhangheng: "张横",
	dangzai: "挡灾",
	dangzai_info: "出牌阶段开始时，你可将一名其他角色判定区内的任意张牌移动至你的判定区内。",
	liangjue: "粮绝",
	liangjue_info: "锁定技，一张黑色牌进入或者离开你的判定区或装备区后，你摸两张牌，然后若你的体力值大于1，你失去1点体力。",
	tangji: "唐姬",
	kangge: "抗歌",
	kangge_info: "你的第一个回合开始时，选择一名其他角色，该角色每次于其回合外得到牌后，你摸等量的牌（每回合至多摸三张）；其进入濒死状态时，你可令其回复体力至1点（每轮限一次）。该角色死亡时，你弃置所有牌并失去1点体力。",
	jielie: "节烈",
	jielie_info: "当你受到除自己和“抗歌”角色以外的角色造成的伤害时，你可以防止此伤害并选择一种花色，然后你失去X点体力，令“抗歌”角色从弃牌堆中随机获得X张此花色的牌（X为伤害值）。",
	re_dongcheng: "董承",
	xuezhao: "血诏",
	xuezhao_info: "出牌阶段限一次，你可弃置一张手牌并选择至多X名其他角色(X为你的体力上限）。这些角色依次选择是否交给你一张牌，若选择是，该角色摸一张牌且你本回合可多使用一张【杀】；若选择否，该角色本回合无法响应你使用的牌。若没有角色交给你牌，你将手牌摸至体力上限。",
	re_hucheer: "胡车儿",
	redaoji: "盗戟",
	redaoji2: "盗戟",
	redaoji_info: "其他角色第一次使用武器牌时，你可选择一项：①获得此牌。②令其本回合内不能使用或打出【杀】。",
	fuzhong: "负重",
	fuzhong_info: "锁定技，当你于回合外得到牌后，你获得一枚“重”标记。若X：大于0，你于摸牌阶段开始时令额定摸牌数+1；大于1，你至其他角色的距离-2；大于2，你的手牌上限+3；大于3，结束阶段开始时，你对一名其他角色造成1点伤害，然后移去4枚“重”（X为“重”数）。",
	qiuliju: "丘力居",
	koulve: "寇略",
	koulve_info: "当你于出牌阶段内对其他角色造成伤害后，你可以展示其X张手牌（X为其已损失的体力值）。若这些牌中：有带有伤害标签的基本牌或锦囊牌，则你获得之；有红色牌，则你失去1点体力（若已受伤则改为减1点体力上限），然后摸两张牌。",
	qljsuiren: "随认",
	qljsuiren_info: "当你死亡时，你可以将手牌中所有的带有伤害标签的基本牌或锦囊牌交给一名其他角色。",
	re_zoushi: "邹氏",
	rehuoshui: "祸水",
	rehuoshui_info: "准备阶段，你可以选择至多X名角色（X为你已损失的体力值且至少为1）。你令这些角色中第一名角色的非锁定技失效直到回合结束；第二名角色交给你一张手牌；第三名及之后角色弃置装备区内的所有牌。",
	reqingcheng: "倾城",
	reqingcheng_info: "出牌阶段限一次，你可以与一名手牌数不大于你的男性角色交换手牌。",
	caoanmin: "曹安民",
	xianwei: "险卫",
	xianwei_info: "锁定技，准备阶段，你废除一个装备栏并摸X张牌（X为你未废除的装备栏数），然后你令一名其他角色对其自己使用一张牌堆中的一张与此装备栏副类别相同的装备牌（没有可使用的牌则改为摸一张牌）。当你废除所有装备栏后，你加2点体力上限，然后你与所有其他角色视为在彼此的攻击范围内。",
	dufuren: "杜夫人",
	yise: "异色",
	yise_info: "其他角色得到你的牌后，若这些牌中：有红色牌，你可令其回复1点体力；有黑色牌，其下次受到因执行【杀】的效果造成的伤害时，此伤害+1。",
	shunshi: "顺世",
	shunshi_info: "准备阶段开始时，或当你受到伤害后，你可将一张牌交给一名不为伤害来源的其他角色并获得如下效果直到你的回合结束：摸牌阶段的额定摸牌数+1，使用【杀】的次数上限+1，手牌上限+1。",
	rexingluan: "兴乱",
	rexingluan_info: "出牌阶段限一次，当你使用的仅指定一个目标的牌结算完成后，你可以获得场上一张与此牌点数相同的牌，或获得牌堆中随机一张点数与此牌相同的牌。",
	xinxingluan: "兴乱",
	xinxingluan_info: "每回合限一次。当你于出牌阶段内使用牌结算结束后，你可选择一项：①观看牌堆中的两张点数为6的牌并获得其中一张（没有则改为摸六张牌）；②令一名其他角色弃置一张点数为6的牌或交给你一张牌；③获得场上的一张点数为6的牌。",
	re_nanhualaoxian: "南华老仙",
	gongxiu: "共修",
	gongxiu_info: "结束阶段，若你本回合内发动过〖经合〗，则你选择一项：①令所有本回合内成为过〖经合〗目标的角色各摸一张牌；②令所有本回合内未成为过〖经合〗目标的角色各弃置一张手牌。",
	jinghe: "经合",
	jinghe_info: "出牌阶段限一次，你可以展示至多四张牌名各不相同的牌并选择等量的角色。系统从“写满技能的天书”中随机选择等量的技能，然后这些角色依次选择获得其中的一个。",
	nhyinbing: "阴兵",
	nhyinbing_info: "锁定技，你使用的【杀】造成伤害改为失去体力。其他角色失去体力后，你摸一张牌。",
	nhhuoqi: "活气",
	nhhuoqi_info: "出牌阶段限一次，你可以弃置一张牌，然后令体力值最少的一名角色回复1点体力并摸一张牌。",
	nhguizhu: "鬼助",
	nhguizhu_info: "一名角色进入濒死状态时，你可以摸两张牌（每回合限一次）。",
	nhxianshou: "仙授",
	nhxianshou_info: "出牌阶段限一次，你可以选择一名角色令其摸一张牌。若其未受伤，则多摸一张。",
	nhlundao: "论道",
	nhlundao_info: "当你受到伤害后，若伤害来源比你手牌多，你可以弃置其一张牌；若伤害来源比你手牌少，你摸一张牌。",
	nhguanyue: "观月",
	nhguanyue_info: "结束阶段，你可以观看牌堆顶两张牌，然后获得其中一张，另一张放回牌堆顶。",
	nhyanzheng: "言政",
	nhyanzheng_info: "准备阶段，若你的手牌数大于1，你可以保留一张手牌并弃置其余的牌，然后选择至多等于弃牌数量的角色，对这些角色各造成1点伤害。",
	sp_mifangfushiren: "糜芳傅士仁",
	mffengshi: "锋势",
	mffengshi_info: "当你使用牌指定唯一目标后，或成为其他角色使用牌的唯一目标后，若此牌使用者的手牌数大于此牌目标的手牌数，则此牌的使用者可令你弃置自己和对方的各一张牌，并令此牌的伤害值+1。",
	dcmffengshi: "锋势",
	dcmffengshi_info: "当你使用牌指定唯一目标后，或成为其他角色使用牌的唯一目标后，若此牌使用者的手牌数大于此牌目标的手牌数，则你可弃置自己和对方的各一张牌，并令此牌的伤害值+1。",
	fengshi: "锋势",
	fengshi_info: "当你使用牌指定第一个目标后，你可弃置你与其中一名手牌数小于你的目标角色的各一张牌，并令此牌对其造成的伤害+1；当你成为其他角色使用牌的目标后，若你的手牌数小于其，则你可以弃置你与其的各一张牌，并令此牌对你造成的伤害+1。",
	tongyuan: "童渊",
	chaofeng: "朝凤",
	chaofeng_info: "出牌阶段限一次。当你造成伤害时，你可以弃置一张手牌，然后摸一张牌。若此伤害的渠道为牌且你弃置的牌：与此牌颜色相同，则你改为摸两张牌；与此牌类型相同，则此伤害+1。",
	chuanshu: "传术",
	chuanshu_info: "限定技。准备阶段，若你已受伤；或当你死亡时，你可令一名其他角色获得〖朝凤〗。然后你获得〖龙胆〗、〖从谏〗和〖穿云〗。",
	chuanyun: "穿云",
	chuanyun_info: "当你使用【杀】指定目标后，你可令目标角色随机弃置其装备区内的一张牌。",
	zhangning: "张宁",
	tianze: "天则",
	tianze_info: "①其他角色于其出牌阶段内使用的第一张黑色手牌结算结束后，你可以弃置一张黑色牌，并对其造成1点伤害。②其他角色的判定生效后，若结果为黑色，则你摸一张牌。",
	difa: "地法",
	difa_info: "每回合限一次。当你于回合内得到红色牌后，你可以弃置其中一张。然后你选择一个锦囊牌的牌名，并从牌堆/弃牌堆中获得一张此牌名的牌。",
	xinping: "辛评",
	fuyuan: "辅袁",
	fuyuan_info: "当你于回合外使用或打出牌时，若当前回合角色的手牌数：不小于你，你可摸一张牌；小于你，你可令其摸一张牌。",
	zhongjie: "忠节",
	zhongjie_info: "当你死亡时，你可令一名其他角色加1点体力上限并回复1点体力，然后摸一张牌。",
	hanmeng: "韩猛",
	jieliang: "截粮",
	jieliang_info: "其他角色的摸牌阶段开始时，你可弃置一张牌，令其本阶段的摸牌数和本回合的手牌上限-1。然后当其于本回合的弃牌阶段内因弃置而失去牌后，你可获得其中的一张。",
	quanjiu: "劝酒",
	quanjiu_info: "锁定技。①你手牌区中的【酒】的牌名视为【杀】。②你使用对应的实体牌为一张【酒】的非转化【杀】不计入次数限制。",
	re_pangdegong: "庞德公",
	heqia: "和洽",
	heqia_info: "出牌阶段开始时，你可选择一项：①将任意张牌交给一名其他角色。②令一名有手牌的其他角色交给你任意张牌。然后以此法得到牌的角色可以将一张手牌当作任意基本牌使用，且当其声明使用此牌后，可以为此牌增加至至多X个目标（X为以此法移动的牌数）。",
	yinyi: "隐逸",
	yinyi_info: "锁定技。每回合限一次，当你受到非属性伤害时，若你的手牌数和体力值与伤害来源均不相同，则你防止此伤害。",
	haomeng: "郝萌",
	xiongmang: "雄莽",
	xiongmang_info: "你可将任意张花色各不相同的手牌当做目标数上限为X的【杀】使用（X为此【杀】对应的实体牌数）。此【杀】使用结算结束后，若此牌造成过/未造成过伤害，则你本阶段使用【杀】的额定次数+1/减1点体力上限。",
	yanfuren: "严夫人",
	channi: "谗逆",
	channi_info: "出牌阶段限一次。你可将任意张手牌交给一名其他角色，然后其可以将至多等量的手牌当做【决斗】使用。当其因此【决斗】：造成伤害后，其摸X张牌（X为此【决斗】对应的实体牌数）；受到伤害后，你弃置所有手牌。",
	nifu: "匿伏",
	nifu_info: "锁定技。一名角色的回合结束时，你将手牌摸至或弃置至三张。",
	licaiwei: "李采薇",
	yijiao: "异教",
	yijiao_info: "出牌阶段限一次，你可以选择一名没有“异”标记的其他角色并声明一个整数X（X∈[1,4]），该角色获得10X个“异”标记。有“异”标记的角色的结束阶段，其移去“异”标记，且若其本回合使用牌的点数之和：1.小于“异”标记数，其随机弃置至多三张手牌；2.等于“异”标记数，你摸两张牌且该角色本回合结束后进行一个额外的回合；3.大于“异”标记数，你摸三张牌。",
	qibie: "泣别",
	qibie_info: "一名角色死亡后，若你有手牌且这些手牌均可被弃置，则你可以弃置所有手牌，然后回复1点体力并摸X+2张牌（X为你弃置的牌数）。",
	dc_zhuling: "朱灵",
	dczhanyi: "战意",
	dczhanyi_info: "出牌阶段开始时，你可以弃置所有基本牌/锦囊牌/装备牌，然后获得另外两种类型的牌对应的效果直到你的下个回合开始：基本牌、你使用基本牌无距离限制，且伤害值和回复值基数+1；锦囊牌、你使用锦囊牌时摸一张牌，且锦囊牌不计入手牌上限；装备牌，当装备牌进入你的装备区时，你可弃置一名其他角色的一张牌。",
	yanrou: "阎柔",
	choutao: "仇讨",
	choutao_info: "当你使用【杀】时，或成为【杀】的目标后，你可以弃置此【杀】使用者的一张牌，令此【杀】不可被响应。若你是此【杀】的使用者，则你令此【杀】不计入次数限制。",
	xiangshu: "襄戍",
	xiangshu_info: "限定技。结束阶段开始时，若你本回合内造成过伤害，则你可以选择一名已受伤的角色。该角色回复X点体力并摸X张牌（X为你本回合内造成的伤害值总和且至多为5）。",
	qinyilu: "秦宜禄",
	piaoping: "漂萍",
	piaoping_info: "转换技，锁定技。当你使用一张牌时，阴：你摸X张牌。阳：你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）",
	tuoxian: "托献",
	tuoxian_info: "每局游戏限一次。当你因执行〖漂萍〗的效果而弃置牌后，你可令一名其他角色获得这些牌，然后令该角色选择一项：⒈弃置区域内等量的牌。⒉令你的〖漂萍〗失效直到回合结束。",
	chuaili: "惴栗",
	chuaili_info: "锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阳状态，则你将〖漂萍〗转换至阴状态；处于阴状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。",
	fengfang: "冯方",
	dcditing: "谛听",
	dcditing_info: "其他角色的出牌阶段开始时，若你在该角色的攻击范围内，则你可以观看其的X张手牌（X为你的体力值）并选择其中一张，且获得如下效果：①当其使用对应实体牌包含此牌的牌指定你为目标后，你令此牌对你无效。②当其使用对应实体牌包含此牌的牌结算结束后，若你不是此牌的目标，则你摸两张牌。③其出牌阶段结束时，若此牌位于其的手牌区，则你获得此牌。",
	dcbihuo: "避祸",
	dcbihuo_info: "①当你受到其他角色造成的伤害后，你可令一名角色下回合摸牌阶段的额定摸牌数+1。②当你对其他角色造成伤害后，你可令一名角色下回合摸牌阶段的额定摸牌数-1。",
	bianxi: "卞喜",
	dunxi: "钝袭",
	dunxi_info: "①当你使用具有伤害标签的牌时，你可以令一名不为你的目标角色获得一枚“钝”。②有“钝”的角色使用基本牌或锦囊牌时，若此牌目标数为1且此时没有角色处于濒死状态，你令其移去一枚“钝”。系统随机选择一名角色，并将此牌的目标改为该角色。若该角色和原目标相同，则其失去1点体力。若其正处于出牌阶段内，则结束此阶段。",
	niufu: "牛辅",
	dcxiaoxi: "宵袭",
	dcxiaoxi_info: "锁定技。出牌阶段开始时，你声明X并减X点体力上限（X∈[1,2]）。然后你选择一名攻击范围内的其他角色并选择一项：⒈获得该角色的X张牌。⒉视为对其使用X张【杀】。",
	xiongrao: "熊扰",
	xiongrao_info: "限定技。准备阶段开始时，你可以选择所有其他角色。这些角色本回合内所有不为锁定技、限定技、觉醒技的普通技能失效。然后你将体力上限增加至7点并摸X张牌（X为你以此法增加的体力上限数）。",
	dc_huban: "胡班",
	dcchongyi: "崇义",
	dcchongyi_info: "①一名角色使用【杀】时，若此牌是其于当前出牌阶段内使用的第一张牌，则你可以令其摸两张牌，且其本回合使用【杀】的次数上限+1。②一名角色的出牌阶段结束时，若其于此阶段内使用的最后一张牌为【杀】，则你可以令其本回合的手牌上限+1，然后你获得此【杀】。",
	wangwei: "王威",
	dcruizhan: "锐战",
	dcruizhan_info: "其他角色的准备阶段开始时，若其的手牌数不小于其体力值，则你可以和其拼点。若你赢或拼点牌中有【杀】，则你视为对其使用一张【杀】。然后若此【杀】造成了伤害且以上两个条件均被满足，则你获得其一张牌。",
	dcshilie: "示烈",
	dcshilie_info: "①出牌阶段限一次。你可以选择一项：⒈回复1点体力，将两张牌置于武将牌上作为“示烈”。若“示烈”牌数大于存活人数，则你将最早的多余牌置入弃牌堆；⒉失去1点体力，获得两张“示烈”牌。（满血则不回血，无牌则不移动）②当你死亡时，你可以将所有“示烈”牌交给一名不为伤害来源的其他角色。",
	dc_zhaoyǎn: "赵俨",
	dcfuning: "抚宁",
	dcfuning_info: "当你使用牌时，你可以摸两张牌，然后弃置X张牌（X为你本回合内发动过〖抚宁〗的次数）。",
	dcbingji: "秉纪",
	dcbingji_info: "出牌阶段每种花色各限一次。若你有手牌且这些牌的花色均相同，则你可以展示手牌，然后选择一名其他角色，视为对其使用一张【杀】或【桃】（有距离限制）。",
	mushun: "穆顺",
	dcjinjian: "劲坚",
	dcjinjian_info: "①当你受到其他角色造成的伤害后或造成伤害后，你获得一枚“劲”。然后你可以和伤害来源拼点，若你赢，你恢复1点体力。②你的攻击范围+X（X为“劲”数）。",
	dcshizhao: "失诏",
	dcshizhao_info: "锁定技。每回合限一次，当你于回合外失去手牌后，若你没有手牌，且你：有“劲”，则你移去一枚“劲”并摸两张牌；没有“劲”，则你本回合下一次受到的伤害+1。",
	liyixiejing: "李异谢旌",
	dcdouzhen: "斗阵",
	dcdouzhen_info: "锁定技。①转换技。你的回合内，阴：当你使用非转化且对应的实体牌为一张黑色基本牌的【决斗】时，你获得目标角色各一张牌并获得1枚“☯”；阳：当你使用或打出非转化且对应的实体牌为一张红色基本牌的【杀】时，你获得1枚“☯”。②若你的“☯”数为：偶数，你的黑色基本牌均视为【决斗】；奇数，你的红色基本牌均视为无次数限制的普【杀】。",
	dc_hujinding: "新杀胡金定",
	dc_hujinding_prefix: "新杀",
	dcdeshi: "德释",
	dcdeshi_info: "锁定技。当你受到【杀】的伤害时，若你已受伤，则你防止此伤害并令系统从弃牌堆/牌堆中检索一张【杀】，你获得此【杀】，然后减1点体力上限。",
	dcwuyuan: "武缘",
	dcwuyuan_info: "出牌阶段限一次。你可将一张【杀】交给一名其他角色，然后你回复1点体力，你与其各摸一张牌。若此【杀】为：红色【杀】，其回复1点体力；属性【杀】，其改为摸两张牌。",
	shiyi: "是仪",
	dccuichuan: "榱椽",
	dccuichuan_info: "出牌阶段限一次。你可以弃置一张手牌并选择一名角色，其随机使用牌堆里一张其空置装备栏对应副类别且其能对其使用的装备牌，你摸X张牌（X为其装备区里的牌数）。然后若其装备区里的牌数增加至四张，你失去〖榱椽〗，获得〖佐谏〗，且令其获得一个额外回合。",
	dczhengxu: "正序",
	dczhengxu_info: "每回合每项限一次。①当你受到伤害时，若你本回合失去过牌，你可以防止此伤害。②当你失去牌后，若你本回合受到过伤害，你可以摸等量的牌。",
	dczuojian: "佐谏",
	dczuojian_info: "出牌阶段结束时，若你于此阶段使用过的牌数不小于体力值，你可以选择一项：1.令装备区牌数多于你的角色各摸一张牌；2.弃置装备区牌数少于你的角色各一张手牌。",
	sunlang: "孙狼",
	dctingxian: "铤险",
	dctingxian_info: "每回合限一次。当你使用【杀】指定最后一个目标后，你可以摸X张牌，然后可以令此【杀】对其中至多X个目标无效（X为你装备区的牌数+1）。",
	dcbenshi: "奔矢",
	dcbenshi_info: "锁定技。①你的攻击范围+1。②由你使用的【杀】的牌面信息中的“使用目标”产生的规则改为“攻击范围内的所有角色”。",
	sunhuan: "孙桓",
	dcniji: "逆击",
	dcniji_info: "①当你成为非装备牌的目标后，你可以摸一张牌，称为“逆击”。②一名角色的结束阶段，你可以使用一张“逆击”牌，然后弃置所有“逆击”牌。",
	//dc_fuwan:'新杀伏完',
	//dc_fuwan_prefix:'新杀',
	//dc_fuwan_ab:'伏完',
	dcmoukui: "谋溃",
	dcmoukui_info: "当你使用【杀】指定第一个目标后，你可以选择任意项：1.摸一张牌；2.弃置其中一个目标角色一张牌。若你均选择，当此【杀】被无效后或被抵消后，该角色弃置你一张牌。",
	guānning: "关宁",
	dcxiuwen: "修文",
	dcxiuwen_info: "当你使用牌时，若你未记录此牌牌名，你可以记录之并摸一张牌。",
	oldlongsong: "龙诵",
	oldlongsong_info: "出牌阶段开始时，你可以将一张手牌交给一名其他角色。然后其须选择其所有的发动时机为出牌阶段内的空闲时间点且你至多能于此阶段发动一次的技能，其于此阶段这些技能失效，你获得这些技能。",
	dclongsong: "龙诵",
	dclongsong_info: "出牌阶段开始时，你可以将一张红色牌交给一名其他角色。然后其须选择其所有的发动时机包含“出牌阶段”的技能，其于此阶段这些技能失效，你获得这些技能且至多可以发动一次。",
	longsong: "龙诵",
	longsong_info: "出牌阶段开始时，你可以交给或获得一名其他角色一张红色牌，然后你本阶段获得其发动时机包含“出牌阶段”的一项技能且至多可以发动一次。若其没有符合条件的技能，则改为随机获得一个满足条件的技能。",
	dc_mengda: "孟达",
	dclibang: "利傍",
	dclibang_info: "出牌阶段限一次。你可以弃置一张牌，正面向上获得两名其他角色的各一张牌。然后你判定，若结果与这两张牌的颜色均不同，你交给其中一名角色两张牌或失去1点体力，否则你获得判定牌并视为对其中一名角色使用一张【杀】。",
	dcwujie: "无节",
	dcwujie_info: "锁定技。①你使用无色牌无任何次数限制且无距离限制。②当其他角色执行杀死你的奖惩而摸牌或弃牌时，取消之。",
	dc_jsp_guanyu: "新杀SP关羽",
	dc_jsp_guanyu_prefix: "新杀SP",
	dcdanji: "单骑",
	dcdanji_info: "觉醒技。准备阶段，若你区域内的牌数大于体力值，你减1点体力上限，将体力回复至体力上限并摸等量张牌，然后获得〖马术〗和〖怒嗔〗。",
	dcnuchen: "怒嗔",
	dcnuchen_info: "出牌阶段限一次。你可以展示一名其他角色的一张手牌，然后选择一项：1.弃置任意张该花色的牌，对其造成等量伤害；2.获得该角色手牌中所有此花色的牌。",
	dc_jikang: "新杀嵇康",
	dc_jikang_prefix: "新杀",
	dcjuexiang: "绝响",
	dcjuexiang_info: "当你死亡时，杀死你的角色弃置其装备区内的所有牌并失去1点体力，然后你可以令一名其他角色获得〖残韵〗。",
	dccanyun: "残韵",
	dccanyun_info: "每名角色限一次。出牌阶段，你可以弃置一张牌并选择一名其他角色，然后若其装备区里的牌数：小于你，其回复1点体力；大于你，其失去1点体力；等于你，其摸一张牌。若你的体力值为1，你摸一张牌。",
	star_caoren: "星曹仁",
	star_caoren_prefix: "星",
	starsujun: "肃军",
	starsujun_info: "当你使用一张牌时，若你手牌中的基本牌和非基本牌的牌数相等，你可以摸两张牌。",
	starlifeng: "砺锋",
	starlifeng_info: "你可以将一张本回合未有角色使用过的颜色的手牌当做不计入次数的【杀】或【无懈可击】使用。",
	star_yuanshu: "星袁术",
	star_yuanshu_prefix: "星",
	starcanxi: "残玺",
	starcanxi_wangsheng: "妄生",
	starcanxi_xiangsi: "向死",
	starcanxi_cancel: "向死",
	starcanxi_info: "锁定技。①游戏开始时，你获得场上所有角色的势力对应的“玺角”标记（初始势力中未获得的“玺角”标记改为增加等量的体力上限）。②一轮游戏开始时，你选择一个“玺角”对应势力并选择以下一项：1.妄生：本轮被选择势力角色每回合首次造成的伤害+1且计算与其他角色间的距离-1；2.向死：本轮其他被选择势力角色每回合首次回复体力后失去1点体力且每回合对你使用的第一张牌无效。",
	starpizhi: "圮秩",
	starpizhi_info: "锁定技。①一名角色死亡后，若你拥有该角色对应的“玺角”标记且你本轮发动〖向死〗的势力与其相同，或其是该势力最后一名角色，你失去之，然后摸X张牌并回复1点体力。②结束阶段，你摸X张牌。（X为你本局游戏失去的“玺角”标记数）",
	starzhonggu: "冢骨",
	starzhonggu_info: "主公技，锁定技。摸牌阶段，若游戏轮数大于等于场上的群势力角色数，则你额外摸两张牌，否则你少摸一张牌。",
	star_dongzhuo: "星董卓",
	star_dongzhuo_prefix: "星",
	starweilin: "威临",
	starweilin_info: "锁定技。当你于回合内对一名其他角色造成伤害时，若其本回合未受到过伤害，且你本回合使用的牌数大于等于其体力值，则此伤害+1。",
	starzhangrong: "掌戎",
	starzhangrong_info: "准备阶段，你可以选择令至多X名体力值大于等于你的角色各失去1点体力或令至多X名手牌数大于等于你的角色各弃置一张手牌（X为你的体力值）。若如此做，你摸等同于选择角色数的牌，且本回合结束时，若这些角色中存在本回合未受到过伤害的角色，则你失去1点体力。",
	starhaoshou: "豪首",
	//starhaoshou_info:'主公技。①其他群势力角色使用【酒】结算完毕后，其可以令你回复1点体力。②当你处于濒死状态时，其他群势力角色可以将【酒】当作【桃】对你使用。',
	starhaoshou_info: "主公技。其他群势力角色使用【酒】结算完毕后，其可以令你回复1点体力。",
	star_yuanshao: "星袁绍",
	star_yuanshao_prefix: "星",
	starxiaoyan: "硝焰",
	starxiaoyan_info: "锁定技，游戏开始时，你对所有其他角色各造成1点火属性伤害，然后这些角色可依次交给你一张牌并回复1点体力。",
	starzongshi: "纵势",
	starzongshi_info: "出牌阶段，你可以展示一张可展示目标的基本牌或普通锦囊牌，然后你将手牌中所有与此牌花色相同的其他牌当作此牌使用（无距离限制），且此牌至多指定转化牌数的目标。",
	starjiaowang: "骄妄",
	starjiaowang_info: "锁定技，非首轮游戏开始时，若上一轮没有角色死亡（因〖硝焰〗死亡的角色除外），则你失去1点体力并发动〖硝焰〗。",
	staraoshi: "傲势",
	staraoshi_info: "主公技，其他群势力角色的出牌阶段限一次，其可以交给你一张手牌，然后你可以发动一次〖纵势〗。",
	star_zhangchunhua: "星张春华",
	star_zhangchunhua_prefix: "星",
	starliangyan: "梁燕",
	starliangyan_info: "出牌阶段限一次。你可以选择一名其他角色，你摸/弃置至多两张牌，令其弃置/摸等量的牌。然后若你与其手牌数相同，以此法摸牌的角色跳过其下一个弃牌阶段。",
	starminghui: "明慧",
	starminghui_info: "一名角色的回合结束时，若你的手牌数：最少，你可以视为使用一张无距离限制的【杀】；最多，你可以将手牌弃置至你手牌数不为最多，然后令一名角色回复1点体力。",
	star_sunshangxiang: "星孙尚香",
	star_sunshangxiang_prefix: "星",
	starsaying: "飒影",
	starsaying_info: "每轮每种牌名限一次，你需要使用【杀】或【闪】时，你可以使用一张装备牌，视为使用之；你需要使用【桃】或【酒】时，你可以收回装备区里的一张牌，视为使用之。",
	starjiaohao: "骄豪",
	starjiaohao_info: "出牌阶段限一次，你可以与一名装备区牌数不大于你的角色拼点，然后你可令赢的角色获得拼点牌或令其使用一张【杀】。",
	liqueguosi: "李傕郭汜",
	xiongsuan: "凶算",
	xiongsuan_info: "出牌阶段限一次，你可以弃置一张手牌并对一名角色造成1点伤害，然后你摸三张牌。若该角色不为你，你失去1点体力。",
	star_sunjian: "星孙坚",
	star_sunjian_prefix: "星",
	starruijun: "锐军",
	starruijun_info: "当你于出牌阶段首次使用牌指定其他角色为目标后，你可以选择其中一名目标角色并摸X张牌（X为你已损失的体力值+1）。直到此阶段结束，所有不为其的其他角色均不在你的攻击范围内，且当你对其造成伤害时，此伤害值改为Y（Y为你本回合上一次对其造成过的伤害值+1，至多为5）。",
	stargangyi: "刚毅",
	stargangyi_info: "锁定技。①你的回合内，若你本回合没有造成过伤害，你不能使用【桃】。②当你处于濒死状态时，以你为目标的【桃】或【酒】的回复值+1。",
	star_zhangzhao: "星张昭",
	star_zhangzhao_prefix: "星",
	starzhongyan: "忠言",
	starzhongyan_info: "出牌阶段限一次，你可展示牌堆顶三张牌，然后令一名角色将一张手牌与其中一张牌交换。然后若这些牌颜色相同，其回复1点体力或获得场上一张牌。然后若该角色不为你，你执行其未执行的一项。",
	starjinglun: "经纶",
	starjinglun_info: "每回合限一次，当你距离1以内的角色造成伤害后，你可以令其摸X张牌并对其发动〖忠言〗（X为其装备区的牌数）。",
	chezhou: "车胄",
	dcshefu: "慑伏",
	dcshefu_info: "锁定技。你对其他角色/其他角色对你使用牌造成的伤害改为X（X为此牌对应的所有实体牌最近一次被伤害来源获得后至现在经过的轮次数之和）。",
	dcpigua: "披挂",
	dcpigua_info: "当你对一名其他角色造成超过1点伤害后，你可以获得其至多等同于游戏轮次的牌，这些牌本回合不计入你的手牌上限。",
	hansong: "韩嵩",
	dcyinbi: "隐避",
	dcyinbi_info: "锁定技。①你的手牌上限与场上手牌上限最多的角色相同。②若没有其他角色的手牌数与你相等，则你使用牌无距离和次数限制。",
	dcshuaiyan: "率言",
	dcshuaiyan_info: "锁定技，其他角色手牌数变化后，若与你相等，你弃置其一张牌或摸一张牌。",
	matie: "马铁",
	dczhuiwang: "追亡",
	dczhuiwang_info: "锁定技，你计算体力值小于等于你的角色的距离视为1。",
	dcquxian: "驱险",
	dcquxian_info: "出牌阶段开始时，你可以选择一名角色，攻击范围内包含其的其他角色可以依次对其使用一张【杀】。若其未以此法受到伤害，这些角色中未使用【杀】的角色失去X点体力（X为这些角色中使用【杀】的角色数）。",
	star_xunyu: "星荀彧",
	star_xunyu_prefix: "星",
	staranshu: "安庶",
	staranshu_info: "①非首轮游戏开始时，你可以选择弃牌堆中不同牌名的基本牌各一张置于牌堆底，然后视为使用一张【五谷丰登】（从你或一名已受伤角色开始结算）；②一名角色的回合结束时，若有角色本回合失去了本轮因〖安庶〗①获得的牌，你可令其将手牌摸至体力上限（至多摸五张）。",
	starkuangzuo: "匡祚",
	starkuangzuo_info: "限定技，出牌阶段，你可以令一名角色A获得〖承奉〗（若其为主公且没有主公技，其获得〖统荫〗），然后令另一名角色B将每种花色的牌各一张置于A武将牌上，称为“匡祚”。",
	starchengfeng: "承奉",
	starchengfeng_info: "每回合限一次，你可以将一张红色/黑色“匡祚”牌当作【闪】/【无懈可击】对即将对你生效的牌使用。此牌结算完成后，若你的“匡祚”牌包含颜色数少于2，你可以将牌堆顶一张牌当作“匡祚”置于武将牌上。",
	startongyin: "统荫",
	startongyin_info: "主公技，你受到其他角色使用牌造成的伤害后，若伤害来源与你势力相同/不同，你可以将此牌/其一张牌当作“匡祚”置于武将牌上。",
};

export default translates;
