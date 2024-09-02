const translates = {
	diy_liufu: "刘馥",
	diy_xizhenxihong: "习珍习宏",
	diy_liuzan: "留赞",
	diy_zaozhirenjun: "枣祗任峻",
	diy_yangyi: "杨仪",
	diy_tianyu: "田豫",

	// diy_caocao:'曹操',
	diy_menghuo: "孟获",
	diy_huangzhong: "黄汉升",
	diy_xuhuang: "徐公明",
	diy_dianwei: "新典韦",
	diy_dianwei_prefix: "新",
	diy_weiyan: "魏文长",
	xicai: "惜才",
	diyjianxiong: "奸雄",
	diy_feishi: "费诗",
	nsshuaiyan: "率言",
	moshou: "墨守",
	diy_hanlong: "韩龙",
	diy_luxun: "陆伯言",
	diy_yuji: "于吉",
	diy_zhouyu: "周公瑾",
	diy_lukang: "陆抗",
	diy_caiwenji: "蔡昭姬",
	diy_zhenji: "甄宓",

	ns_zuoci: "左慈",
	ns_wangyun: "王允",
	ns_lvzhi: "吕后",
	ns_nanhua: "南华",
	ns_nanhua_left: "幻身·左",
	ns_nanhua_right: "幻身·右",
	ns_huamulan: "SP花木兰",
	ns_huamulan_prefix: "SP",
	ns_huangzu: "黄祖",
	ns_yanliang: "颜良",
	ns_wenchou: "文丑",
	ns_jinke: "荆轲",

	ns_caocao: "曹操",
	ns_zhugeliang: "诸葛亮",
	ns_wangyue: "王越",
	ns_yuji: "于吉",
	ns_caocaosp: "SP曹操",
	ns_caocaosp_prefix: "SP",
	ns_xinxianying: "辛宪英",
	ns_sunjian: "孙坚",
	ns_simazhao: "司马昭",
	ns_guanlu: "管辂",

	ns_duangui: "段珪",
	ns_shenpei: "审配",
	ns_zhangbao: "张宝",
	ns_masu: "马谡",
	ns_zhangxiu: "张绣",
	ns_lvmeng: "吕蒙",

	ns_yujisp: "于吉",
	ns_yangyi: "杨仪",
	ns_liuzhang: "刘璋",
	ns_xinnanhua: "南华老仙",
	ns_luyusheng: "陆郁生",

	noname: "小无",
	noname_zhuyuan: "祝愿",
	noname_zhuyuan_info: "①每回合每名角色限一次。出牌阶段，你可以将四张花色各不相同的牌交给一名其他角色。你与其获得技能〖铁骑〗和〖激昂〗至各自的回合结束。②锁定技，若你于当前回合内：未发动过〖祝愿〗，则你使用牌无次数限制；发动过〖祝愿〗，则你使用牌无距离限制。",
	noname_duocai: "多彩",
	noname_duocai_info: "每回合限一次。其他角色区域内的牌因弃置而进入弃牌堆后，你可以获得之。若你以此法得到的牌数：大于2，你弃置一名角色区域内的一张牌；等于2，你摸一张牌；小于2，你回复1点体力。",
	ns_huangchengyan: "黄承彦",
	nslongyue: "龙岳",
	nslongyue_info: "当一名角色使用锦囊牌时，若此牌是其本回合内使用的第一张牌，则你可令其摸一张牌。",
	nszhenyin: "阵引",
	nszhenyin_info: "每回合限一次。一名角色的判定牌生效前，你可令当前回合角色打出一张手牌代替之。",
	ns_sunchensunjun: "孙綝孙峻",
	nsxianhai: "险害",
	nsxianhai_info: "每轮限一次，当一名其他角色于回合内造成伤害后，若其此回合内造成过的伤害总和大于你上一回合内造成的伤害总和，则你可以减1点体力上限，令其废除一种装备栏并弃置手牌中所有的【闪】。若〖兴黜〗已发动，此回合结束后视为该限定技未发动过。",
	nsxingchu: "兴黜",
	nsxingchu_info: "限定技，当你杀死一名角色/你死亡时，你可以令一名角色获得其/你的所有牌并增加1点体力上限。",
	ns_yuanxi: "袁熙",
	nsshengyan: "盛筵",
	nsshengyan3: "盛筵",
	nsshengyan_info: "锁定技，你的判定牌生效后，若结果花色与你本回合内其他判定结果的花色均不同，则你令当前回合角色本回合的手牌上限+2。",
	nsdaizhan: "怠战",
	nsdaizhany: "怠战",
	nsdaizhan_info: "准备阶段，你可以将一张非锦囊牌当做【兵粮寸断】或【乐不思蜀】对自己使用。若如此做，回合结束时，你将手牌摸至手牌上限。",
	ns_caoshuang: "曹爽",
	nsjiquan: "集权",
	nsjiquan_mark: "集权",
	nsjiquan_info: "与你距离1以内的其他角色造成或受到伤害后，你可以将其区域内的一张牌置于你的武将牌上（称为“威”）。你使用【杀】的次数上限+X（X为“威”数）。",
	nsfuwei: "附位",
	nsfuwei_info: "觉醒技，结束阶段开始时，若“威”数大于4，则你加2点体力上限，获得〖喋谋〗和〖制皇〗，并将〖集权〗改为锁定技。",
	nsdiemou: "喋谋",
	nsdiemou_info: "锁定技，出牌阶段开始时，若“威”大于全场角色数，你移去所有“威”，减1点体力上限并摸X张牌。若X大于4，你翻面。（X为移去的“威”数）",
	nszhihuang: "制皇",
	nszhihuang_damage: "制皇",
	nszhihuang_info: "每回合限一次，当主公使用牌时，你可以移去一张“威”，然后获得此牌。锁定技，若你的手牌数大于主公，则你使用牌造成的伤害+1。",
	ns_chentai: "陈泰",
	nsweiyuan: "围援",
	nsweiyuan_use: "围援",
	nsweiyuan_use_backup: "围援",
	nsweiyuan_info: "出牌阶段限一次，当你使用牌指定其他角色A为唯一目标后，你可以令一名除该角色外的其他角色B选择一项：①交给A一张牌：然后你对B造成1点伤害；②你摸一张牌，且可以将一张手牌当做本回合使用过的一张基本牌/普通锦囊牌使用（无次数距离限制）。",
	nsjuxian: "据险",
	nsjuxian2: "据险",
	nsjuxian_info: "当你受到伤害时，你可以摸两张并跳过下一个摸牌阶段，且在此之前不能再次发动〖据险〗。然后若你的手牌数不小于体力上限，则伤害来源弃置一张牌。",
	ns_huangwudie: "黄舞蝶",
	nsdiewu: "蝶舞",
	nsdiewu_info: "当你获得两张或更多的牌后/受到伤害后，你获得一个“蝶舞”标记；你可移去一枚“蝶舞”标记，然后视为使用一张【杀】或【闪】。当你以此法使用【杀】造成伤害后，则你摸一张牌。",
	nslingying: "灵影",
	nslingying_info: "锁定技，你使用【杀】无距离限制，且你使用【杀】的次数上限+1。",
	nspojian: "破茧",
	nspojian_info: '觉醒技，准备阶段，若你的"蝶舞"标记的数量不小于你的体力值，则你减1点体力上限并摸两张牌，删除〖蝶舞〗中使用【闪】的部分并获得技能〖烈弓〗。',
	ns_sunyi: "孙翊",
	nsguolie: "果烈",
	nsguolie2: "果烈",
	nsguolie_info: "摸牌阶段开始前，你可跳过此阶段。若如此做，你的红色牌均视为【杀】，黑色牌均视为【过河拆桥】且均无视距离与次数直到回合结束，且结束阶段，你获得本回合从你以外的区域内进入弃牌堆的所有牌。",
	ns_zhangning: "张宁",
	nsfuzhou: "符咒",
	nsfuzhou_card: "符咒",
	nsfuzhou_card_info: "此牌不可被【无懈可击】响应。若判定结果为：黑色，你受到使用者造成的1点雷属性伤害且弃置一张牌；红色，使用者摸两张牌，且你本回合的手牌上限-1。",
	nsfuzhou_num: "符咒",
	nsfuzhou_info: "出牌阶段限一次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限减1。",
	nsguidao: "鬼道",
	nsguidao_info: "一名角色的判定牌生效前，你可以打出一张黑色牌替换之。",
	nstaiping: "太平",
	nstaiping_info: "觉醒技。准备阶段，若你：已因〖符咒〗造成了两次或更多的伤害，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·邪〗；若你已因〖符咒〗摸了两次或更多的牌，则你将〖鬼道〗中的“黑色牌”修改为“牌”，将〖符咒〗修改为〖符咒·正〗。",
	nsfuzhou_damage: "符咒·邪",
	nsfuzhou_damage_info: "出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，且该角色本回合手牌上限-1。",
	nsfuzhou_draw: "符咒·正",
	nsfuzhou_draw_info: "出牌阶段限两次。你可以将一张黑色牌置于一名角色的判定区内，称为“符”。其于判定阶段进行“符”判定，若判定结果为：黑色，其受到1点雷属性伤害并弃置一张牌；红色，你摸两张牌，该角色回复1点体力并摸一张牌，且本回合的手牌上限+1。",
	ns_yanghu: "羊祜",
	nsbizhao: "避召",
	nsbizhao2: "避召",
	nsbizhao_info: "隐匿技，锁定技，当你于回合外明置此武将牌后，其他角色计算与你的距离+1直至你的回合开始。",
	nsqingde: "清德",
	nsqingde_info: "每回合限一次，当你使用【杀】或普通锦囊牌对其他角色造成伤害后，你可使用该牌与受到伤害的角色拼点。你可令输的角色摸两张牌；当你受到其他角色使用【杀】或普通锦囊牌造成的伤害后，可使用该牌与伤害来源拼点。你可令赢的角色回复1点体力。",
	nsyidi: "遗敌",
	nsyidi_info: "出牌阶段限一次，你可展示一张手牌，然后将其交给一名其他角色。若为基本牌，该角色可使用此牌；若不为基本牌，你摸一张牌。",

	diy_wenyang: "文鸯",
	ns_zhangwei: "张葳",
	nshuaishuang: "怀霜",
	nshuaishuang_info: "锁定技，结束阶段，你从牌堆/弃牌堆获得一张【桃】，然后失去1点体力。",
	nsfengli: "奉礼",
	nsfengli2: "奉礼",
	nsfengli_draw: "奉礼",
	nsfengli_clear: "奉礼",
	nsfengli_use: "奉礼",
	visible_nsfengli: "奉礼",
	nsfengli_info: "回合结束时，你可以选择一名其他角色并展示所有手牌直到你的下回合开始。当该角色于回合外需要使用或打出牌时，其可暗置你的一张明置手牌，然后视为使用或打出之。当你的明置手牌减少时，你可令一名手牌数小于你的角色摸一张牌。",
	nsqiyue: "骑钺",
	nsqiyue_info: "锁定技，当有角色的武将牌状态改变后，你摸一张牌。",
	nsxuezhu: "血逐",
	nsxuezhu_info: "当你受到伤害或造成伤害后，你可以令受到伤害的角色摸两张牌并翻面。",
	ns_chuanshu: "传术",
	ns_chuanshu_info: "<span class=yellowtext>限定技</span> 当一名其他角色进入濒死状态时，你可以令其选择获得技能〖雷击〗或〖鬼道〗，其回复体力至1并摸两张牌。当该被【传术】的角色造成或受到一次伤害后，你摸一张牌。其阵亡后，你重置技能〖传术〗。",
	ns_xiandao: "仙道",
	ns_xiandao_info: "<font color=#f00>锁定技</font> 游戏开始、你进入游戏时和回合结束阶段，你随机获得技能〖雷击〗或〖鬼道〗，直到下个出牌阶段阶段开始。你防止受到任何属性伤害。",
	ns_xiuzheng: "修真",
	ns_xiuzheng_info: "出牌阶段限一次，你可选择一名其他角色，然后亮出牌堆顶的两张牌，若同为红色，则其受到1点火焰伤害；若同为黑色，其受到1点雷电伤害；若颜色不相同，你弃置其一张牌。然后你获得这两张展示的牌后再弃置两张牌。",
	nsanruo: "暗弱",
	nsanruo_info: "锁定技，你手牌中的【杀】和普通锦囊牌(借刀杀人等带有指向目标的锦囊除外)均对你不可见。但你可以正常使用之。",
	nsxunshan: "循善",
	nsxunshan_info: "锁定技，你使用【暗弱】牌可以为其指定任意名合法目标（托管无效）。",
	nskaicheng: "开城",
	nskaicheng_info: "主公技，你的回合内，你可以将一张【暗弱】牌交给一名群势力其他角色观看，其可以选择是否告诉你此牌的名字。然后你选择一项：使用这张牌并摸一张牌；或结束此回合。",
	nsjuanli: "狷戾",
	nsjuanli_info: "出牌阶段限一次，你可以和一名有手牌的其他角色进行赌牌，若你赢，目标角色失去1点体力且该角色与你距离-1直到与你下次赌牌，若你没赢，目标角色回复1点体力，且该角色与你距离+1直到与你的下次赌牌。（赌牌:赌牌的两名角色分别亮开一张手牌，若花色相同则赌牌平局，若花色不同，则依次亮出牌堆顶的牌直到翻开的牌与其中一人亮出牌的花色相同，则该角色获得赌牌的胜利）",
	nsyuanchou: "远筹",
	nsyuanchou_info: "锁定技，当你成为锦囊牌的目标时，若来源角色与你的距离大于1，则取消之。",
	nsguhuo: "蛊惑",
	nsguhuo_info: "锁定技，你在一个回合中使用前两张牌时，你对一名随机角色从牌堆(牌堆无则从弃牌堆)随机使用一张同类别卡牌。",
	nsqinxue: "勤学",
	nsqinxue_info: "每个效果每回合只能使用一次。①当你使用一张基本牌时，你从牌堆随机获得一张锦囊牌；②当你使用一张锦囊牌时，你从牌堆随机获得一张装备牌；③当你使用一张装备牌时，你从牌堆随机获得一张基本牌。",
	nsbaiyi: "白衣",
	nsbaiyi_info: "锁定技，若你本回合发动过〖勤学〗，你跳过弃牌阶段，改为弃置X张牌（X为本回合发动〖勤学〗的次数）；若你弃置了3张类别不同的牌，你获得一个额外回合（不可连续获得回合），否则你观看牌堆顶的X张牌并获得其中一张。",
	nsbaiming: "百鸣",
	nsbaiming_info: "当你使用【杀】时，你可以获得一项未获得过且与杀或伤害相关的技能，此【杀】结算完毕后，你失去以此法获得的技能。",
	nsfuge: "覆戈",
	nsfuge_info: "你的回合结束后，你可以执行一个额外的回合，此回合的摸牌阶段，你于摸牌阶段额外摸X张牌（X为你已损失的体力值）；若如此做，直到洗牌前，你不能再发动此技能。",
	nstanbing: "谈兵",
	nstanbing_info: "摸牌阶段开始时，你可弃置一张手牌，然后摸X张牌(X为你弃置牌的名称字数)，若如此做，本回合你不可使用或打出【杀】。",
	nsxinzhan: "心战",
	nsxinzhan_info: "出牌阶段限一次，你可将任意张手牌交给一名其他角色，若如此做，该角色失去X点体力(X为你交给其的牌张数的一半，向下取整)，若你给的牌达到六张，则改为该角色失去1点体力上限。",
	nsfuhuo: "符火",
	nsfuhuo2: "符火",
	nsfuhuo_info: "出牌阶段限一次，你可将一张手牌置于一名武将牌上没有“符”的角色的武将牌上，称为“符”，若如此做，其回合外使用或打出【闪】时，你可令其判定，若结果为：红桃，你对其造成2点火焰伤害；方块，你弃置其一张手牌，然后对其造成1点火焰伤害。你的下个回合开始时，你获得其武将牌上的“符”。",
	nswangfeng: "望风",
	nswangfeng_info: "在判定牌生效前，你可以打出一张红色牌替换之。",
	nshunji: "混击",
	nshunji_info: "出牌阶段限一次，你可以摸一张牌，视为使用一张【万箭齐发】。此【万箭齐发】造成伤害时，受伤害角色选择一项：①弃置你一张牌；②摸一张牌。",
	nscuanquan: "篡权",
	nscuanquan_info: "锁定技，如果你的身份为忠臣，则在受伤三次后与主公，互换身份和体力上限。",
	nsjianning: "奸佞",
	nsjianning_info: "出牌阶段限一次，如果你的身份为内奸，你可以与一名手牌数比你少的角色交换手牌，并对其造成1点伤害。",
	nschangshi: "常仕",
	nschangshi_info: "出牌阶段限一次，如果你的身份为反贼，你可以指定两名其他角色互换体力；如果两名角色体力之差等于1，你失去1点体力。",
	nsbaquan: "霸权",
	nsbaquan_info: "回合结束时，你可以弃置所有手牌，并获得相应点数的护甲，你的新一回合开始时清除所有护甲。",
	nsbugua: "卜卦",
	nsbugua_use_info: "弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数随机获得牌堆中相应的一张牌。",
	nsbugua_info: "出牌阶段限一次，你可以弃置一张牌，并将牌堆顶的六张牌反面朝上逐张按先后顺序排放，然后抛骰子，展示牌序号与骰子显示的点数一致的牌，然后你根据这张牌的花色、点数按以下规则随机获得牌堆中相应的一张牌：乾（红桃偶数）：无中生有；坤（黑桃奇数）：决斗；震（黑桃偶数）：南蛮入侵；巽（红桃奇数）：万箭齐发；坎（梅花偶数）：过河拆桥、兑（梅花奇数）：借刀杀人、艮（方片偶数）：顺手牵羊、离（方片奇数）：火攻。若牌堆中无此牌则摸一张牌，然后你观看未展示的另外五张牌并按任意顺序将其置于牌堆顶。",
	nstuiyan: "推演",
	nstuiyan_info: "出牌阶段，若你使用的牌点数比上一张使用的牌点数大，你可以摸一张牌，反之你本回合不能再以此法摸牌；当你使用的牌点数首次达到8的倍数时，你可以在结算后立即发动一次【卜卦】。",
	nstianji: "天机",
	nstianji_info: "限定技，当一名其他角色进入濒死状态，你可自减1点体力上限，令其回复体力至1并增加1点体力上限。",
	nszhaoxin: "昭心",
	nszhaoxin_info: "锁定技，你始终展示手牌。",
	nsxiuxin: "修穆",
	nsxiuxin_info: "锁定技，若你没有某种花色的手牌，你不能成为这种花色的牌的目标。",
	nsshijun: "弑君",
	nsshijun_info: "锁定技，你造成伤害时，你令此伤害+1，并在结算后失去1点体力。",
	nshunyou: "魂佑",
	nshunyou_info: "出牌阶段限一次，你可以弃置一张基本牌，获得弃牌堆底的一张装备牌和一张锦囊牌，然后你可以将那张装备牌装备给一名角色（允许替换）。如果弃牌堆没有装备以及锦囊牌，则改为摸X张牌，X为你已损失的体力值+1（最多3张）。",
	nswulie: "武烈",
	nswulie_info: "限定技，准备阶段，你可以失去1点体力上限，从弃牌堆选择最多三张牌以任意顺序放置于牌堆顶。若如此做，此回合的结束阶段，你可以重复此操作。",
	nscangxi: "藏玺",
	nscangxi2: "藏玺",
	nscangxi_info: "主公技，其他吴势力角色的弃牌阶段结束时，若其弃置了至少两张牌，则可以选择判定，若是黑色，则其选择一项，1，令主公摸一张并且展示；2，主公手牌上限永久加一；3，额外弃置一张牌，令主公获得本回合进入弃牌堆的一张牌。",
	nsdongcha: "洞察",
	nsdongcha_info: "锁定技，单体锦囊牌无法对你造成伤害。其它角色于其回合内第二次使用锦囊牌指定你为目标时，取消之。",
	nscaijian: "才鉴",
	nscaijian_info: "出牌阶段限一次，若你的手牌数不大于你的体力上限，则你可以展示你的手牌，观看牌堆顶相同数量的牌并以任意方式交换之。",
	nsgongjian: "恭俭",
	nsgongjian_info: "锁定技，弃牌阶段，你须将弃牌交给一名体力值大于你的其它角色。",
	nsjianxiong: "奸雄",
	nsjianxiong_info: "当你成为一名角色牌的目标后你可以对该角色使用一张牌，若此牌对其造成伤害，则该角色的牌失效。若失效的为黑色牌，则你摸一张牌。",
	nsxionglue: "雄略",
	nsxionglue_info: "出牌阶段限一次，你可以弃置一张黑色手牌，然后发现一张锦囊牌。",
	nsyaowang: "妖妄",
	nsyaowang_info: "回合开始阶段你可以选择一名角色然后获得其其中一项技能直到回合结束，然后该角色随机获得一项未上场武将的其中一项技能直到其回合结束。",
	nshuanhuo: "幻惑",
	nshuanhuo_info: "每当你失去1点体力或受到一次大于2的伤害时，你可以交换除你之外的两名角色的武将牌（体力及体力上限不变）。",
	nsjianshu: "剑术",
	nsjianshu_info: "锁定技：每当你的装备区有武器时，你使用【杀】指定一个目标后，该角色需要依次使用两张【闪】才能抵消此【杀】。",
	nscangjian: "藏剑",
	nscangjian_info: "每当你对一名角色造成伤害，你可以获得其装备区一张牌。",
	nsyunxing: "陨星",
	nsyunxing_info: "锁定技，当场上一名角色死亡，若为蜀，你失去1点体力；若为吴，你回复1点体力；若为魏，你摸一张牌并弃置一名角色的手牌；若为群，你强制结束当前回合；若为你，你可以使一名角色翻面。",
	nsguanxing: "观星",
	nsguanxing_info: "锁定技，准备阶段，你观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)。",
	nscaiyi: "猜疑",
	nscaiyi_info: "其他角色摸牌后，你可以观看其摸到的牌，若其中有【杀】，则视为你对其使用一张【杀】，若其中没有【杀】，则视为其对你使用一张【杀】（计入出杀次数）。",
	nsgefa: "割发",
	nsgefa_info: "当你的体力值等于0或更低时，你可以将任意一张♣牌当【桃】使用。",
	nshaoling: "号令",
	nshaoling_info: "限定技，出牌阶段，你可以指定一名其他角色，令另外所有其他角色角色选择一项：1、对该角色使用一张【杀】；2、交给你一张牌，然后视为你对其使用一张【杀】。",
	nspinmin: "拼命",
	nspinmin_info: "锁定技，当你于回合内死亡时，你不死亡并增加1点体力上限（每回合最多增加1点且不能超过4）；当你于回合外死亡时，你不死亡并减少1点体力上限（体力上限为0会导致你死亡）。",
	nsshishou: "失手",
	nsshishou_info: "锁定技，当你于回合内失去手牌时，你失去1点体力并摸一张牌；你回合内使用的牌数不能超过4。",
	nsduijue: "对决",
	nsduijue_info: "出牌阶段开始时，你可以弃置一张手牌，若如此做，此阶段你可以将一张与此牌颜色不同的手牌当作【决斗】使用（限2次）。",
	nsshuangxiong: "双雄",
	nsshuangxiong_info: "当你使用【决斗】或被使用【决斗】时，你可以将武将牌翻面。",
	nsshuangxiong_append: "背面武将：文丑，2体力，你可以将一张牌当【杀】打出。",
	nsguanyong: "冠勇",
	nsguanyong_info: "你可以将一张手牌当【杀】打出。",
	nsjihui: "急恚",
	nsjihui_info: "锁定技，每当一名角色一次弃置了三张或更多的牌，你获得一个额外回合；你的额外回合内，你使用牌只能指定你与上一回合角色为目标。",
	nsmouyun: "谋运",
	nsmouyun_info: "每两轮限一次，你可以弃置场上体力值最少的一名其他角色区域内的X张牌。（X为其损失的体力值）",
	nscongjun: "从军",
	nscongjun_info: "锁定技，游戏开始时，你变身为一名随机男性角色；当一名敌方角色使用无懈可击时，你有小概率亮出此武将并变回花木兰，然后对该角色造成2点伤害。",
	nshuanxian: "幻仙",
	nshuanxian_info: "锁定技，游戏开始时，你获得随从“幻身·右”，当你首次受到伤害时，你获得随从“幻身·左”（体力上限2，初始手牌2）；你与幻身在摸牌阶段均少摸一张牌；在你的回合中（如果有对应幻身），你以【幻身·左-本体-幻身·右】的顺序进行3个连续回合。",
	nstaiping_nh: "太平",
	nstaiping_nh_info: "当你受到1点伤害后（首次伤害除外），你可以选择一项: ①令一个“幻身”增加1点体力上限。②令一个“幻身”回复1点体力。",
	nsshoudao: "授道",
	nsshoudao_info: "当左右“幻身”全部死亡时，你获得技能“雷击”和“鬼道”。当你死亡时，若此时有两个“幻身”，你可以令一名其他角色获得技能“雷击”和“鬼道”。若有一个“幻身”，你可以令一名其他角色获得技能“雷击”或“鬼道”。(杀死你的角色除外)",
	nsnongquan: "弄权",
	nsnongquan_info: "出牌阶段，你可以将最后一张手牌当作【无中生有】使用。",
	nsdufu: "毒妇",
	nsdufu_info: "每当你即将造成一次伤害时，你可以为此伤害重新指定伤害来源。",
	yiesheng: "回雪",
	yiesheng_info: "出牌阶段，你可以弃置任意数量的黑色手牌，然后摸等量的牌。",
	liangji: "环计",
	liangji_info: "出牌阶段限一次，你可以选择一名未以此法放置牌的其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能〖无双〗，若其为女性角色，则获得技能〖离间〗，直到回合结束。",
	chengmou: "逞谋",
	chengmou_info: "摸牌阶段开始时，若你有“功”牌，你获得之并跳过摸牌阶段，若你所获得的“功”牌多于两张，你须失去1点体力。",
	jugong: "居功",
	jugong_info: "回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。",
	nsxinsheng: "新生",
	nsxinsheng_info: "每当你对其他角色造成伤害后，若你未受伤，则你可以增加X点体力上限并摸X张牌，X为伤害点数。",
	nsdunxing: "遁形",
	nsdunxing_info: "每当你即将受到其他角色造成的伤害时，若你已受伤，则你可以防止此伤害，改为失去X点体力上限并摸X张牌，X为伤害点数。",
	liangce: "粮策",
	liangce_info: "①出牌阶段限一次，你可以将一张基本牌当【五谷丰登】使用。②当因执行【五谷丰登】的效果而亮出的牌因效果执行完毕而置入弃牌堆后，你可以选择一名角色，令该角色获取之。",
	jianbi: "坚壁",
	jianbi_info: "当你成为锦囊牌的目标时，若此牌的目标包括其他角色，你可以令此牌对1个目标无效。",
	diyjuntun: "军屯",
	diyjuntun_info: "出牌阶段，你可以重铸装备牌。",
	choudu: "筹度",
	choudu_info: "出牌阶段限一次，你可以弃置一张牌，并指定一名角色视为其使用一张调兵遣将。",
	liduan: "立断",
	liduan_info: "当一名其他角色于其回合外得到牌后，若其此次得到的牌数为1且为装备牌（无论是否可见），你可以令该角色选择一项：1.使用此牌；2.将一张手牌交给你。",
	fuchou: "负仇",
	fuchou2: "负仇",
	fuchou_info: "当你成为【杀】的目标时，你可以将一张牌交给此【杀】的使用者，令此【杀】对你无效且你到其的距离于当前回合内视为1，若如此做，此回合的结束阶段开始时，其令你摸一张牌，然后你需对其使用【杀】，否则失去1点体力。",
	jinyan: "噤言",
	jinyan_info: "锁定技。若你的体力值不大于2，你的黑色锦囊牌视为【杀】。",
	chezhen: "车阵",
	chezhen_info: "锁定技。若你的装备区里：没有牌，你的防御距离+1；有牌，你的进攻距离+1。",
	youzhan: "诱战",
	youzhan_info: "当以你距离不大于1的角色为目标的【杀】的使用结算开始时，你可以弃置一张装备牌，令该角色视为使用【诱敌深入】。",
	kangyin: "亢音",
	kangyin2: "亢音",
	kangyin_info: "出牌阶段限一次，你可以失去1点体力并选择一名其他角色，弃置该角色的一张牌。若此牌：为基本牌，你可以令一至X名角色各摸一张牌；不为基本牌，于此回合内：你的进攻距离+X，且你使用【杀】的额外目标数上限+X。（X为你已损失的体力值）",
	zhucheng: "筑城",
	zhucheng2: "筑城",
	zhucheng_info: "①结束阶段开始时，若没有“筑”，你可以将牌堆顶的X张牌置于你的武将牌上〔称为“筑”〕（X为你已损失的体力值与1中的较大值），否则你可以获取所有“筑”。②当你成为【杀】的目标时，若有“筑”，你可以令此【杀】的使用者弃置X张牌（X为“筑”的数量），否则此【杀】对你无效。",
	duoqi: "夺气",
	duoqi_info: "当一名角色于除你之外的角色的出牌阶段内因弃置而失去牌后，你可以移去一张“筑”，并结束此出牌阶段。",

	siji: "伺机",
	ciqiu: "刺酋",
	ciqiu_dying: "刺酋",
	diy_liuyan: "刘焉",
	juedao: "绝道",
	geju: "割据",
	shaoying: "烧营",
	zonghuo: "纵火",
	diychanyuan: "缠怨",
	diyguhuo: "蛊惑",
	jieyan: "劫焰",
	honglian: "红莲",
	xiongzi: "雄姿",
	luweiyan: "围堰",
	guihan: "归汉",
	diyduanliang: "断粮",
	diyduanliang1: "断粮",
	diyduanliang2: "断粮",
	diyqiangxi: "强袭",
	diykuanggu: "狂骨",
	batu: "霸图",
	zaiqix: "再起",
	diy_jiaoxia: "皎霞",
	yaliang: "雅量",
	yaliang_info: "每当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可与该角色各摸一张牌。",
	diy_jiaoxia_info: "每当你成为红色牌的目标，你可以摸一张牌。",
	zaiqix_info: "摸牌阶段，若你已受伤，你可以改为亮出牌堆顶的X+1张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。",
	batu_info: "结束阶段，你可以将手牌数补至X，X为现存的势力数。",
	diykuanggu_info: "锁定技，每当你造成1点伤害，你在其攻击范围内，你回复1点体力，否则你摸一张牌。",
	diyqiangxi_info: "出牌阶段，你可以自减1点体力或弃一张武器牌，然后你对你攻击范围内的一名角色造成1点伤害并弃置其一张牌，每回合限一次。",
	diyduanliang_info: "出牌阶段限一次，你可以将一张黑色的基本牌当兵粮寸断对一名角色使用，然后摸一张牌。你的兵粮寸断可以指定距离2以内的角色作为目标。",
	guihan_info: "限定技，当你进入濒死状态时，可以指定一名男性角色与其各回复1点体力并摸两张牌。",
	luweiyan_info: "出牌阶段限一次，你可以将一张非基本牌当作水攻使用；结算后你可以视为对其中一个目标使用一张不计入出杀次数的【杀】。",
	xiongzi_info: "锁定技，你于摸牌阶段额外摸X+1张牌，X为你装备区牌数的一半，向下取整。",
	honglian_info: "每当你受到来自其他角色的伤害，可以弃置伤害来源的所有红色牌。",
	jieyan_info: "出牌阶段限一次，你可以弃置一张红色手牌令场上所有角色受到1点火焰伤害。",
	diyguhuo_info: "锁定技，准备阶段，你摸两张牌，然后弃置区域内的两张牌。",
	diychanyuan_info: "锁定技，杀死你的角色失去1点体力上限。",
	zonghuo_info: "你可弃置一张牌将你即将造成的伤害变为火焰伤害。",
	shaoying_info: "每当你造成一次火焰伤害，可指定距离受伤害角色1以内的另一名角色，并亮出牌堆顶的一张牌，若此牌为红色，该角色受到1点火焰伤害。",
	juedao_info: "出牌阶段，你可以弃置一张手牌，横置你的武将牌；锁定技，若你的武将牌横置，则你计算至其他角色的距离和其他角色计算至你的距离均+1。",
	geju_info: "准备阶段开始时，你可以摸X张牌（X为攻击范围内不含有你的势力数）。",
	siji_info: "弃牌阶段结束后，你可以摸2X张牌（X为你于此阶段内弃置的【杀】的数量）。",
	ciqiu_info: "锁定技，每当你使用【杀】对目标角色造成伤害时，若该角色未受伤，你令此伤害+1；若其因此进入濒死状态，你令其死亡，然后你失去“刺酋”。",
	nsshuaiyan_info: "每当其他角色于你的回合外回复体力后，你可以令该角色选择一项：1.令你摸一张牌；2.令你弃置其一张牌。",
	moshou_info: "锁定技，你不能成为乐不思蜀和兵粮寸断的目标。",
	xicai_info: "你可以立即获得对你造成伤害的牌。",
	diyjianxiong_info: "锁定技，在身份局中，在你回合内死亡的角色均视为反贼，国战中，在你回合内死亡的角色若与你势力相同则随机改为另一个势力。",

	ns_zanghong: "臧洪",
	nsshimeng: "誓盟",
	nsshimeng_info: "出牌阶段限一次，你可以选择任意名角色。这些角色依次选择一项：⒈摸一张牌。⒉使用一张【杀】。然后若选择前者角色数大于选择后者的角色数，则你获得1点护甲并失去1点体力。",
	ns_ruanji: "阮籍",
	nsshizui: "酾醉",
	nsshizui_info: "每回合限一次。当你成为基本牌或普通锦囊牌的目标后，你可以弃置一张牌，然后视为使用一张【酒】。若你弃置的牌与其使用的牌花色相同，则此牌对你无效；若你弃置的牌为♣，则你获得其使用的牌。",
	nsxiaoye: "啸野",
	nsxiaoye_info: "一名角色的结束阶段开始时，若你于当前回合内使用过【酒】，则你可以视为使用一张其于本回合内使用过的【杀】或普通锦囊牌。",
	ns_limi: "李密",
	nstuilun: "退论",
	nstuilun_info: "结束阶段，你可以失去任意点体力（至多失去至1点）并弃置任意张手牌（至多弃置至一张）。若如此做，你获得如下效果直到你下回合开始：其他角色的回合开始时，若你的体力值小于该角色，则你可以令一名角色回复或失去1点体力；若你的手牌数小于该角色，则你可以令一名角色摸一张牌或弃置一张牌。",
	ns_zhonglimu: "钟离牧",
	nskuanhuai: "宽怀",
	nskuanhuai_info: "出牌阶段开始时，你可以从弃牌堆中获得一张非基本牌。若如此做：你本阶段内不能使用基本牌，且本回合的弃牌阶段结束时，你可以依次使用本阶段内弃置的基本牌。",
	nsdingbian: "定边",
	nsdingbian_info: "锁定技。当你于回合内使用锦囊牌或装备牌后，你令自己本回合的手牌上限-1且选择一项：⒈从牌堆获得一张基本牌。⒉令一种基本牌于本回合内不计入手牌上限。",
	prp_zhugeliang_ab: "诸葛亮",
	prp_zhugeliang: "派对浪客",
	nsxingyun: "星陨",
	nsxingyun_info: "每回合限一次。你可以将一张手牌当做任意一张符合“四象天阵”的牌使用。然后若这两张牌的类型不同，则你删除此“四象天阵”并摸两张牌。当你删除“四象天阵”中的最后一个项目后，你获得技能〖八阵〗。",
	nsxingyun_faq: "四象天阵",
	nsxingyun_faq_info: "青龙：无标签普通锦囊牌<br>朱雀：延时锦囊牌<br>白虎：伤害类卡牌<br>玄武：【闪】/回复类卡牌",
	nshanlang: "酣浪",
	nshanlang_info: "准备阶段，你可以和至多三名角色拼点。然后若这些角色中有拼点牌唯一最大的角色，则你可以令该角色从牌堆中获得一张不符合“四象天阵”的牌。",

	junktaoluan: "滔乱",
	junktaoluan_backup: "滔乱",
	junktaoluan_info: "你可将一张牌当做任意一张基本牌或普通锦囊牌使用（此牌不得是本局游戏你以此法使用过的牌，且每回合每种花色限一次），然后你令一名其他角色选择一项：1.交给你一张与“滔乱”声明的牌类别不同的牌；2.本回合“滔乱”失效且回合结束时你失去1点体力。",
	ns_caimao: "蔡瑁",
	nsdingzhou: "定州",
	nsdingzhou_info: "出牌阶段限一次，你可以选择一名区域内有牌的其他角色。你随机获得其区域内的一张牌，然后摸一张牌。若你以此法获得了两张颜色不同的牌，则你失去1点体力。",
	junkyuheng: "驭衡",
	junkyuheng_info: '锁定技。①回合开始时，你须弃置任意张花色不同的牌，从<span style="font-family: yuanli">东吴命运线·改</span>中随机获得等量的技能。②回合结束时，你失去所有因〖驭衡①〗获得的技能，然后摸等量的牌。',
	junkdili: "帝力",
	junkdili_info: "觉醒技。当你获得技能后，若你拥有的技能数大于你的体力上限，则你减1点体力上限，选择失去任意个其他技能，然后获得以下技能中的前等量个：〖圣质〗/〖权道〗/〖持纲〗。",
	junkshengzhi: "圣质",
	junkshengzhi_info: "锁定技。当你发动非锁定技后，你令你本回合使用的下一张牌无距离和次数限制。",
	junkquandao: "权道",
	junkquandao_info: "锁定技。当你使用【杀】或普通锦囊牌时，{若你手牌中的【杀】或普通锦囊牌的数量之差X不为0，则你弃置X张数量较多的一种牌}，然后你摸一张牌。",
	junkchigang: "持纲",
	junkchigang_info: "转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阴，摸牌阶段；阳，出牌阶段。",
	junkrende: "仁德",
	junkrende_info: "出牌阶段限一次，你可以将任意张手牌交给其他角色。若你给出的牌多于一张，则你回复1点体力。",
	junkjizhi: "集智",
	junkjizhi_info: "当你使用非转化的普通锦囊牌时，你可以亮出牌堆顶的一张牌A。若A不为基本牌，则你获得A。否则你选择一项：⒈将A置入弃牌堆。⒉将一张手牌置于牌堆顶，然后获得A。",
	junkqicai: "奇才",
	junkqicai_info: "锁定技。①你使用锦囊牌无距离限制。②你装备区内的非坐骑牌不能被其他角色弃置。",
	junkwangxi: "忘隙",
	junkwangxi_info: "当你对其他角色造成1点伤害后，或受到其他角色造成的1点伤害后，你可以摸两张牌，然后交给其其中一张牌。",
	junkwangxi_tag: "invisible",
	junklangmie: "狼灭",
	junklangmie_info: "其他角色的结束阶段开始时，你可以选择一项：⒈若其本回合内使用过某种类型的牌超过一张，则你弃置一张牌并摸两张牌。⒉若其本回合累计造成过的伤害大于1，则你弃置一张牌，然后对其造成1点伤害。",
	junkshicai: "恃才",
	junkshicai_info: "当你使用牌结束完毕后，若此牌与你本回合使用的牌类型均不同，则你可以将此牌置于牌堆顶，然后摸一张牌。",
	junk_zhangrang: "新杀张让",
	junk_zhangrang_prefix: "新杀",
	ol_guohuai: "OL郭淮",
	ol_guohuai_prefix: "OL",
	old_bulianshi: "RE步练师",
	old_bulianshi_prefix: "RE",
	ol_maliang: "OL马良",
	ol_maliang_prefix: "OL",
	junk_lidian: "OL李典",
	junk_lidian_prefix: "OL",
	junk_duanwei: "新杀段煨",
	junk_duanwei_prefix: "新杀",
	junk_xuyou: "手杀许攸",
	junk_xuyou_prefix: "手杀",
	junk_liubei: "旧界刘备",
	junk_liubei_prefix: "旧界",
	junk_huangyueying: "旧界黄月英",
	junk_huangyueying_prefix: "旧界",
	old_majun: "骰子马钧",
	old_majun_prefix: "骰子",
	ns_mengyou: "数学孟优",
	ns_mengyou_prefix: "数学",
	ns_mengyou_ab: "孟优",
	nsmanzhi: "蛮智",
	nsmanzhi_info: "准备阶段或结束阶段开始时，你可以将场上出现的数字代入等式中的A和B。若此等式成立，你摸Y张牌。（等式为Y=0.5A<sup>2</sup>+2.5B-X，其中X为游戏轮数，Y为存活人数）",
	ns_chengpu: "铁索程普",
	ns_chengpu_prefix: "铁索",
	ns_chengpu_ab: "程普",
	ns_sundeng: "画饼孙登",
	ns_sundeng_prefix: "画饼",
	ns_sundeng_ab: "孙登",
	ns_duji: "画饼杜畿",
	ns_duji_prefix: "画饼",
	ns_duji_ab: "杜畿",
	junk_zhangjiao: "OL神张角",
	junk_zhangjiao_prefix: "OL神",
	junksijun: "肆军",
	junksijun_info: "准备阶段，若“黄”数大于牌堆的牌数，你可以移去所有“黄”，然后从牌堆中随机获得任意张点数之和为36的牌（若牌堆没有点数和为36的组合则获得牌堆顶点数和刚好超过36的牌组）。",
	junk_guanyu: "旧谋关羽",
	junk_guanyu_prefix: "旧谋",
	junk_liuyan: "OL刘焉",
	junk_liuyan_prefix: "OL",
};

export default translates;
