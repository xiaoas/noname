const translates = {
	caocao: "曹操",
	hujia: "护驾",
	hujia_info: "主公技，当你需要使用或打出一张【闪】时，你可以令其他魏势力角色选择是否打出一张【闪】。若有角色响应，则你视为使用或打出了一张【闪】。",
	jianxiong: "奸雄",
	jianxiong_info: "当你受到伤害后，你可以获得对你造成伤害的牌。",

	simayi: "司马懿",
	fankui: "反馈",
	fankui_info: "当你受到伤害后，你可以获得伤害来源的一张牌。",
	guicai: "鬼才",
	guicai_info: "一名角色的判定牌生效前，你可以打出一张手牌代替之。",
	guicai_info_guozhan: "一名角色的判定牌生效前，你可以打出一张牌代替之。",

	xiahoudun: "夏侯惇",
	zhangliao: "张辽",
	xuzhu: "许褚",
	guojia: "郭嘉",
	zhenji: "甄宓",
	liubei: "刘备",
	guanyu: "关羽",
	zhangfei: "张飞",
	zhugeliang: "诸葛亮",
	zhaoyun: "赵云",
	machao: "马超",
	huangyueying: "黄月英",
	sunquan: "孙权",
	ganning: "甘宁",
	lvmeng: "吕蒙",
	huanggai: "黄盖",
	zhouyu: "周瑜",
	daqiao: "大乔",
	luxun: "陆逊",
	sunshangxiang: "孙尚香",
	huatuo: "华佗",
	lvbu: "吕布",
	diaochan: "貂蝉",
	huaxiong: "华雄",
	xf_yiji: "伊籍",
	re_yuanshu: "袁术",
	caozhang: "曹彰",

	ganglie: "刚烈",
	tuxi: "突袭",
	luoyi: "裸衣",
	luoyi2: "裸衣",
	tiandu: "天妒",
	yiji: "遗计",
	luoshen: "洛神",
	qingguo: "倾国",
	rende: "仁德",
	jijiang: "激将",
	jijiang1: "激将",
	jijiang2: "激将",
	wusheng: "武圣",
	paoxiao: "咆哮",
	guanxing: "观星",
	kongcheng: "空城",
	kongcheng1: "空城",
	longdan: "龙胆",
	longdan1: "龙胆",
	longdan2: "龙胆",
	mashu: "马术",
	feiying: "飞影",
	tieji: "铁骑",
	jizhi: "集智",
	qicai: "奇才",
	zhiheng: "制衡",
	jiuyuan: "救援",
	qixi: "奇袭",
	keji: "克己",
	kurou: "苦肉",
	yingzi: "英姿",
	fanjian: "反间",
	guose: "国色",
	liuli: "流离",
	qianxun: "谦逊",
	lianying: "连营",
	xiaoji: "枭姬",
	jieyin: "结姻",
	qingnang: "青囊",
	jijiu: "急救",
	wushuang: "无双",
	wushuang1: "无双",
	wushuang2: "无双",
	lijian: "离间",
	biyue: "闭月",
	pileTop: "牌堆顶",
	pileBottom: "牌堆底",
	ganglie_info: "当你受到伤害后，你可以判定。若结果不为红桃，则伤害来源须弃置两张手牌，否则受到来自你的1点伤害。",
	tuxi_info: "摸牌阶段，你可以改为获得至多两名其他角色的各一张手牌。",
	luoyi_info: "摸牌阶段，你可以少摸一张牌。若如此做，当你本回合内使用【杀】或【决斗】造成伤害时，此伤害+1。",
	tiandu_info: "当你的判定牌生效后，你可以获得之。",
	yiji_info: "当你受到1点伤害后，你可以观看牌堆顶的两张牌，然后将其分配给任意角色。",
	luoshen_info: "准备阶段，你可以判定。若结果为黑色，你获得判定牌。你可重复此流程，直到出现红色的判定结果。",
	luoshen_info_guozhan: "准备阶段，你可以判定。若结果为黑色，则可以继续判定，直到出现红色的判定牌。然后你获得所有黑色的判定牌。（判定结果为黑色的牌在此过程中不会进入弃牌堆）",
	qingguo_info: "你可以将一张黑色手牌当做【闪】使用或打出。",
	rende_info: "出牌阶段，你可以将任意张手牌交给其他角色。当你以此法于一回合内给出第二张牌时，你回复1点体力。",
	jijiang_info: "主公技，当你需要使用或打出【杀】时，你可以令其他蜀势力角色依次选择是否打出一张【杀】。若有角色响应，则你视为使用或打出了此【杀】。",
	wusheng_info: "你可以将一张红色牌当做【杀】使用或打出。",
	paoxiao_info: "锁定技，出牌阶段，你使用【杀】没有数量限制。",
	guanxing_info: "准备阶段，你可以观看牌堆顶的X张牌，并将其以任意顺序置于牌堆顶或牌堆底。（X为存活角色数且至多为5）",
	kongcheng_info: "锁定技，当你没有手牌时，你不能成为【杀】或【决斗】的目标。",
	longdan_info: "你可以将【杀】当做【闪】，或将【闪】当做【杀】使用或打出。",
	mashu_info: "锁定技，你计算与其他角色的距离时-1。",
	feiying_info: "锁定技，其他角色计算与你的距离时+1。",
	tieji_info: "当你使用【杀】指定目标后，你可以进行判定。若结果为红色，则此【杀】不可被闪避。",
	jizhi_info: "当你使用非转化的普通锦囊牌时，你可以摸一张牌。",
	qicai_info: "锁定技，你使用锦囊牌无距离限制。",
	zhiheng_info: "出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。",
	jiuyuan_info: "主公技，锁定技，其他吴势力角色对你使用的【桃】的回复值+1。",
	qixi_info: "你可以将一张黑色牌当做【过河拆桥】使用。",
	keji_info: "弃牌阶段开始时，若你于本回合的出牌阶段内没有使用或打出过【杀】，则你可以跳过此阶段。",
	kurou_info: "出牌阶段，你可以失去1点体力，然后摸两张牌。",
	yingzi_info: "摸牌阶段，你可以多摸一张牌。",
	fanjian_info: "出牌阶段限一次。你可以令一名角色选择一种花色，然后其获得你的一张手牌。若其以此法选择的花色与其得到的牌花色不同，则你对其造成1点伤害。",
	guose_info: "你可以将一张方片牌当做【乐不思蜀】使用。",
	liuli_info: "当你成为【杀】的目标时，你可以弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色（不能是此【杀】的使用者）。",
	qianxun_info: "锁定技，你不能成为【顺手牵羊】和【乐不思蜀】的目标。",
	lianying_info: "当你失去最后的手牌时，你可以摸一张牌。",
	xiaoji_info: "当你失去一张装备区内的牌后，你可以摸两张牌。",
	jieyin_info: "出牌阶段限一次，你可以弃置两张手牌并选择一名已经受伤的男性角色。你与其各回复1点体力。",
	qingnang_info: "出牌阶段限一次，你可以弃置一张手牌并令一名角色回复1点体力。",
	jijiu_info: "你的回合外，你可以将一张红色牌当做【桃】使用。",
	wushuang_info: "锁定技，当你使用【杀】或【决斗】指定目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。",
	lijian_info: "出牌阶段限一次，你可以弃置一张牌，视为一名男性角色对另一名男性角色使用一张【决斗】（不可被【无懈可击】响应）。",
	biyue_info: "结束阶段，你可以摸一张牌。",
	yaowu: "耀武",
	yaowu_info: "锁定技，一名角色使用红色【杀】对你造成伤害时，该角色回复1点体力或摸一张牌。",
	new_jiangchi: "将驰",
	new_jiangchi_info: "摸牌阶段结束时，你可以选择一项：1、摸一张牌，若如此做，你本回合内不能使用或打出【杀】且【杀】不计入手牌上限。 2、弃置一张牌，若如此做，出牌阶段你使用【杀】无距离限制且你可以额外使用一张【杀】，直到回合结束。",
	xinfu_jijie: "机捷",
	xinfu_jijie_info: "出牌阶段限一次。你可以观看牌堆底的一张牌，然后将其交给一名角色。",
	xinfu_jiyuan: "急援",
	xinfu_jiyuan_info: "当有角色进入濒死状态时，或你将牌交给一名其他角色后，你可以令该角色摸一张牌。",
	ganglie_three: "刚烈",
	ganglie_three_info: "当你受到伤害后，你可令一名敌方角色判定。若结果不为♥，其弃置两张牌或受到来自你的1点伤害。",
	zhongyi: "忠义",
	zhongyi2: "忠义",
	zhongyi_info: "限定技，出牌阶段，你可以将一张牌置于武将牌上。你的武将牌上有〖忠义〗牌时，己方角色使用【杀】造成的伤害+1。下轮游戏开始时，你将〖忠义〗牌置入弃牌堆。",
	zhanshen: "战神",
	zhanshen_info: "觉醒技，准备阶段，若场上有已死亡的其他己方角色且你已受伤，则你弃置装备区的武器牌，减1点体力上限，获得技能〖马术〗和〖神戟〗。",
	shenji: "神戟",
	shenji_info: "锁定技，你使用【杀】指定的目标数上限+2，次数上限+1。",
	rewangzun: "妄尊",
	rewangzun2: "妄尊",
	rewangzun_info: "锁定技，一名其他角色的准备阶段开始时，若其体力值大于你，你摸一张牌。然后若其身份为主公/主帅/君主/地主且明置，则你摸一张牌，且其本回合的手牌上限-1。",
	retongji: "同疾",
	retongji_info: "攻击范围内包含你的角色成为【杀】的目标时，若你不是此【杀】的使用者或目标，其可弃置一张牌，然后将此【杀】转移给你。",
	std_panfeng: "标潘凤",
	std_panfeng_prefix: "标",
	stdkuangfu: "狂斧",
	stdkuangfu_info: "锁定技。出牌阶段限一次。当你使用【杀】对其他角色造成伤害后，若其体力值：小于你，你摸两张牌；不小于你，你失去1点体力。",
	ganfuren: "标甘夫人",
	ganfuren_prefix: "标",
	stdshushen: "淑慎",
	stdshushen_info: "当你回复1点体力时，你可以令一名其他角色摸一张牌（若其没有手牌则改为摸两张牌）。",
	old_re_lidian: "李典",
	std_yuejin: "标乐进",
	std_yuejin_prefix: "标",
	stdxiaoguo: "骁果",
	stdxiaoguo_info: "其他角色的结束阶段开始时，你可以弃置一张基本牌，令该角色选择一项：1.弃置一张装备牌；2.受到你对其造成的1点伤害。",
};

export default translates;
