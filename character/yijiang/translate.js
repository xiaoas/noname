const translates = {
	old_huaxiong: "将华雄",
	old_huaxiong_prefix: "将",
	yufan: "虞翻",
	xushu: "旧徐庶",
	xushu_prefix: "旧",
	caozhi: "曹植",
	zhangchunhua: "张春华",
	lingtong: "凌统",
	xunyou: "荀攸",
	liubiao: "刘表",
	zhuran: "朱然",
	yujin: "于禁",
	masu: "旧马谡",
	masu_prefix: "旧",
	xin_masu: "马谡",
	xin_fazheng: "法正",
	wuguotai: "吴国太",
	chengong: "陈宫",
	xusheng: "徐盛",
	guohuai: "郭淮",
	caochong: "曹冲",
	bulianshi: "步练师",
	handang: "韩当",
	fuhuanghou: "伏寿",
	caifuren: "蔡夫人",
	zhonghui: "钟会",
	old_zhonghui: "旧钟会",
	old_zhonghui_prefix: "旧",
	sunluban: "孙鲁班",
	chenqun: "陈群",
	zhangsong: "张松",
	guyong: "顾雍",
	jianyong: "简雍",
	old_madai: "马岱",
	gz_madai: "马岱",
	xin_xushu: "徐庶",
	manchong: "满宠",
	liufeng: "刘封",
	liru: "旧李儒",
	liru_prefix: "旧",
	yj_jushou: "沮授",
	zhuhuan: "朱桓",
	xiahoushi: "夏侯氏",
	panzhangmazhong: "潘璋马忠",
	caorui: "曹叡",
	caoxiu: "曹休",
	zhongyao: "钟繇",
	liuchen: "刘谌",
	zhangyi: "张嶷",
	sunxiu: "孙休",
	zhuzhi: "朱治",
	quancong: "全琮",
	gongsunyuan: "公孙渊",
	guotufengji: "郭图逢纪",
	zhoucang: "周仓",
	guanping: "关平",
	liaohua: "廖化",
	caozhen: "曹真",
	wuyi: "吴懿",
	hanhaoshihuan: "韩浩史涣",
	chengpu: "程普",
	gaoshun: "高顺",
	xin_liru: "李儒",
	guohuanghou: "郭皇后",
	liuyu: "刘虞",
	sundeng: "孙登",
	liyan: "李严",
	sunziliufang: "孙资刘放",
	huanghao: "黄皓",
	zhangrang: "张让",
	cenhun: "岑昏",
	xinxianying: "辛宪英",
	wuxian: "吴苋",
	xushi: "徐氏",
	caojie: "曹节",
	xuezong: "薛综",
	jikang: "嵇康",
	qinmi: "秦宓",
	caiyong: "蔡邕",

	new_qingxian: "清弦",
	new_qingxian_info: "出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
	new_juexiang: "绝响",
	new_juexiang_info: "锁定技，当你死亡后，杀死你的角色弃置装备区内的所有牌并失去1点体力。然后，你可以令一名其他角色获得技能〖残韵〗。若场上有梅花牌，则其可以弃置其中的一张，然后其获得技能〖绝响〗。",
	new_canyun: "残韵",
	new_canyun_info: "出牌阶段限一次，你可以弃置至多X张牌并选择等量的其他角色（不能选择已经成为过〖残韵〗目标的角色）。这些角色中，装备区内牌数少于你的回复1点体力，等于你的摸一张牌，多于你的失去1点体力。若你以此法指定的角色数等于X，则你摸一张牌。（X为你的体力值）",
	qingxian_draw: "清弦",
	qingxian_draw_info: "",
	zhenjun: "镇军",
	zhenjun_info: "准备阶段，你可以弃置一名手牌数多于体力值的角色的X张牌（X为其手牌数和体力值之差），然后选择一项：1.你弃置等同于其中非装备牌数量的牌；2.其摸等量的牌。",
	rezhenjun: "镇军",
	rezhenjun_info: "准备阶段，你可以弃置一名角色的X张牌（X为其手牌数和体力值之差且至少为1），然后选择一项：1.你弃置X张牌；2.其摸X张牌。（X为其弃置的牌中非装备牌的数量）",
	fenli: "奋励",
	fenli_info: "若你的手牌数为全场最多，你可以跳过摸牌阶段；若你的体力值为全场最多，你可以跳过出牌阶段；若你的装备区里有牌且数量为全场最多，你可以跳过弃牌阶段。",
	pingkou: "平寇",
	pingkou_info: "回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你本回合跳过的阶段数）。",
	xinanguo: "安国",
	xinanguo_info: "出牌阶段限一次，你可以选择一名其他角色，若其手牌数为全场最少，其摸一张牌；体力值为全场最低，回复1点体力；装备区内牌数为全场最少，随机使用一张装备牌。然后若该角色有未执行的效果且你满足条件，你执行之。",
	pindi: "品第",
	pindi_info: "出牌阶段，你可以弃置一张牌并选择一名其他角色（不能弃置相同类型牌且不能指定相同的角色），然后令其执行一项：摸X张牌；弃置X张牌（X为本回合此技能发动次数）。若其已受伤，你横置。",
	funan_jiexun: "诫训",
	bizhuan: "辟撰",
	bizhuan_bg: "书",
	bizhuan_info: "当你使用黑桃牌后，或你成为其他角色使用黑桃牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”；你至多拥有四张“书”，你每有一张“书” ，手牌上限+1。",
	tongbo: "通博",
	tongbo_info: "摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”交给任意名其他角色。",
	qingxian: "清弦",
	qingxian_info: "当你受到伤害/回复体力后，你可以令伤害来源/一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你摸一张牌。",
	juexiang: "绝响",
	juexiang_info: "当你死亡后，你可以令一名角色随机获得“清弦残谱”其中一个技能，然后直到其下回合开始，其不能被选择为其他角色使用梅花牌的目标。",
	juexiang_ji: "激弦",
	juexiang_ji_info: "当你受到伤害后，你可以令伤害来源失去1点体力，随机使用一张装备。",
	juexiang_lie: "烈弦",
	juexiang_lie_info: "当你回复体力后，你可以令一名其他角色失去1点体力，随机使用一张装备。",
	juexiang_rou: "柔弦",
	juexiang_rou_info: "当你受到伤害后，你可以令伤害来源回复1点体力，弃置一张装备。",
	juexiang_he: "和弦",
	juexiang_he_info: "当你回复体力后，你可以令一名其他角色回复1点体力，弃置一张装备。",
	juexiang_club: "绝响",
	juexiang_club_bg: "响",
	juexiang_club_info: "直到下回合开始，不能被选择为其他角色使用梅花牌的目标。",
	jianzheng: "谏征",
	jianzheng_info: "当一名其他角色使用【杀】指定目标时，若你在其攻击范围内且你不是目标，则你可以将一张手牌置于牌堆顶，取消所有目标，然后若此【杀】不为黑色，你成为目标。",
	zhuandui: "专对",
	zhuandui_info: "当你使用【杀】指定目标/成为【杀】的目标后，你可以与目标角色/此【杀】使用者拼点，若你赢，此杀不能被【闪】响应/对你无效。",
	zhuandui_use_info: "当你使用【杀】指定目标后，你可以与目标角色拼点，若你赢，此杀不能被【闪】响应。",
	zhuandui_respond_info: "当你成为【杀】的目标后，你可以与此【杀】使用者拼点，若你赢，此杀对你无效。",
	tianbian: "天辩",
	tianbian_info: "你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌花色为红桃，则此牌的点数视为K。",
	funan: "复难",
	funan_info: "其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这些牌），然后你获得其使用或打出的牌。",
	jiexun: "诫训",
	jiexun_info: "结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。若有角色因此法弃置了所有牌，则你失去〖诫训〗，然后你发动〖复难〗时，无须令对方获得你使用的牌。",
	xinjiexun: "诫训",
	xinjiexun_info: "结束阶段，你可令一名其他角色摸等同于场上方块牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。若有角色因此法弃置了所有牌，则你将X归零，然后你发动〖复难〗时，无须令对方获得你使用的牌。",
	shouxi: "守玺",
	shouxi_info: "当你成为【杀】的目标后，你可声明一种未以此法声明过的基本牌或锦囊牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【杀】对你无效。",
	huimin: "惠民",
	huimin_info: "结束阶段，你可以摸X张牌并展示等量手牌（X为手牌数小于其体力值的角色数），然后从你指定的一名角色开始这些角色依次选择并获得其中一张。",
	wengua: "问卦",
	wengua2: "问卦",
	wengua_info: "其他角色/你的出牌阶段限一次，其可以交给你一张牌，(若当前回合角色为你，则跳过此步骤)，你可以将此牌/一张牌置于牌堆顶或牌堆底，然后你与其/你从另一端摸一张牌。",
	fuzhu: "伏诛",
	fuzhu_info: "一名男性角色的结束阶段，若牌堆剩余牌数不大于你体力值的十倍，则你可以依次对其使用牌堆中所有的【杀】（不能超过游戏人数），然后洗牌。",
	fumian: "福绵",
	fumian_info: "准备阶段，你可以选择一项：1.摸牌阶段多摸一张牌；2.使用红色牌可以多选择一个目标（限一次）。若与你上回合选择的选项不同，则该选项数值+1并复原此技能。",
	daiyan: "怠宴",
	daiyan_info: "结束阶段，你可以令一名其他角色从牌堆中获得一张红桃基本牌，然后若其于上回合成为过该技能目标，则其失去1点体力。",
	xinzhongjian: "忠鉴",
	xinzhongjian_info: "出牌阶段限一次，你可以展示自己的一张手牌，然后展示一名其他角色的至多三张手牌。其展示的牌中：每有一张花色相同，你摸一张牌；点数相同，你对其造成1点伤害；均不同，你弃置一张手牌。",
	zhongjian: "忠鉴",
	zhongjian_bg: "鉴",
	zhongjian3: "忠鉴",
	zhongjian3_bg: "鉴",
	zhongjian_info: "出牌阶段限一次，你可以展示一张手牌，然后展示一名其他角色的X张手牌（X为其体力值）。若以此法展示的牌与你展示的牌：有颜色相同的，你选择：①摸一张牌。②弃置一名其他角色的一张牌；有点数相同的，本回合此技能改为“出牌阶段限两次”；均不同，你的手牌上限-1。",
	caishi: "才识",
	caishix: "才识/忠鉴",
	caishi_info: "摸牌阶段开始时，你可以选择一项：1.令手牌上限+1；2.回复1点体力，本回合内不能对自己使用牌。",
	xincaishi: "才识",
	xincaishi_info: "摸牌阶段，你可以选择一项：1.少摸一张牌，然后本回合发动〖忠鉴〗时可以多展示自己的一张牌；2.本回合手牌上限-1，然后本回合发动〖忠鉴〗时可以多展示对方的一张牌；3.多摸两张牌，本回合不能发动〖忠鉴〗。",
	guizao: "瑰藻",
	guizao_info: "弃牌阶段结束时，若你于此阶段弃置牌的数量不小于2且它们的花色各不相同，你可以回复1点体力或摸一张牌。",
	jiyu: "讥谀",
	jiyu_info: "出牌阶段限一次，你可以令一名角色弃置一张手牌。若如此做，你不能使用与之相同花色的牌，直到回合结束。若其以此法弃置的牌为黑桃，你翻面并令其失去1点体力。若你有未被〖讥谀〗限制的手牌，则你可以继续发动此技能，但不能选择本回合已经选择过的目标。",
	qinqing: "寝情",
	qinqing_info: "结束阶段，你可以选择任意名攻击范围内含有主公的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃），若如此做，你摸X张牌（X为其中手牌比主公多的角色数）。",
	qinqing_info_doudizhu: "结束阶段，你可以选择任意名攻击范围内含有地主的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃），若如此做，你摸X张牌（X为其中手牌比地主多的角色数）。",
	huisheng: "贿生",
	huisheng_info: "当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此伤害，然后你不能再对其发动〖贿生〗；2.弃置等量的牌。",
	jishe: "极奢",
	jishe2: "极奢",
	jishe_info: "①出牌阶段限20次，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。②结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）。",
	lianhuo: "链祸",
	lianhuo_info: "锁定技，当你受到火焰伤害时，若你的武将牌处于横置状态且此伤害不为连环伤害，则此伤害+1。",
	taoluan: "滔乱",
	taoluan_backup: "滔乱",
	taoluan_info: "你可以将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌），然后你令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点体力且〖滔乱〗无效直到回合结束。",
	xintaoluan: "滔乱",
	xintaoluan_backup: "滔乱",
	xintaoluan_info: "若场上没有濒死的角色，则你可以将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本回合内你以此法使用过的牌），然后你令一名其他角色选择一项：1.交给你X张与你以此法使用的牌类别不同的牌；2.你失去X点体力且滔乱无效直到回合结束（X为你本回合内发动过〖滔乱〗的次数且至多为3）。",
	jiaozhao: "矫诏",
	jiaozhao3: "矫诏",
	jiaozhao3_backup: "矫诏",
	jiaozhao2: "矫诏",
	jiaozhao_info: "出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用（你不能对自己使用此牌）。",
	danxin: "殚心",
	danxin_info: "当你受到伤害后，你可以摸一张牌，或对“矫诏”的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通锦囊牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”。",
	xindanxin: "殚心",
	xindanxin_info: "当你受到伤害后，你可以摸一张牌，并对“矫诏”的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通锦囊牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”。3.将“出牌阶段限一次”改为“出牌阶段限两次”。",
	duliang: "督粮",
	duliang2: "督粮",
	duliang_info: "出牌阶段限一次，你可以获得一名其他角色的一张手牌，然后选择一项：1.令其观看牌堆顶的两张牌，然后获得其中的基本牌；2.令其于下个摸牌阶段额外摸一张牌。",
	fulin: "腹鳞",
	fulin_info: "锁定技，你于回合内得到的牌不计入你本回合的手牌上限。",
	kuangbi: "匡弼",
	kuangbi_info: "出牌阶段限一次，你可以选择一名有牌的其他角色，该角色将其的一至三张牌置于你的武将牌上。若如此做，你的下个准备阶段，你获得武将牌上的所有牌，然后其摸等量的牌。",
	xinzhige: "止戈",
	xinzhige_info: "出牌阶段限一次，你可以令一名攻击范围内含有你的其他角色交给你一张【杀】或武器牌，否则其视为对你指定的另一名其攻击范围内的角色使用了一张【杀】。",
	zhige: "止戈",
	zhige_info: "出牌阶段限一次，若你的手牌数大于你的体力值，你可以选择攻击范围内含有你的一名其他角色，其选择一项：1.使用一张【杀】；2.将装备区里的一张牌交给你。",
	xinzongzuo: "宗祚",
	xinzongzuo_info: "锁定技，游戏的第一个回合开始前，你加X点体力上限并回复X点体力（X为全场势力数）；当一名角色死亡后，若没有与其势力相同的角色，你减1点体力上限并摸两张牌。",
	zongzuo: "宗祚",
	zongzuo_info: "锁定技，游戏的第一个回合开始前，你加X点体力上限并回复X点体力（X为全场势力数）；当一名角色死亡后，若没有与其势力相同的角色，你减1点体力上限。",
	xinjuece: "绝策",
	xinjuece_info: "结束阶段，你可以对一名没有手牌的角色造成1点伤害。",
	xinmieji: "灭计",
	xinmieji_info: "出牌阶段限一次，你可以展示一张黑色锦囊牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张锦囊牌；或依次弃置两张非锦囊牌。",
	xinfencheng: "焚城",
	xinfencheng_info: "限定技。出牌阶段，你可以令所有其他角色各选择一项：弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1)；或受到你对其造成的2点火焰伤害。",
	qianju: "千驹",
	qianju_info: "锁定技，若你已受伤，你计算与其他角色的距离时-X（X为你已损失的体力值）。",
	qingxi: "倾袭",
	qingxi_info: "当你使用【杀】对目标角色造成伤害时，若你的装备区里有武器牌，你可以令其选择一项：1、弃置X张手牌（X为此武器牌的攻击范围），若如此做，其弃置你的此武器牌；2、令伤害值+1。",
	reqianju: "千驹",
	reqianju_info: "锁定技，若你已受伤，你计算与其他角色的距离时-X（X为你已损失的体力值且至少为1）。",
	reqingxi: "倾袭",
	reqingxi_info: "当你使用【杀】或【决斗】指定目标后，你可以令其选择一项：1、弃置X张手牌（X为你攻击范围内的角色数，且当你装备区内有武器牌/没有武器牌时至多为4/2），若如此做，其弃置你的此武器牌；2、令此牌的伤害值+1且你进行判定，若结果为红色，则其不能响应此牌。",
	jieyue: "节钺",
	jieyue_info: "①结束阶段，你可以弃置一张手牌，然后令一名其他角色选择一项：1.将一张牌置于你的武将牌上,称之为“节”；2.令你弃置其一张牌。②若你有“节”，你可以将红色/黑色手牌当作【闪】/【无懈可击】使用或打出。③准备阶段，若你有“节”，则你获得之。",
	xianzhen: "陷阵",
	xianzhen_info: "出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得以下效果直到回合结束：无视与该角色的距离；无视该角色的防具且对其使用【杀】没有次数限制。若你没赢，你不能使用【杀】直到回合结束。",
	xinxianzhen: "陷阵",
	xinxianzhen_info: "出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得以下效果直到回合结束：无视该角色的防具且对其使用牌没有次数和距离限制，且当你使用【杀】或普通锦囊牌指定唯一目标时，可以令该角色也成为此牌的目标。若你没赢，你不能使用【杀】且你的【杀】不计入手牌上限直到回合结束。",
	xinxianzhen2: "陷阵",
	jinjiu: "禁酒",
	jinjiu_info: "锁定技，你的【酒】均视为【杀】。",
	chunlao: "醇醪",
	chunlao2: "醇醪",
	chunlao_info: "结束阶段开始时，若你没有“醇”，你可以将至少一张【杀】置于你的武将牌上，称为“醇”。当一名角色处于濒死状态时，你可以移去一张“醇”，视为该角色使用一张【酒】。",
	lihuo: "疠火",
	lihuo_info: "当你声明使用普通【杀】后，你可以将此【杀】改为火【杀】。若以此法使用的【杀】造成了伤害，则此【杀】结算后你失去1点体力；你使用火【杀】选择目标后，可以额外指定一个目标。",
	shenduan: "慎断",
	shenduan_info: "当你的黑色基本牌因弃置而进入弃牌堆后，你可以将其当做【兵粮寸断】使用（无距离限制）。",
	yonglve: "勇略",
	yonglve_info: "一名其他角色的判定阶段开始时，若其在你攻击范围内，则你可以弃置其判定区里的一张牌，视为对该角色使用一张【杀】。若此【杀】未造成伤害，你摸一张牌。",
	reshenduan: "慎断",
	reshenduan_info: "当你的黑色基本牌或装备牌因弃置而进入弃牌堆后，你可以将其当做【兵粮寸断】使用（无距离限制）。",
	reyonglve: "勇略",
	reyonglve_info: "其他角色的判定阶段开始时，你可以弃置其判定区里的一张牌。然后若该角色在你攻击范围内，你摸一张牌。若其在你攻击范围外，视为你对其使用一张【杀】。",
	benxi: "奔袭",
	benxi_info: "锁定技，你的回合内，你每使用一次牌后，你的进攻距离+1直到回合结束；你的回合内，若你与所有角色的距离均为1，你无视其他角色的防具，且你使用的【杀】可额外指定一个目标。",
	xinbenxi: "奔袭",
	xinbenxi_info: "锁定技，当你于回合内使用牌时，你本回合计算与其他角色的距离-1。你的回合内，若你至场上所有其他角色的距离均不大于1，则当你使用【杀】或普通锦囊牌选择唯一目标后，你选择至多两项：1.为此牌多指定一个目标；2.令此牌无视防具；3.令此牌不可被抵消；4.此牌造成伤害时摸一张牌。",
	sidi: "司敌",
	sidi2: "司敌",
	sidi3: "司敌",
	sidi_info: "①当你使用或其他角色在你的回合内使用【闪】时，你可以将牌堆顶的牌置于你的武将牌上，称为“司敌”牌。②其他角色的出牌阶段开始时，你可以移去一张“司敌”牌，令其本阶段使用【杀】的次数上限-1。",
	xinsidi: "司敌",
	xinsidi2: "司敌",
	xinsidi_info: "其他角色出牌阶段开始时，你可以弃置一张与你装备区里的牌颜色相同的非基本牌，然后该角色于此阶段内不能使用和打出与此牌颜色相同的牌。此阶段结束时，若其此阶段没有使用【杀】，视为你对其使用了【杀】。",
	dangxian: "当先",
	dangxian_info: "锁定技，回合开始时，你执行一个额外的出牌阶段。",
	xindangxian: "当先",
	xindangxian_info: "锁定技，回合开始时，你执行一个额外的出牌阶段。此阶段开始时，你失去1点体力并从牌堆/弃牌堆中获得一张【杀】（若你已发动过〖伏枥〗，则可以不发动此效果）。",
	longyin: "龙吟",
	longyin_info: "当一名角色于其出牌阶段内使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌。",
	zhongyong: "忠勇",
	zhongyong_info: "当你于出牌阶段内使用的【杀】被目标角色使用的【闪】抵消时，你可以将此【闪】交给除该角色外的一名角色。若获得此【闪】的角色不是你，你可以对相同的目标再使用一张【杀】。",
	xinzhongyong: "忠勇",
	xinzhongyong_info: "当你使用的【杀】结算完毕后，你可以将此【杀】或目标角色使用的【闪】交给一名该角色以外的其他角色，以此法得到红色牌的角色可以对你攻击范围内的角色使用一张【杀】。",
	jigong: "急攻",
	jigong_info: "出牌阶段开始时，你可以摸两张牌。若如此做，你本回合的手牌上限改为X（X为你此阶段造成的伤害点数之和）。",
	shifei: "饰非",
	shifei_info: "当你需要使用或打出【闪】时，你可以令当前回合角色摸一张牌。然后若其手牌数不为全场唯一最多，则你弃置全场手牌数最多（或之一）角色的一张牌，视为你使用或打出了一张【闪】。",
	huaiyi: "怀异",
	huaiyi_info: "出牌阶段限一次，你可以展示所有手牌，若这些牌的颜色不全部相同，则你选择一种颜色并弃置该颜色的所有手牌，然后你可以获得至多X名角色的各一张牌（X为你以此法弃置的手牌数）。若你以此法得到的牌不少于两张，则你失去1点体力。",
	yaoming: "邀名",
	yaoming_info: "每回合限一次，当你造成或受到伤害后，你可以选择一项：1. 弃置手牌数大于你的一名角色的一张手牌；2. 令手牌数小于你的一名角色摸一张牌。",
	xinyaoming: "邀名",
	xinyaoming_info: "每回合每个选项限一次，当你造成或受到伤害后，你可以选择一项：1. 弃置一名其他角色的一张手牌；2. 令一名其他角色摸一张牌；3.令一名角色弃置至多两张牌，然后摸等量的牌。",
	anguo: "安国",
	anguo_info: "出牌阶段限一次，你可以选择一名其他角色装备区里的一张牌，令其获得此牌。然后若该角色攻击范围内的角色数因此减少，则你摸一张牌。",
	yanzhu: "宴诛",
	yanzhu_info: "出牌阶段限一次，你可以令一名有牌的其他角色选择一项：令你获得其装备区里所有的牌，然后你失去技能〖宴诛〗；或弃置一张牌。",
	xingxue: "兴学",
	xingxue_info: "结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶（X为你的体力值，若你已失去技能〖宴诛〗，则将X改为你的体力上限）。",
	zhaofu: "诏缚",
	zhaofu_info: "主公技，锁定技，你距离为1的角色视为在其他吴势力角色的攻击范围内。",
	reyanzhu: "宴诛",
	reyanzhu2: "宴诛",
	reyanzhu_info: "出牌阶段限一次，你可以令一名其他角色选择一项：将装备区里的所有牌交给你并令你修改〖宴诛〗和〖兴学〗，或弃置一张牌并令下一次受到的伤害+1直到其下回合开始。",
	reyanzhu_rewrite: "宴诛·改",
	reyanzhu_rewrite_info: "出牌阶段限一次，你可以选择一名其他角色。该角色下一次受到的伤害+1直到其下回合开始。",
	rexingxue: "兴学",
	rexingxue_info: "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力值）。",
	rexingxue_rewrite: "兴学·改",
	rexingxue_rewrite_info: "结束阶段开始时，你可以令至多X名角色各摸一张牌。然后若有手牌数大于体力值的目标角色，则这些角色各将一张牌置于牌堆顶。（X为你的体力上限）。",
	rezhaofu: "诏缚",
	rezhaofu_info: "主公技，锁定技，你攻击范围内的角色视为在其他吴势力角色的攻击范围内。",
	wurong: "怃戎",
	wurong_info: "出牌阶段限一次，你可以令一名其他角色与你同时展示一张手牌：若你展示的是【杀】且该角色展示的不是【闪】，则你弃置此【杀】并对其造成1点伤害；若你展示的不是【杀】且该角色展示的是【闪】，则你弃置你展示的牌并获得其一张牌。",
	shizhi: "矢志",
	shizhi_info: "锁定技，当你的体力值为1时，你的【闪】均视为【杀】。",
	zhanjue: "战绝",
	zhanjue_info: "出牌阶段，你可以将所有手牌当作【决斗】使用。此【决斗】结算后，你与以此法受到伤害的角色各摸一张牌。若你在同一阶段内以此法摸了两张或更多的牌，则此技能失效直到回合结束。",
	qinwang: "勤王",
	qinwang1: "勤王",
	qinwang2: "勤王",
	qinwang_info: "主公技，当你需要使用或打出一张【杀】时，你可以弃置一张牌，然后视为你发动了〖激将①〗。若有角色响应，则该角色打出【杀】时摸一张牌。",
	huomo: "活墨",
	huomo_info: "当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，视为使用此基本牌。",
	zuoding: "佐定",
	zuoding_info: "当其他角色于其回合内使用♠牌指定目标后，若本回合内没有角色受到过伤害，则你可以令其中一名目标角色摸一张牌。",
	taoxi: "讨袭",
	taoxi2: "讨袭",
	taoxi3: "讨袭",
	taoxi_info: "出牌阶段限一次。当你使用牌指定一名其他角色为唯一目标后，你可以亮出其一张手牌直到回合结束，并且你于此回合内可以将此牌如手牌般使用。回合结束时，若此牌仍在该角色手牌区里，你失去1点体力。",
	huituo: "恢拓",
	huituo_info: "当你受到伤害后，你可以令一名角色进行一次判定，若结果为红色，该角色回复1点体力；若结果为黑色，该角色摸X张牌（X为此次伤害的伤害点数）。",
	mingjian: "明鉴",
	mingjian2: "明鉴",
	mingjian_info: "出牌阶段限一次。你可以将所有手牌交给一名其他角色，然后该角色于其下个回合的手牌上限+1，且使用【杀】的次数上限+1。",
	xingshuai: "兴衰",
	xingshuai_info: "主公技，限定技，当你进入濒死状态时，其他魏势力角色可依次令你回复1点体力，然后这些角色依次受到1点伤害。",
	reduodao: "夺刀",
	reduodao_info: "当你成为【杀】的目标后，你可以弃置一张牌。然后你获得此【杀】使用者装备区里的武器牌。",
	reanjian: "暗箭",
	reanjian_info: "锁定技，当你使用【杀】指定目标后，若你不在其攻击范围内，则此杀伤害+1且无视其防具。若其因执行此【杀】的效果受到伤害而进入濒死状态，则其不能使用【桃】直到此濒死事件结算结束。",
	duodao: "夺刀",
	duodao_info: "当你受到【杀】造成的伤害后，你可以弃置一张牌，然后获得伤害来源装备区里的武器牌。",
	anjian: "暗箭",
	anjian_info: "锁定技，当你使用【杀】对目标角色造成伤害时，若你不在其攻击范围内，则此杀伤害+1。",
	xinpojun: "破军",
	xinpojun2: "破军",
	xinpojun_info: "当你于出牌阶段内使用【杀】指定一个目标后，你可以将其至多X张牌扣置于该角色的武将牌旁（X为其体力值）。若如此做，当前回合结束后，该角色获得其武将牌旁的所有牌。",

	qiaoshi: "樵拾",
	qiaoshi_info: "其他角色的结束阶段开始时，若你的手牌数与其相等，则你可以与其各摸一张牌。",
	yanyu: "燕语",
	yanyu2: "燕语",
	yanyu_info: "出牌阶段，你可以重铸【杀】。出牌阶段结束时，若你于此阶段以此法重铸了至少两张【杀】，则你可以令一名男性角色摸两张牌。",

	zzhenggong: "争功",
	zzhenggong_info: "当你受到伤害后，你可以获得伤害来源装备区里的一张牌并置入你的装备区。",
	zquanji: "权计",
	zquanji_info: "其他角色的回合开始时，你可以与该角色拼点。若你赢，该角色跳过准备阶段和判定阶段。",
	zbaijiang: "拜将",
	zbaijiang_info: "觉醒技。准备阶段，若你装备区里的牌数不少于两张，你加1点体力上限，失去〖权计〗和〖争功〗，获得〖野心〗和〖自立〗。",
	zyexin: "野心",
	zyexin2: "野心",
	zyexin_info: "①当你造成或受到伤害后，你可以将牌堆顶的一张牌置于你的武将牌上，称为“权”。②出牌阶段限一次。你可以用任意数量的手牌与等量的“权”交换。",
	zzili: "自立",
	zzili_info: "觉醒技。准备阶段，若你的“权”数不小于4，你减1点体力上限并获得〖排异〗。",
	zpaiyi: "排异",
	zpaiyi_info: "结束阶段，你可以选择一张“权”，若此牌为：装备牌，你将此牌置入一名角色的装备区；延时类锦囊牌，你将此牌置入一名角色的判定区；基本牌或普通锦囊牌，你将此牌交给一名角色。然后若此牌的目标区域对应的角色不为你，你可以摸一张牌。",
	shibei: "矢北",
	shibei_info: "锁定技，当你受到伤害后：若此伤害是你本回合第一次受到的伤害，则你回复1点体力；否则你失去1点体力。",
	jianying: "渐营",
	jianying_info: "当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。",
	xinenyuan: "恩怨",
	xinenyuan1: "恩怨",
	xinenyuan2: "恩怨",
	xinenyuan_info: "当你获得一名其他角色两张或更多的牌后，你可以令其摸一张牌；当你受到1点伤害后，你可以令伤害来源选择一项：1、将一张手牌交给你；2、失去1点体力。",
	xinxuanhuo: "眩惑",
	xinxuanhuo_info: "摸牌阶段开始时，你可以改为令一名其他角色摸两张牌，然后该角色需对其攻击范围内你选择的另一名角色使用一张【杀】，否则你获得其两张牌。",
	fuhun: "父魂",
	fuhun2: "父魂",
	fuhun_info: "你可以将两张手牌当做【杀】使用或打出；当你于出牌阶段以此法使用的【杀】造成伤害后，你获得〖武圣〗和〖咆哮〗直到回合结束。",
	yuce: "御策",
	yuce_info: "当你受到伤害后，你可以展示一张手牌，并令伤害来源选择一项：弃置一张与此牌类型不同的手牌，或令你回复1点体力。",
	xiansi: "陷嗣",
	xiansix: "陷嗣",
	xiansi_bg: "逆",
	xiansi2: "陷嗣",
	xiansi_info: "准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”；当一名角色需要对你使用【杀】时，其可以移去两张“逆”，然后视为对你使用了一张【杀】。",
	chanhui: "谮毁",
	chanhui_info: "出牌阶段限一次，当你使用【杀】或黑色普通锦囊牌指定唯一目标时，你可令可以成为此牌目标的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标。",
	rechanhui: "谮毁",
	rechanhui_info: "当你使用【杀】或普通锦囊牌指定唯一目标时，你可令可以成为此牌目标（无距离限制）的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者；或成为此牌的额外目标且你本回合内不能再次发动〖谮毁〗。",
	jiaojin: "骄矜",
	jiaojin_info: "当你受到男性角色造成的伤害时，你可以弃置一张装备牌，令此伤害-1。",
	rejiaojin: "骄矜",
	rejiaojin_info: "当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以弃置一张装备牌，令此牌对你无效并获得此牌对应的所有实体牌。若此牌的使用者为女性角色，则你令〖骄矜〗失效直到回合结束。",
	shenxing: "慎行",
	shenxing_info: "出牌阶段，你可以弃置两张牌，然后摸一张牌。",
	bingyi: "秉壹",
	bingyi_info: "结束阶段开始时，你可以展示所有手牌，若这些牌颜色均相同，则你令至多X名角色各摸一张牌(X为你的手牌数)。",
	qiangzhi: "强识",
	qiangzhi_draw: "强识",
	qiangzhi_info: "出牌阶段开始时，你可以展示一名其他角色的一张手牌。若如此做，当你于此阶段内使用与此牌类别相同的牌时，你可以摸一张牌。",
	xiantu: "献图",
	xiantu1: "献图",
	xiantu2: "献图",
	xiantu3: "献图",
	xiantu_info: "一名其他角色的出牌阶段开始时，你可以摸两张牌，然后交给其两张牌。若如此做，此阶段结束时，若该角色未于此阶段内杀死过角色，则你失去1点体力。",
	dingpin: "定品",
	dingpin_info: "出牌阶段，你可以弃置一张手牌，然后令一名已受伤的角色判定，若结果为黑色，该角色摸X张牌(X为该角色已损失的体力值)，然后你本回合不能再对其发动〖定品〗；若结果为红色，你翻面（你不能弃置本回合已弃置或使用过的类型的牌）。",
	faen: "法恩",
	faen_info: "当一名角色翻至正面或横置后，你可以令其摸一张牌。",
	jyzongshi: "纵适",
	jyzongshi_info: "当你拼点赢时，你可以获得对方此次拼点的牌；当你拼点没赢时，你可以收回你此次拼点的牌。",
	qiaoshui: "巧说",
	qiaoshui3: "巧说",
	qiaoshui_info: "出牌阶段开始时，你可与一名其他角色拼点。若你赢，你使用的下一张基本牌或普通锦囊牌可以额外指定任意一名其他角色为目标或减少指定一个目标；若你没赢，你不能使用锦囊牌直到回合结束。",
	reqiaoshui: "巧说",
	reqiaoshui_info: "出牌阶段，你可与一名其他角色拼点。若你赢，你使用的下一张基本牌或普通锦囊牌可以额外指定任意一名其他角色为目标或减少指定一个目标；若你没赢，你结束出牌阶段且本回合内锦囊牌不计入手牌上限。",
	junxing: "峻刑",
	junxing_info: "出牌阶段限一次，你可以弃置至少一张手牌并选择一名其他角色，该角色需弃置一张与你弃置的牌类别均不同的手牌，否则其先将其武将牌翻面再摸X张牌（X为你以此法弃置的手牌数量）。",
	xinjunxing: "峻刑",
	xinjunxing_info: "出牌阶段限一次，你可以弃置至少一张手牌并选择一名其他角色，该角色需弃置一张与你弃置的牌类别均不同的手牌，否则其先将其武将牌翻面，然后将手牌摸至四张。",

	xswuyan: "无言",
	xinwuyan: "无言",
	jujian: "举荐",
	xinjujian: "举荐",
	luoying: "落英",
	luoying_discard: "落英",
	luoying_judge: "落英",
	luoying_judge_noconf: "落英·判定",
	jiushi: "酒诗",
	jiushi1: "酒诗",
	jiushi2: "酒诗",
	jiushi3: "酒诗",
	jueqing: "绝情",
	shangshi: "伤逝",
	xuanfeng: "旋风",
	zhiyu: "智愚",
	qice: "奇策",
	qice_backup: "奇策",
	jiangchi: "将驰",
	jiangchi_less: "少摸一张",
	jiangchi_more: "多摸一张",
	zishou: "自守",
	zongshi: "宗室",
	danshou: "胆守",
	olddanshou: "胆守",
	xindanshou: "胆守",
	yizhong: "毅重",
	xinzhan: "心战",
	xinzhan_gain: "获得",
	xinzhan_place: "牌堆顶",
	huilei: "挥泪",
	enyuan: "恩怨",
	enyuan1: "恩怨",
	enyuan2: "恩怨",
	xuanhuo: "眩惑",
	ganlu: "甘露",
	buyi: "补益",
	mingce: "明策",
	zhichi: "智迟",
	zhichi2: "智迟",
	pojun: "破军",
	jingce: "精策",
	xinjingce: "精策",
	chengxiang: "称象",
	oldchengxiang: "称象",
	renxin: "仁心",
	oldrenxin: "仁心",
	zhenlie: "贞烈",
	miji: "秘计",
	miji_tag: "已分配",
	zhiyan: "直言",
	zongxuan: "纵玄",
	anxu: "安恤",
	old_anxu: "安恤",
	zhuiyi: "追忆",
	gongji: "弓骑",
	qiuyuan: "求援",
	oldqiuyuan: "求援",
	zhuikong: "惴恐",
	oldzhuikong: "惴恐",
	qieting: "窃听",
	xianzhou: "献州",
	quanji: "权计",
	zili: "自立",
	paiyi: "排异",
	paiyi_backup: "排异",
	sanyao: "散谣",
	olsanyao: "散谣",
	olsanyao_backup: "散谣",
	zhiman: "制蛮",
	resanyao: "散谣",
	rezhiman: "制蛮",
	qianxi: "潜袭",
	qianxi2: "潜袭",
	qianxi2_bg: "袭",
	fuli: "伏枥",
	xinfuli: "伏枥",
	jiefan: "解烦",
	juece: "绝策",
	mieji: "灭计",
	fencheng: "焚城",
	youdi: "诱敌",
	youdi_info: "结束阶段开始时，你可以令一名其他角色弃置你的一张牌，若此牌不为【杀】，你获得该角色的一张牌。",
	fencheng_info: "限定技。出牌阶段，你可令所有其他角色依次选择一项：弃置X张牌；或受到1点火焰伤害。(X为该角色装备区里牌的数量且至少为1)",
	mieji_info: "当你使用黑色普通锦囊牌选择目标后，若目标数为1，则你可以额外指定一个目标。",
	juece_info: "当其他角色在你回合内失去最后的手牌后，你可以对其造成1点伤害。",
	jiefan_info: "限定技，出牌阶段，你可以选择一名角色，令攻击范围内含有该角色的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。",
	fuli_info: "限定技，当你处于濒死状态时，你可以将体力回复至与场上势力数相同，然后翻面。",
	xinfuli_info: "限定技，当你处于濒死状态时，可以将体力回复至X点并将手牌摸至X张（X为场上势力数）。若X大于2，你翻面。",
	qianxi_info: "准备阶段，你可以摸一张牌，并弃置一张牌，然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌直到回合结束。",
	zhiman_info: "当你对一名其他角色造成伤害时，你可以防止此伤害，然后获得其装备区或判定区的一张牌。",
	sanyao_info: "出牌阶段限一次，你可以弃置一张牌并指定一名体力值最多(或之一)的角色，你对其造成1点伤害。",
	olsanyao_info: "出牌阶段每项各限一次，你可以弃置一张牌并指定一名体力值或手牌数最多(或之一)的角色，并对其造成1点伤害。",
	rezhiman_info: "当你对一名其他角色造成伤害时，你可以防止此伤害，然后获得其区域内的一张牌。",
	resanyao_info: "出牌阶段限一次，你可以弃置任意张牌并指定等量除你外体力值最多(或之一)的其他角色。你对这些角色依次造成1点伤害。",
	paiyi_info: "出牌阶段限一次，你可以移去一张“权”并选择一名角色，令其摸两张牌，然后若其手牌数大于你，你对其造成1点伤害。",
	zili_info: "觉醒技，准备阶段开始时，若“权”的数量不小于3，你减1点体力上限，然后选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“排异”。",
	quanji_info: "当你受到1点伤害后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。",
	xianzhou_info: "限定技。出牌阶段，你可以将装备区内的所有牌交给一名其他角色，然后该角色选择一项：令你回复X点体力；或对其攻击范围内的X名角色各造成1点伤害(X为你以此法交给该角色的牌的数量)。",
	qieting_info: "其他角色的回合结束时，若其未于此回合内使用过指定其他角色为目标的牌，你可以选择一项：将其装备区里的一张牌移动至你装备区里的相应位置；或摸一张牌。",
	zhuikong_info: "其他角色的准备阶段，若你已受伤，你可以与该角色拼点。若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标。若你没赢，其本回合至你的距离视为1。",
	oldzhuikong_info: "其他角色的准备阶段，若你已受伤，你可以与该角色拼点。若你赢，该角色跳过本回合的出牌阶段。若你没赢，其本回合至你的距离视为1。",
	qiuyuan_info: "当你成为【杀】的目标时，你可以令一名其他角色选择一项：①、交给你一张【闪】；②、成为此【杀】的额外目标。",
	oldqiuyuan_info: "当你成为【杀】的目标时，你可以令一名有手牌的其他角色正面朝上交给你一张牌。若此牌不为【闪】，则该角色也成为此【杀】的额外目标。",
	gongji_info: "出牌阶段限一次，你可以弃置一张牌，然后你的攻击范围视为无限直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。",
	zhuiyi_info: "当你死亡时，你可以令一名其他角色（杀死你的角色除外）摸三张牌，然后其回复1点体力。",
	anxu_info: "出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌多的角色将一张手牌交给手牌少的角色，然后若这两名角色手牌数相等，你摸一张牌或回复1点体力。",
	old_anxu_info: "出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为黑桃，则你摸一张牌。",
	zongxuan_info: "当你的牌因弃置而进入弃牌堆后，你可以将其按任意顺序置于牌堆顶。",
	zhiyan_info: "结束阶段，你可以令一名角色摸一张牌并展示之，若为装备牌，其使用此牌并回复1点体力。",
	miji_info: "结束阶段，若你已受伤，则可以摸X张牌，然后可以将等量的牌交给其他角色（X为你已损失的体力值）。",
	zhenlie_info: "当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以失去1点体力并令此牌对你无效，然后弃置对方一张牌。",
	chengxiang_info: "当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌。",
	oldchengxiang_info: "当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于12的牌。",
	renxin_info: "当体力值为1的一名其他角色受到伤害时，你可以将武将牌翻面并弃置一张装备牌，然后防止此伤害。",
	oldrenxin_info: "其他角色进入濒死状态时，你可以将所有手牌交给该角色并翻面，然后该角色回复1点体力。",
	jingce_info: "出牌阶段结束时，若你本回合使用的牌数量大于或等于你的当前体力值，你可以摸两张牌。",
	xinjingce_info: "结束阶段，若你本回合使用的牌数量大于或等于你的当前体力值，你可以摸两张牌。",
	xswuyan_info: "锁定技，你使用的普通锦囊牌对其他角色无效；其他角色使用的普通锦囊牌对你无效。",
	xinwuyan_info: "锁定技，当你使用锦囊牌造成伤害时，你防止此伤害；锁定技，当你受到锦囊牌对你造成的伤害时，你防止此伤害。",
	jujian_info: "出牌阶段限一次，你可以弃至多三张牌，然后令一名其他角色摸等量的牌。若你以此法弃牌不少于三张且均为同一类别，你回复1点体力。",
	xinjujian_info: "结束阶段开始时，你可以弃置一张非基本牌并选择一名其他角色，令其选择一项：1.摸两张牌；2.回复1点体力；3.将其武将牌翻转至正面朝上并重置之。",
	luoying_info: "当其他角色的梅花牌因弃置或判定而进入弃牌堆后，你可以获得之。",
	jiushi_info: "当你需要使用一张【酒】时，若你的武将牌正面朝上，则你可以将武将牌翻面并视为使用了一张【酒】；当你受到伤害时，若你的武将牌背面朝上，则你可在此伤害结算后将武将牌翻回正面。",
	jueqing_info: "锁定技，你即将造成的伤害均视为失去体力。",
	shangshi_info: "当你的手牌数小于X时，你可以将手牌摸至X张（X为你已损失的体力值）。",
	xuanfeng_info: "当你失去装备区内的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
	zhiyu_info: "当你受到伤害后，你可以摸一张牌，然后展示所有手牌。若颜色均相同，你令伤害来源弃置一张手牌。",
	qice_info: "出牌阶段限一次，你可以将所有的手牌（至少一张）当做任意一张普通锦囊牌使用。",
	jiangchi_info: "摸牌阶段摸牌时，你可以选择一项：1、额外摸一张牌，若如此做，你不能使用或打出【杀】直到回合结束。 2、少摸一张牌，若如此做，你使用【杀】无距离限制且可以多使用一张【杀】直到回合结束。",
	zishou_info: "摸牌阶段，你可以额外摸X张牌（X为场上势力数）。然后你于本回合的出牌阶段内使用的牌不能指定其他角色为目标。",
	zongshi_info: "锁定技，你的手牌上限+X（X为场上现存势力数）。",
	danshou_info: "出牌阶段，你可以选择你攻击范围内的一名其他角色，然后弃置X张牌（X为此前你于此阶段你发动“胆守”的次数+1）。若X：为1，你弃置该角色的一张牌；为2，令该角色交给你一张牌；为3，你对该角色造成1点伤害；不小于4，你与该角色各摸两张牌。",
	olddanshou_info: "当你造成伤害后，你可以摸一张牌。若如此做，终止一切结算，当前回合结束。",
	xindanshou_info: "①每回合限一次，当你成为基本牌或锦囊牌的目标后，你可以摸X张牌（X为你本回合内成为过基本牌或锦囊牌的目标的次数）。②一名其他角色的结束阶段，若你本回合内没有发动过〖胆守①〗，则你可以弃置X张牌并对其造成1点伤害（X为其手牌数，无牌则不弃）。",
	yizhong_info: "锁定技，当你的防具栏为空时，黑色的【杀】对你无效。",
	xinzhan_info: "出牌阶段限一次，若你的手牌数大于你的体力上限，你可以观看牌堆顶的三张牌，然后展示其中任意红桃牌并获得之。",
	huilei_info: "锁定技，当你死亡时，杀死你的角色弃置所有的牌。",
	enyuan_info: "锁定技。①当其他角色令你回复1点体力后，该角色摸一张牌。②当其他角色对你造成伤害后，其须交给你一张♥手牌，否则失去1点体力。",
	xuanhuo_info: "出牌阶段限一次，你可以将一张红桃手牌交给一名其他角色，获得该角色的一张牌，然后交给除该角色外的一名其他角色。",
	ganlu_info: "出牌阶段限一次，你可以选择两名装备区内装备数之差不大于X的角色，令其交换装备区内的牌（X为你已损失的体力值）。",
	buyi_info: "当有角色进入濒死状态时，你可以展示该角色的一张手牌：若此牌不为基本牌，则该角色弃置此牌并回复1点体力。",
	mingce_info: "出牌阶段，你可以交给一名其他角色一张装备牌或【杀】，然后令该角色选择一项：1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】。2. 摸一张牌。每回合限一次。",
	zhichi_info: "锁定技，当你于回合外受到伤害后，所有【杀】或普通锦囊牌对你无效直到回合结束。",
	zhichi2_info: "智迟已发动",
	pojun_info: "当你使用【杀】造成伤害后，你可以令受伤角色摸X张牌，然后其翻面（X为该角色的体力值且至多为5）。",
	shiyong: "恃勇",
	shiyong_info: "锁定技，当你受到一次红色【杀】或【酒】【杀】造成的伤害后，须减1点体力上限。",
	old_guanzhang: "旧关兴张苞",
	old_guanzhang_prefix: "旧",
	wangyi: "王异",
	oldqianxi: "潜袭",
	oldqianxi_info: "当你使用【杀】对距离为1的目标角色造成伤害时，你可以进行一次判定，若判定结果不为红桃，你防止此伤害，令其减1点体力上限。",
	oldzhenlie: "贞烈",
	oldzhenlie_info: "在你的判定牌生效前，你可以亮出牌堆顶的一张牌代替之。",
	oldmiji: "秘计",
	oldmiji_info: "准备/结束阶段开始时，若你已受伤，你可以判定，若判定结果为黑色，你观看牌堆顶的X张牌（X为你已损失的体力值），然后将这些牌交给一名角色。",
	old_fuhun: "父魂",
	old_fuhun_info: "摸牌阶段开始时，你可以放弃摸牌，改为从牌堆顶亮出两张牌并获得之，若亮出的牌颜色不同，你获得〖武圣〗和〖咆哮〗直到回合结束。",
	rejueqing: "绝情",
	rejueqing_info: "当你对其他角色造成伤害时，你可以令此伤害值+X。若如此做，你失去X点体力并修改〖绝情〗（X为伤害值）。",
	rejueqing_1st: "绝情",
	rejueqing_rewrite: "绝情·改",
	rejueqing_rewrite_info: "锁定技，你即将造成的伤害均视为失去体力。",
	reshangshi: "伤逝",
	reshangshi_2nd: "伤逝",
	reshangshi_info: "当你受到伤害时，你可以弃置一张牌。当你的手牌数小于X时，你可以将手牌摸至X张。（X为你已损失的体力值）",
	rejingce: "精策",
	rejingce2: "精策",
	rejingce_add: "精策",
	rejingce_info: "当你于一回合内首次使用某种花色的手牌时，你的手牌上限+1。出牌阶段结束时，你可以摸X张牌（X为你本阶段内使用过的牌的类型数）。",
	xinkuangbi: "匡弼",
	xinkuangbi_info: "出牌阶段限一次。你可以令一名其他角色交给你至多三张牌（不计入你本回合的手牌上限）。然后其于其的下回合开始时摸等量的牌。",
	xinzhaofu: "诏缚",
	xinzhaofu_info: "主公技，限定技。出牌阶段，你可选择至多两名其他角色。这两名角色视为在所有其他吴势力角色的攻击范围内。",
	olbingyi: "秉壹",
	olbingyi_info: "每阶段限一次。当你因弃置而失去牌后，你可以展示所有手牌。若这些牌的颜色均相同，则你可以与至多X名其他角色各摸一张牌（X为你的手牌数）。",
	lukai: "陆凯",
	lukai_spade: "♠",
	lukai_spade_bg: "♠️",
	lukai_heart: "♥",
	lukai_heart_bg: "♥️",
	lukai_club: "♣",
	lukai_club_bg: "♣",
	lukai_diamond: "♦",
	lukai_diamond_bg: "♦️️",
	lkbushi: "卜筮",
	lkbushi_info: "①你使用♠牌无次数限制。②当你使用或打出♥牌后，你摸一张牌。③当你成为♣牌的目标后，你可以弃置一张牌，令此牌对你无效。④结束阶段开始时，你从牌堆或弃牌堆获得一张♦牌。⑤准备阶段开始时，你可调整此技能中四种花色的对应顺序。",
	lkzhongzhuang: "忠壮",
	lkzhongzhuang_info: "锁定技。①当你因执行【杀】的效果而造成伤害时，若你的攻击范围大于3，则此伤害+1。②当一名角色受到你因执行【杀】的效果而造成的伤害时，若你的攻击范围小于3，则此伤害改为1。",
	kebineng: "轲比能",
	kousheng: "寇旌",
	kousheng_info: "①出牌阶段开始时，你可以选择任意张手牌，这些牌称为“寇旌”直到回合结束。②你的“寇旌”均视为【杀】且无次数限制。③当你因执行对应实体牌包含“寇旌”的【杀】的效果而造成伤害后，你展示所有“寇旌”牌，然后目标角色可以用所有手牌交换这些牌。",
	zhugeshang: "诸葛尚",
	sangu: "三顾",
	sangu_info: "结束阶段，你可以选择至多三个{【杀】或不为notarget或singleCard的普通锦囊牌}中的牌名，然后令一名其他角色记录这些牌名。该角色的下个出牌阶段开始时，其的手牌于其需要使用牌时均视为其记录中的第一张牌直到此阶段结束，且当其使用或打出有对应实体牌的牌时，移除这些牌中的第一张牌。若你以此法选择过的牌名均为你本回合内使用过的牌名，则防止你因其以此法使用牌造成的伤害。",
	yizu: "轶祖",
	yizu_info: "锁定技。每回合限一次，当你成为【杀】或【决斗】的目标后，若你的体力值不大于使用者的体力值，则你回复1点体力。",
	liwan: "李婉",
	liandui: "联对",
	liandui_info: "①当你使用牌时，若本局游戏内上一张被使用的牌的使用者不为你，你可以令其摸两张牌。②其他角色使用牌时，若本局游戏内上一张被使用的牌的使用者为你，其可以令你摸两张牌。",
	biejun: "别君",
	biejun_info: "①其他角色的出牌阶段限一次。其可以将一张手牌交给你。②每回合限一次。当你受到伤害时，若你手牌中没有本回合因〖别君①〗得到的牌，你可以翻面并防止此伤害。",
	yj_sufei: "苏飞",
	shuojian: "数谏",
	shuojian_info: "出牌阶段限三次。你可以交给一名其他角色一张牌，其选择一项：1.令你摸X张牌并弃置X-1张牌；2.视为使用X张【过河拆桥】，然后此技能本回合失效（X为此技能本阶段剩余发动次数+1）。",
	yj_qiaozhou: "谯周",
	shiming: "识命",
	shiming_info: "每轮限一次。一名角色的摸牌阶段，你可以观看牌堆顶的三张牌，并可以将其中一张置于牌堆底。然后该角色可以改为对自己造成1点伤害，然后从牌堆底摸三张牌。",
	jiangxi: "将息",
	jiangxi_info: "一名角色的回合结束时，若一号位于此回合内进入过濒死状态或未受到过伤害，你可以重置〖识命〗并摸一张牌；若所有角色均未受到过伤害，你可以与当前回合角色各摸一张牌。",
	hanlong: "韩龙",
	duwang: "独往",
	duwang_info: "锁定技。①游戏开始时，你从牌堆顶将五张不为【杀】的牌置于武将牌上，称为“刺”。②若你有牌名不为【杀】“刺”，你至其他角色或其他角色至你的距离+1。",
	cibei: "刺北",
	cibei_info: "①当一名角色使用【杀】造成伤害且此牌对应的实体牌进入弃牌堆后，你可以将一张不为【杀】的“刺”置入弃牌堆，并将这些牌置入“刺”，然后弃置一名角色区域里的一张牌。②一名角色的回合结束时，若你的“刺”均为【杀】，你获得所有“刺”，且这些牌不能被弃置，不计入手牌上限，且当你使用对应实体牌包含这些牌的牌时无次数和距离限制。",
	wuanguo: "武安国",
	diezhang: "叠嶂",
	diezhang_info: "转换技。①出牌阶段，你使用杀的次数上限+1。②阴：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用X张【杀】；阳：当其他角色使用牌被你抵消后，你可以摸X张牌，视为对其使用一张【杀】（X为1）。",
	duanwan: "断腕",
	duanwan_info: "限定技。当你处于濒死状态时，你可以将体力回复至2点，然后删除〖叠嶂①〗和当前转换技状态的〖叠嶂②〗分支，并将〖叠嶂〗修改为“每回合限一次”且将X修改为2。",
	dcduliang: "督粮",
	dcduliang2: "督粮",
	dcduliang_info: "出牌阶段限一次。你可以获得一名其他角色的一张牌，然后选择一项：1.你观看牌堆顶的两张牌，然后令其获得其中的一或两张基本牌；2.令其于下回合的摸牌阶段额外摸一张牌。",
	sunli: "孙礼",
	kangli: "伉厉",
	kangli_info: "当你造成或受到伤害后，你摸两张牌。然后你下次造成伤害时弃置这些牌。",
	xiahoumao: "夏侯楙",
	tongwei: "统围",
	tongwei_info: "出牌阶段限一次。你可以重铸两张牌并指定一名其他角色，当其使用的下一张牌结算结束后，若此牌点数在你上次以此法重铸的牌的点数之间，你视为对其使用一张【杀】或【过河拆桥】。",
	cuguo: "蹙国",
	cuguo_info: "锁定技。当你于一回合使用牌首次被抵消后，你弃置一张牌，视为对此牌的目标角色使用一张该被抵消的牌。此牌结算结束后，若此牌被抵消，你失去1点体力。",
	chenshi: "陈式",
	qingbei: "擎北",
	qingbei_info: "一轮游戏开始时，你可以选择任意种花色，你不能于本轮内使用这些花色的牌。然后当你于本轮使用一张有花色的牌结算结束后，你摸等同于你上一次〖擎北〗选择过的花色数的牌。",
	feiyao: "费曜",
	zhenfeng: "镇锋",
	zhenfeng_info: "每回合限一次。当其他角色于其回合内使用牌时，若其手牌数不大于其体力值，你可以猜测其手牌中与此牌类别相同的牌数。若你猜对，你摸X张牌并视为对其使用一张【杀】（X为你连续猜对的次数且至多为5）；若你猜错且差值大于1，其视为对你使用一张【杀】。",
	linghuyu: "令狐愚",
	yj_simafu: "司马孚",
	yj_xuangongzhu: "宣公主",
	xukun: "徐琨",
	xvzhi: "蓄志",
	xvzhi_info: "出牌阶段限一次，你可令两名角色各选择任意张手牌并交换这些牌，然后获得牌数较少的角色视为使用无视距离的【杀】；若获得牌数相等，你摸两张牌且可以对此阶段未以此法选择过的角色再发动一次〖蓄志〗。",
	beiyu: "备预",
	beiyu_info: "出牌阶段限一次，你可将手牌摸至体力上限，然后你将一种花色的所有手牌置于牌堆底。",
	duchi: "督持",
	duchi_info: "每回合限一次，当你成为其他角色使用牌的目标后，你可从牌堆底摸一张牌并展示所有手牌，若颜色均相同，则此牌对你无效。",
	yjqimei: "齐眉",
	yjqimei_info: "出牌阶段限一次，你可以选择一名其他角色，你与其各摸两张牌并弃置两张牌，然后你根据你与其弃置牌的花色总数执行以下效果：1、你依次使用这些弃置的牌中可以使用的牌；2、你与其复原武将牌；3、你与其横置武将牌；4、你与其各摸一张牌，然后你修改〖齐眉〗为“出牌阶段限两次”直到回合结束。",
	yjzhuiji: "追姬",
	yjzhuiji_info: "当你死亡时，你可以令一名角色从牌堆和弃牌堆中的随机使用任意装备牌直至其没有空置的装备栏。若如此做，当其失去以此法使用的装备牌后，其废除对应的装备栏。",
	fazhu: "筏铸",
	fazhu_info: "准备阶段，你可以重铸你的区域内任意张非伤害牌，然后将以此法获得的牌交给至多等量名角色各一张，这些角色可以依次使用一张无距离限制的【杀】。",
};

export default translates;
