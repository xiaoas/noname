const characterIntro = {
	wangkuang: "王匡（生卒年不详），字公节，东汉末年的地方军阀。兖州泰山郡（位于当今中国山东省泰安市东北方）人。起初，王匡在大将军何进手下任大将军府掾。何进死后，受拜为河内郡太守。董卓执政时，王匡与各地群雄同时起兵来讨伐董卓。最后，因妹夫胡母班的亲属和曹操的联手攻击而死。在纪传体史书《三国志》和《后汉书》中，皆有叙述王匡相关事迹；但无个人传记。",
	kongshu: "孔淑，孔融之女，孔融被诛时年七岁，因和其兄年幼得以保全，寄养到了别人家中。孔淑与其兄专心博弈，周围的人好奇为何他们对孔融被诛杀之事视若无睹。孔淑回答：“安有巢毁而卵不破乎？”寄养他们的主人给他们肉汁喝，其兄口渴就喝了。孔淑说：“今天这样的祸，难道能够久活，还要知道肉味吗？”哥哥听了大哭，然后不再喝一口。后来有人将其对话说给曹操听，曹操下令将兄妹杀掉。孔淑死前跟兄长说：“如果死者有知，得见父母，岂不是我们最大的愿望！”孔淑面不改色引颈就刑。",
	caoteng: "曹腾（生卒年不详），字季兴，沛国谯（今安徽亳县）人，曹节（曹萌）之子，东汉宦官。永宁元年（120年），顺帝做太子时，邓太后看到曹腾年纪轻，又谨慎厚道，派其侍奉皇太子读书，因此得到顺帝宠信。顺帝即位（126年）后，曹腾任小黄门，后升迁至中常侍。因策划迎立桓帝有功，迁大长秋，被封为费亭侯，加位特进。曹腾用事宫中三十多年，未有显著过失，并能推荐贤人，受到种暠弹劾，却称种暠为能吏，因此受到人们赞美。曹腾是曹魏王朝中六个拥有帝号的人物之一，在中国历史上，还是唯一一个被正式授予正统皇帝称号的宦官。",
	budugen: "步度根（？-约233年），檀石槐之孙，魁头之弟。中国三国时期鲜卑首领之一。步度根在其兄魁头死后，嗣为鲜卑一部之首领，据有云中、雁门、北地、代郡、太原等地之全部或一部分。建安（196年-220年）中，曾与轲比能等通过护乌桓校尉阎柔向曹操贡献。后遣使向魏文帝曹丕献马，被封为王。因兄扶罗韩被轲比能所杀，与之结怨，互相攻劫，其部众益少，力量益弱。被迫率众万余落退保太原、雁门，并联络扶罗韩子泄归泥附己，共拒轲比能。黄初五年（224年），亲诣魏廷贡献，受赏赐，与魏保持和好关系。魏明帝青龙元年（233年），受轲比能诱使，叛魏，扰掠并州，在魏将秦朗追击下，走漠北，后为轲比能所杀。",
	mawan: "马玩，东汉末年凉州军阀之一。建安十六年（公元211年），同韩遂、马超联合，起兵反抗曹操。同年九月，联军战败，马玩不知去向。",
	caimao: "蔡瑁，字德珪，生卒年不详。襄阳蔡州人，东汉末年荆州名士。少年时与曹操交好。初平元年（公元190年），刘表为荆州刺史。时宗贼猖獗，蔡瑁协助刘表诛杀宗贼，平定荆州之地，蔡瑁因此得刘表重用，并在刘表任镇南将军时担任他的军师。刘表病亡后，蔡瑁拥护刘表幼子刘琮继位，并逼迫他投降南征的曹操。蔡瑁在曹操麾下历任从事中郎、司马、长水校尉，受封汉阳亭侯。",
	yadan: "雅丹，《三国演义》虚构人物，西羌丞相。诸葛亮伐魏时，魏大都督曹真驰书赴羌，西羌国王彻里吉任命雅丹与元帅越吉起兵15万前去增援，中了诸葛亮之计，被伏兵所困。",
	liupan: "刘磐（生卒年不详），山阳高平人，荆州牧刘表从子。与南阳人黄忠共守长沙攸县。为人骁勇，数次为寇于艾、西安诸县。江东孙策于是分海昏、建昌为左右六县，以东莱太史慈为建昌都尉，治海昏，并督诸将共拒刘磐。于是刘磐绝迹不复为寇。",
	guotu: "郭图（？－205年），字公则，颍川（治今河南省禹州市）人。东汉末年袁绍帐下谋士。韩馥统冀州时，郭图与荀谌等人奉袁绍之命，说服韩馥让位。袁绍统一河北后，郭图与审配等人力劝袁绍统率大军攻打曹操。袁绍死后，袁尚继位。郭图与辛评为袁谭效力，挑唆袁谭攻击袁尚。建安十年（205年），郭图和袁谭一同被曹操所杀。",
	tianchou: "田畴（169年或170年-214年或216年），字子泰，东汉右北平郡无终人，东汉末年隐士。田畴好文习武。汉初平年间，其受刘虞派遣去长安，呈送指控公孙赞奏章，献帝大悦，封为骑都尉，田畴不受。携诏返回时，刘虞已被公孙所杀，田畴到刘墓祭拜，被公孙所提，不久释放。田畴回故乡后率家族及随从数百人隐居徐无山，致力农桑，数年间增至5000家。制定法条，兴建学校，一时民风良好，乌桓、鲜卑纷纷与其结交。汉建安二十年（207年），曹操北征乌桓，田畴请为向导。上徐无山、出卢龙、过平冈、登白狼堆、至柳城，曹军大胜，封田畴为亭侯，坚辞不受。曹念田功，四次封赏，终不受，乃拜为议郎。建安二十一年（216年），田畴去世。",
	liyi: "李异（生卒年不详），三国时期东吴将领。建安末，与谢旌率水陆三千，击破刘备军将领詹晏、陈凤。刘备领兵攻孙权时，李异与陆逊等人屯巫、秭归，为蜀将所破。黄武元年（222年），陆逊破刘备于猇亭，李异追踪蜀军，屯驻南山。清代学者赵一清认为此李异与刘璋部将李异为同一人。",
	caoyu: "曹宇（？－278年），字彭祖，沛国谯县（今安徽亳州）人。三国时期魏国宗室，魏武帝曹操与环夫人之子，邓哀王曹冲同母兄弟。太和六年，封为燕王。魏明帝病危，欲以大将军辅政，不果。其子常道乡公曹奂，是魏国末代皇帝，史称魏元帝。晋朝建立后，降封燕公。咸宁四年（278年），曹宇去世。",
	zhangyan: "张燕，本姓褚，生卒年不详，常山真定（今河北正定南）人，东汉末年黑山军首领。张燕剽捍，敏捷过人，军中称为“飞燕”。官渡之战时投降曹操，被任命为平北将军，封安国亭侯。死后其子张方袭爵。",
	lushi: "卢氏，五斗米教主张衡妻，张鲁母，擅长驻颜之术，常年令自己保持少女的容颜。常拜访刘焉，与其交好。",
	lvboshe: "吕伯奢，东汉成皋（今河南荥阳）人，曹操父亲曹嵩的故友。曹操与陈宫在逃离董卓避祸，返回乡里的途中借宿于吕伯奢家，未伤其人，有贼八人欲捉曹操，曹操杀之，明罗贯中在历史小说《三国演义》中将这段历史进行了丑化加工，也成为小说中曹操名言“宁教我负天下人，休教天下人负我”的出处。",
	caoxi: "曹羲（？－249年），字昭叔。曹真之子，曹爽之弟。为人有学识，明律法。司马懿曾组织朝议改革九品中正制废除九品而留中正，曹羲认为此举并无区别，最终都是决定于人的人治。曹爽掌权后，受封中领军，掌握禁兵，封安乡侯。曹爽及诸兄弟轻视司马懿，恣意妄为，经常外出狩猎，曹羲屡次劝谏，不被采纳。249年，司马懿发动高平陵政变，被夷三族。",
	duanjiong: "段颎（？－179年），字纪明，武威姑臧（今甘肃省武威市）人。东汉名将，西域都护段会宗从曾孙，与皇甫规（字威明）、张奂（字然明）并称“凉州三明”。段颎少时学习骑射，有文武智略，最初被举为孝廉，为宪陵园丞、阳陵令，有治理之才。汉桓帝时入军旅，先破鲜卑，后讨平东郭窦、公孙举起事，以功封列侯。延熹二年（159年）起戍边征战十余年，百战羌人，至永康元年（167年）平定西羌，建宁二年（169年）平定东羌，前后斩东西羌六万余级。累功封新丰县侯。建宁三年（170年），段颎被征入朝，历任侍中、执金吾、河南尹、司隶校尉等职，他党附宦官、捕杀太学生，因而得保富贵，两度出任太尉。光和二年（179年），权宦王甫罪行被揭发，段颎受牵连下狱，其后在狱中饮鸩而死。",
	haopu: "郝普，字子太，义阳（治所在今湖北枣阳东南）人。刘备入川后，郝普为零陵太守。建安二十年（215年），吴将吕蒙进攻荆州三郡，唯有郝普坚守待援。但援兵久久不至，其挚友邓玄之又被吕蒙所骗，郝普也因此上当，投降吴国。湘水划界后，郝普回归刘备。建安二十四年（219年），吕蒙再次袭击荆州，击败关羽，郝普再次投降，最终归顺吴国并官至廷尉。郝普与隐蕃亲善，隐蕃蓄谋叛变事情败露，他受到牵连，因此自杀。在刘备集团的5个荆州郡守中，郝普是唯一一个抵抗过东吴的荆州郡守。",
	ol_zhanghe: "字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
	zhangshiping: "张世平是东汉末期的中山商人，曾与苏双同路，资助刘备组织武装、建立政权。于《三国演义》第一回出场，刘关张桃园三结义时资助刘备良马五十匹，金银五百两，镔铁一千斤。刘备所使用的“双股剑”、关羽所使用的“青龙偃月刀（又名‘冷艳锯’）”、张飞所使用的“丈八点钢矛（又名‘丈八蛇矛’）”皆由这一千斤上好镔铁打造而成。",
	luoxian: "罗宪（218年—270年），字令则，荆州襄阳（今湖北襄阳）人。西晋开国将领，巴东太守（郡府在永安白帝城）。于蜀汉灭亡后降魏，成功抵御孙吴的入侵，守住入魏国的要冲永安。后仕晋官至冠军将军、假节，封西鄂县侯。泰始六年（270年）去世，谥烈侯。",
	sunhong: "孙弘（？—252年），三国时期吴国大臣，扬州会稽（今浙江省绍兴市）人。官至吴国中书令、少傅。鲁王孙霸与太子孙和各植党羽，孙弘即依附孙霸。孙权病笃，而太子年少，于是以孙弘领少傅。孙权临终，召他与诸葛恪、孙峻等嘱以后事，孙弘与诸葛恪同为顾命大臣。孙权死后，孙弘因素来与诸葛恪不和，怕为所治，故而隐瞒了孙权的死讯，欲矫诏除掉诸葛恪，被孙峻告发。后诸葛恪请孙弘议事，于座中将其诛杀。",
	wangguan: "《三国演义》中虚构人物，历史上不曾记载。在114回出场，曾为邓艾手下参谋，献反间计与邓艾，被姜维识破，兵败自投江而死。",
	maxiumatie: "马休（？－212年），马铁（？－212年）。两人均为扶风茂陵（今陕西兴平）人，马腾之子，马超之弟。马腾遭韩遂进攻，乃携马休、马铁等入京受职。马休被封为奉车都尉，马铁被封为骑都尉。后在邺城居住。因兄马超反，两人被曹操夷灭。",
	dongtuna: "董荼那，小说《三国演义》及其衍生作品中的角色，南蛮王孟获属下大将，第二洞元帅；与阿会喃等人一起担任孟获的援军出征，但是被俘虏，又被诸葛亮释放，再次出战时，被唾骂不知羞耻，面红耳赤的退军。后同阿会喃共同绑架孟获献于蜀军，却被诸葛亮在其二人与孟获的重要性间权衡后出卖了他们，放走了孟获，使其为孟获所杀。",
	zhanghua: "张华（232年－300年），字茂先。范阳郡方城县（今河北固安）人。西晋时期政治家、文学家、藏书家，西汉留侯张良的十六世孙。张华出身范阳张氏，自少贫苦，因才学过人而受同乡名臣卢钦、刘放、阮籍等人的赞赏。在曹魏时，他历任太常博士、河南尹丞、佐著作郎、中书郎等职。西晋建立后，拜黄门侍郎，封关内侯，逐渐受到晋武帝的重用。后拜中书令，加散骑常侍，与大将杜预坚决支持武帝伐吴，于战时任度支尚书。吴国灭亡后，以功进封广武县侯。其后遭到排挤，出镇幽州，政绩卓然。之后返朝任太常，终武帝之世未得参与政事。晋惠帝继位后，累官至司空，封壮武郡公，被皇后贾南风委以朝政。张华尽忠辅佐，使天下仍然保持相对安宁。永康元年（300年），♯♯司马伦发动政变，张华惨遭杀害，年六十九。太安二年（303年），获得♯♯，追复官爵。张华工于诗赋，词藻华丽，又雅爱书籍，精于目录学，编纂有中国第一部博物学著作《博物志》；还曾与荀勖等人依照刘向《别录》整理典籍。《宣和书谱》载有其草书《得书帖》及行书《闻时帖》。《隋书·经籍志》有《张华集》十卷，今已佚。明人张溥辑有《张茂先集》。",
	quhuang: "屈晃(?—251)，祖籍汝南（今河南省汝南县），汉末避乱南下，三国吴时居章安（今属椒江区）。初为郡吏，在职清廉，颇有政声。赤乌初年，擢为尚书仆射。",
	macheng: "马承，蜀汉骠骑将军马超之子。仕蜀汉，马超死后继承其斄乡侯爵位。",
	zhangzhi: "张芝（？—192年），字伯英，敦煌郡渊泉县（今甘肃省瓜州县）人。东汉书法家、“草书之祖”，大司农张奂的儿子。出身名门，拒绝朝廷征召，潜心研习书法。擅长草书中的章草，将古代当时字字区别、笔画分离的草法，改为上下牵连富于变化的新写法，富有独创性，在当时影响很大。李志敏评价：“张芝创造了草书问世以来的第一座高峰，精熟神妙，兼善章今”。 没有真迹传世，仅存《八月帖》等刻帖。汉献帝初平三年，去世于家中，著有《笔心论》，与钟繇、王羲之和王献之并称“书中四贤”。",
	ahuinan: "阿会喃，小说《三国演义》及其衍生作品中的角色，南蛮王孟获属下大将，第三洞元帅；与董荼那等人一起担任孟获的援军出征，但是被俘虏，又被诸葛亮释放，再次出战时，被唾骂不知羞耻，面红耳赤的退军。后同董荼那共同绑架孟获献于蜀军，却被诸葛亮在其二人与孟获的重要性间权衡后出卖了他们，放走了孟获，使其为孟获所杀。",
	xiahouxuan: "夏侯玄（209年～254年），字泰初（《三国志》等作太初），沛国谯县（今安徽省亳州市）人。三国时期曹魏大臣、思想家、文学家，征南大将军夏侯尚之子，大将军曹爽的表弟。夏侯玄少年有名望，仪表出众，时人称为“朗朗如日月之入怀”。魏文帝黄初六年（225年），袭封昌陵乡侯。魏明帝时，历任散骑黄门侍郎、羽林监。少帝曹芳继位后，拜散骑常侍、中护军，保卫皇宫。后任征西将军，任内与曹爽策划骆谷之役，大失人心。高平陵政变后，被夺去兵权，改任大鸿胪、太常卿。嘉平六年（254年），中书令李丰与外戚张缉密谋杀死大将军司马师，改以夏侯玄执政。事泄被杀，夷灭三族，夏侯玄死时年仅四十六岁。著有文集三卷，如今已佚。政治上，提出了“审官择人”、“除重官”、“改服制”等制度，被太傅司马懿评价“皆大善”。博学多识，才华出众，精通玄学，成为“四聪”之一，与何晏等人开创了魏晋玄学的先河，是早期的玄学领袖人物。",
	dengzhong: "邓忠（不详－264年），三国时期曹魏名将邓艾之子。景元五年（264年），钟会谋反事败，士兵哗变，钟会被杀，邓艾部将想追还邓艾父子，但卫瓘却派田续追邓艾，于绵竹西相遇，将邓艾和邓忠等人杀死。直至泰始九年（273年）才恢复名节。",
	wangyan: "王衍（256年～311年），字夷甫，琅邪郡临沂县（今山东省临沂市）人。西晋末年重臣，玄学清谈领袖，曹魏幽州刺史王雄之孙、平北将军王乂之子、司徒王戎堂弟。王衍出身琅琊王氏。外表清明俊秀，风姿安详文雅，笃好老庄学说，颇有时名。步入仕途后，历任黄门侍郎、中领军、尚书令、尚书仆射等职。光熙元年（307年），升任司空。次年，又任司徒。王衍位高权重，却不思为国，为保全自己，还让弟弟王澄、族弟王敦分任荆州、青州刺史，遭时人鄙夷。王弥进攻洛阳时，王衍率军抵抗。其后转任太尉兼尚书令，又兼领太傅军司。永嘉五年（311年），东海王司马越去世，王衍奉其灵柩返回东海，途中为羯人石勒所俘获。王衍在与石勒交谈时，仍推脱责任，并劝其称帝，石勒大怒，将其与西晋旧臣一同活埋，时年五十六岁。王衍工书法，尤擅行书，《宣和书谱》有其作品《尊夫人帖》。",
	caoxiancaohua: "请分别查看「曹宪」和「曹华」的武将介绍。",
	zhaoyǎn: "赵俨（171~245年），字伯然，颍川阳翟（今河南禹州市）。东汉末年颍川“四大名士”之一，三国时期魏国名臣。熟读经史，精明强干。建安二年，投靠大将军曹操之后，起家朗陵县令，历任司空府掾、司空主薄、都督护军、扶风太守等职。魏文帝曹丕继位后，历任魏国侍中、驸马都尉、河东太守、典农中郎将、度支尚书，封宜土亭侯。魏明帝曹睿时期，历任大司农、骠骑将军、大司空等职。正始六年，去世，时年七十五，谥号为穆。",
	ruiji: "芮姬，芮玄之女，太子孙登妃，黄武五年卒。",
	weizi: "卫兹（?-190年），字子许，（《三国演义》中其名为卫弘，当为误记），陈留襄邑（今河南睢县）人。曾举孝廉，先后被车骑将军何苗、司徒杨赐等召辟。中平六年（189年）十二月，曹操在陈留己吾募兵，而卫兹以家财资助曹操，使曹操顺利募得五千士兵。此后，卫兹与曹操共同讨伐董卓。初平元年（190年），卫兹在跟随曹操讨伐董卓途中，于荥阳汴水遭遇董卓军徐荣，力战终日，失利身亡。",
	tengfanglan: "滕芳兰，生卒年不详，北海剧县（今山东省寿光市）人，太常滕胤的族女，滕牧的女儿，吴末帝孙皓的皇后。永安元年（258年），孙皓为乌程侯时被聘为妃。元兴元年（264年），孙皓登基后被立为皇后。孙吴灭亡后，随孙皓迁居洛阳。",
	qinghegongzhu: "清河长公主，沛国谯县人，曹操长女（按其与曹操长子曹昂同出于刘夫人，而刘夫人又早死，故其年龄应长于曹丕等其他曹操诸子女，又按长公主亦有年最长之意，故应为曹操之长女）。母刘夫人，得到曹操喜爱。清河公主后来下嫁夏侯楙。曹操初欲嫁丁仪，曹丕劝其嫁与夏侯楙。后与小叔子设计欲谋害丈夫，未果。",
	fanjiangzhangda: "范强，在明朝小说《三国演义》里叫做范疆。二人均为张飞手下部将。蜀汉章武元年，刘备伐吴，张飞率军从阆中前往江州，出发前，范强和张达杀死张飞，带着张飞的首级投奔了东吴。",
	tianyu: "田豫（171年～252年），字国让，渔阳雍奴（今天津市武清区）人。三国时期曹魏将领。初从刘备，因母亲年老回乡，后跟随公孙瓒，公孙瓒败亡，劝说鲜于辅加入曹操。曹操攻略河北时，田豫正式得到曹操任用，历任颖阴、郎陵令、弋阳太守等。后来田豫常年镇守曹魏北疆，从征代郡乌桓、斩骨进、破轲比能，多有功勋；也曾参与对孙吴的作战，在成山斩杀周贺，于新城击败孙权。官至太中大夫，封长乐亭侯。有一子田彭祖。",
	wuyan: "吴国及西晋初年将领。初任通江县吏，后得到大司马陆抗的提拔重用，逐渐升至建平太守。",
	fengfangnv: "冯方之女，司隶人，袁术妻妾。在史书中被记载为天姿国色的美人。钱大昭在《三国志辨疑》中认为冯方当为冯芳误字，冯方女实为是西园八校尉之一的冯芳的女儿。然而，在曹丕《典论》、《九州春秋》等书籍都有提及她，皆作冯方女字样，并无一书写作冯芳女或是明提是冯芳之女。最关键的一点是，冯芳是荆州西陵县人，她女儿不可能是司隶籍，冯芳也没担任过任何与司隶有关的官职。同时期名字为“○女”的并不少见，如施绩女儿施淑女，曹植女儿曹行女，夏侯令女等。",
	zuofen: "左芬（约253年－300年4月23日），出土墓志作左棻，字兰芝，齐国临淄（今山东临淄）人，西晋诗人。少好学，善属文。为晋武帝贵人。今存诗、赋、颂、赞、诔等20余篇，大都为应诏而作，《离思赋》最著名。原有集，已失传。",
	duxi: "杜袭（生卒年不详），字子绪，颍川郡定陵县（今河南省襄城县）人。三国时期魏国重臣，东汉末年颍川“四大名士”之一，济阴太守杜根的孙子。建安初年，投奔司空曹操，历任西鄂县令、议郎、丞相军咨祭酒、魏王侍中、丞相长史、驸马都尉。魏文帝时期，出任督军粮御史、尚书，累封武平亭侯。魏明帝时期，担任大将军曹真和司马懿的军师，抵御蜀国进攻，拜太中大夫，受封平阳乡侯。卒于任上，获赠少府，谥号为定。",
	gaogan: "高干（？~206年），字元才，陈留郡圉县（今河南杞县圉镇）人。东汉末年并州割据将领，蜀郡太守高躬之子、大将军袁绍外甥。出身陈留高氏，才志弘邈，文武秀出。早年联合荀谌游说韩馥让出冀州牧。袁绍平定河北后，以为并州牧。官渡之战时，在西线配合作战。因曹操早有准备，没有实质进展。袁绍死后，袁谭、袁尚与曹操大战于黎阳郡时，联合郭援攻打平阳郡，为马腾为首关中将领所败，郭援为庞德所斩。袁尚败走中山郡后，出降于曹操，仍为并州刺史。建安十年，兴兵反曹，固守壶关，成功抵挡乐进进攻。得知曹操亲征后，留下别将守城，亲往匈奴呼厨泉求救，没有成功。引兵攻略河东郡，屡为钟繇、张既所败。建安十一年，投奔荆州刘表。途经上洛时，为上洛都尉捕斩之。",
	huangchengyan: "黄承彦，生卒年不详，汉末三国时期沔阳名士，诸葛亮岳父，黄月英之父。南郡大士蔡讽的女婿，与襄阳名士上层社会圈子：庞统（凤雏）、庞德公、司马徽、徐庶等人交好。《襄阳记》：黄承彦者，高爽开列，为沔阳名士，谓诸葛孔明曰：“闻君择妇，身有丑女，黄头黑色，而才堪配。”孔明许，即载送之。时人以为笑乐，乡里为之谚曰：“莫作孔明择妇，正得阿承丑女。”",
	panshu: "潘淑（？－252年），会稽句章（今浙江省宁波市）人，是吴大帝孙权的皇后，吴少帝孙亮的母亲。和孙权是中国历代帝后中年龄差距较大的一对。潘淑少时与姐姐俱没入织室，容媚有宠，拜为夫人，生有一子孙亮。赤乌十三年（250年），孙权立孙亮为皇太子，翌年（251年）立潘淑为皇后。神凤元年（252年）暴崩，合葬蒋陵。世称潘淑为江东绝色，有神女之称。",
	zongyu: "宗预（？－264年），字德艳 ，荆州南阳郡安众县（今河南省南阳市）人。三国时期蜀汉官员、将领。曾随张飞入蜀助平益州，又受辟为丞相诸葛亮手下主簿，升任参军、右中郎将。诸葛亮逝世后，宗预受命出使孙吴，得到孙权的赞赏。迁后将军，出督永安，又升任征西大将军，并受封关内侯。公元258年（景耀元年），因病回成都，受任镇军大将军。蜀汉灭亡后，宗预随后主刘禅徙往洛阳，在中途病逝。宗预为人坦率耿直，多次出使孙吴并深得孙权的敬重，为吴、汉两国同盟的巩固作出了一定的贡献。",
	mengda: "孟达（?－228），字子度，本字子敬，因刘备的叔父名叫刘子敬，为避讳而改字。扶风郡郿人，三国时期人物。本为刘璋属下，后降刘备。关羽围樊城、襄阳时因不发兵救关羽而触怒刘备，于是投奔曹魏。此后，劝降刘封，未果。在魏官至散骑常侍、建武将军，封平阳亭侯。此后又欲反曹魏而归蜀汉，事败而死。",
	wolongfengchu: "沙比武将，懒得复制粘贴，自己去看「诸葛亮」和「庞统」的介绍吧。",
	caoshuang: "曹爽（？－249年2月9日），字昭伯，沛国谯县（今安徽亳州市）人。三国时期魏国权臣，大司马曹真长子。曹爽体态肥胖，凭借宗室身份，出入宫廷，交好太子曹叡。魏明帝即位，起家员外散骑侍郎，累迁城门校尉、散骑常侍，转武卫将军。太和五年（231年），袭封邵陵侯。景初三年（239年），魏明帝曹叡病危，拜大将军、假黄钺，与司马懿并为托孤大臣。少帝曹芳即位，加侍中，改封武安侯。势倾四海，声震天下。任用私人，专权乱政，侵吞公产。伐蜀失败，虚耗国力。起居逾制，软禁郭太后。正始十年，太傅司马懿发动高平陵政变，掌握魏国大权。曹爽失去大将军职务，以谋反之罪处死，夷灭三族。",
	zhangling: "张道陵（34年2月22日—156年），字辅汉，原名陵，道教正一道实际创立者，汉朝东汉时期丰邑（今江苏徐州丰县）人。太上老君降临蜀地，“授以三天正法，命为天师”，张道陵整合当时的：黄老派、方仙道、文始派等先秦修道团体，创立道教称正一盟威之道。后世尊称为“老祖天师”、“正一真人”、“三天扶教大法师”、高明上帝、张天师。著作《老子想尔注》，弟子有3000多人，设立24治，奠基天师道。张道陵、葛玄、许逊、萨守坚合称四大天师。张道陵创建道教的背景：当时在巴蜀一带，原有巴人信奉原始巫教，大规模的淫祀而害民。而这些祀奉鬼妖（学名为：妖邪）的法教巫师聚众敛财，无恶不作。张天师携王长、赵升二位弟子和黄帝九鼎丹经，来到北邙山修行，平定了那些祸害百姓的巫妖之教。川渝一带流传的张天师以太上老君剑印符箓大破鬼兵的故事就是以此为原型的。",
	caiyang: "蔡阳（？－201年），又作蔡扬，东汉丞相曹操部下武将，汝南太守。于建安六年（201）奉曹操之命攻击与刘备联合的汝南贼龚都等人，兵败被刘备所杀。明代小说《三国演义》改编为“云长擂鼓斩蔡阳”。",
	pujing: "湖北省当阳境内有一座山，名叫玉泉山。东汉建安末年，山上住着一个老和尚，法名普净，普净原来是沂水关镇国寺方丈，后因云游天下，来到此处，风这地方山明水秀，就于山中结草为庵，每天坐禅参道，身边只有一个小和尚，外出化一些斋饭，供养师父。在《三国演义》中，当关羽通过汜水关时，正是由于普净提醒，关羽才揭穿了卞喜的阴谋，并杀死了卞喜。关羽死后，其怨魂亦在普净的指点下醒悟，放下了心中的仇恨，专心致力于造福一方百姓。",
	huban: "为《三国演义》所杜撰的人物，正史无记载，荥阳太守王植麾下从事、桓帝时议郎胡华之子。关羽过五关斩六将时其中一关就是王植所镇守，胡班奉命放火夜袭关公，因敬服公之气概，并得其父托公所带家书，班看毕，叹曰：“险些误杀忠良！”故将之放走。胡班到荆州来投降关公，公念其旧日相救之情，甚爱之；令随费诗入川，见汉中王受爵。费诗辞别关公，带了胡班，自回蜀中去了。",
	chunyuqiong: "淳于琼（？－200年），字仲简，颍川（治今河南禹州）人。东汉时期官吏，于汉灵帝中平五年（188）被任命为西园八校尉之一的右校尉，与蹇硕、袁绍、鲍鸿、曹操、赵融、冯芳、夏牟同列。为袁绍大将，与张郃、高览等人齐名。在官渡之战时镇守乌巢，遭到曹操的偷袭而惨败，自己也被曹操处斩。",
	lvkuanglvxiang: "吕旷（生卒年不详），与吕翔同是袁绍属下，袁绍去世后，为袁尚守东平，后来投降曹操，并被封为列侯。在《三国演义》中，在曹操准备往南准备攻击前，两人跟著大将曹仁和将军李典准备要攻击刘备。但吕旷被赵云刺下马身亡，而吕翔也死于张飞矛下，可以算是出师未捷身先死。",
	caobuxing: "曹不兴，亦名弗兴，三国时著名画家。孙吴吴兴（今浙江湖州）人，生卒年不详。他在黄武年间（222—229年）享有很大的声誉。被称为“佛画之祖”。与东晋顾恺之、南朝宋陆探微、南朝梁张僧繇并称“六朝四大家”。又与赵达的算术、严武的弈棋、皇象的草书等号称“吴中八绝”。曹不兴善画龙、虎、马及人物，有“落墨为蝇”等传奇故事，其佛画成就对后世影响很大，相传其所画龙头令谢赫叹服不已。画迹今已不存，据《贞观公私画史》载，作品有《青溪龙》、《赤盘龙》、《南海监牧进十种马图》、《夷事夷兽样》、《桃源图》等，惜早已散佚。但之后的著名画家卫协直接师承其法。",
	gaolan: "高览，生卒年不详，一名高奂，本属袁绍部将，后官渡之战淳于琼被曹操击破，与张郃一同投降曹操，被封为偏将军，东莱侯。《三国演义》里，曾与许褚、徐晃大战不分胜负。201年刘备败走荆州时，高览奉命追杀，三合斩刘辟，而后被冲阵而来的赵云刺死。",
	xunchen: "荀谌，字友若，荀彧之兄（一说荀彧之弟），荀绲之子，颍川人。曾任军阀袁绍的幕僚。帮助袁绍游说韩馥，夺取了冀州。",
	sunshao: "孙邵（163年－225年），字长绪，青州北海国人（今山东潍坊市昌乐县西）。原为北海相孔融的功曹，被孔融称赞为可任朝廷要职的人才，后随刘繇到达江东，继而辅佐孙权。孙权称吴王后，孙邵成为吴国首任丞相，数年后病逝。由于孙邵和当时吴国史官的关系并不是很好，因此在史书中并没有详细的记载。",
	yuantanyuanshang: "袁谭、袁尚分别是袁绍的长子和第三子。袁绍坐拥青州、冀州、幽州、并州，本是北方最强诸侯，却于官渡大败，惭恨而终。虽然袁绍生前偏爱小儿子袁尚，却并未在继承人上有明确表态，这也导致本应以嫡长子身份继承的袁谭因郭图、审配伪立遗令未能如愿。曹操击败袁绍后，进而渡过黄河追击袁家残余势力，袁谭告急，但袁尚仅给他少量兵力。曹操得郭嘉之计退兵坐观其变，恰使两人此前的种种矛盾彻底爆发，袁谭不敌便引狼入室，派辛毗作为使者向曹操求援，让袁尚不得不北逃投奔乌桓。但袁谭也在之后背叛曹操兵败被杀。没多久，乌桓也被平定，袁熙、袁尚二人投奔公孙康后被斩首送还曹操。",
	xujing: "许靖（？—222年），字文休。汝南郡平舆县（今河南省平舆县）人。汉末至三国蜀汉时期重臣、名士、评论家。许靖因与从弟许邵俱以品评人物而闻名于世。后被刘翊推举为孝廉，任尚书郎。曾先后投奔孔伷、陈祎、许贡、王朗等人，于孙策攻王朗前与家属俱避难交州，受到交趾太守士燮礼待。其后受益州牧刘璋邀请，相继为巴郡、广汉、蜀郡太守。于刘备包围成都时欲越墙叛逃，为刘璋所获。刘备定蜀后欲将其弃用，在法正的建议下方以其为左将军长史。建安二十三年（218年），刘备称汉中王，任命许靖为汉中王傅。章武元年（221年），刘备称帝，任命许靖为司徒，位列三公。章武二年（222年），去世。有文集二卷。",
	hejin: "何进（？~189年），字遂高，南阳郡宛县（今河南南阳市宛城区）人。东汉时期外戚大臣，灵思皇后之兄。初以妹妹有宠，拜为郎中，出任虎贲中郎将、颍川太守，迁侍中、将作大匠、河南尹。黄巾起义时，拜为大将军，总镇京师，发现并镇压马元义的密谋，封为慎侯。为张大威望，在京师讲武结营，置西园八校尉。汉灵帝驾崩后，粉碎了中常侍蹇硕拥立皇子刘协的图谋，听从袁绍之言，博征智谋之士，内借元舅之资，外据辅政之权，独揽朝中大权。中平六年（189），不纳陈琳和曹操劝谏，阴结军阀董卓，联合袁绍谋诛宦竖。事情败露后，为中常侍张让等人损害，其后代是魏晋高门士族南阳何氏。",
	hansui: "韩遂（？－215年），字文约。凉州金城郡人。东汉末年军阀、将领，汉末群雄之一。原名韩约，后改名遂。韩遂最初闻名于西州，被羌胡叛军劫持并推举为首领，以诛宦官为名举兵造反，聚众十万，先后败皇甫嵩、张温、董卓、孙坚等名将，使得天下骚动。后受朝廷招安，拥兵割据一方长达三十余年。韩遂曾与马腾结为异姓兄弟，后二人关系破裂。袁绍、曹操相争之际，马腾、韩遂被钟繇说服，依附于曹操。马腾入京后，留其子马超统领部队。马超推举韩遂为都督起兵反叛曹操，为曹操所败，韩遂逃奔凉州，后又为夏侯渊所败，病死（一说被杀），享年七十余岁。",
	niujin: "牛金（生卒年不详），初为曹仁部曲将，周瑜军数万人来攻，前锋数千人始至，曹仁登城望，乃募得三百人，遣牛金迎战。但对方兵力较多，牛金遂被围困。曹仁亲自杀入阵中救出牛金。司马懿使牛金轻骑饵诱蜀军，刚交战诸葛亮就退兵，追至祁山。蜀将马岱入寇，司马懿遣将军牛金击退，斩千余级。公孙渊反，司马懿帅牛金、胡遵等步骑四万发自洛阳，后平定辽东。牛金官至后将军。",
	jianggan: "蒋干，字子翼，汉末三国时期的人物，九江（治今安徽寿县）人。历史上的蒋干是当时的名士、辩论家。而罗贯中在历史小说《三国演义》中则将蒋干刻画成了被周瑜所愚弄的小丑形象。",

	caoying: "曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。",
	simahui: "司马徽（约145—208年），字德操，颍川阳翟（今河南禹州）人。东汉末年名士，精通道学、奇门、兵法、经学。有“水镜先生”之称。 司马徽为人清雅，学识广博，有知人之明，并向刘备推荐了诸葛亮、庞统等人，受到世人的敬重。",
	baosanniang: "鲍三娘是中国民间传说中的人物，事迹多见于《花关索传》。相传她是鲍家庄鲍员外的小女儿。后来与关索成亲，关羽自传授其武艺，因此也造就了鲍三娘的文武双全。荆州失守之后鲍三娘就跟随关索一同投奔蜀汉，并随诸葛亮征讨南蛮。平定了南蛮之后，夫妻二人就此一直替诸葛亮镇守着南中，他们也的确留下了许多脍炙人口的行侠仗义故事，在民间广为流传。",

	pangdegong: '庞德公，字尚长，荆州襄阳人，东汉末年名士、隐士。 庞德公与当时徐庶、司马徽、诸葛亮、庞统等人交往密切。庞德公曾称诸葛亮为"卧龙"，庞统为"凤雏"，司马徽为"水镜"，被誉为知人。对诸葛亮、庞统等人早年影响较大，并得到诸葛亮的敬重。庞德公最后隐居于鹿门山，采药而终。',
	zhaotongzhaoguang: "赵统，赵云长子，生卒年不详。常山真定（今为河北正定）人，陈寿在正史《三国志》中记载赵云去世后，赵统袭爵永昌亭侯，官至蜀汉虎贲中郎督，加行领军。赵广（？—263年），三国时期蜀汉牙门将，赵云的次子，赵统之弟。随姜维前往沓中，官拜牙门将。曹魏司马氏派五路大军伐蜀时，随大将军姜维与魏兵战于疆川口，姜维败绩还守剑阁，赵广于沓中战死。",
	majun: "马钧，字德衡，扶风（今陕西扶风）人，生活在汉朝末期，是中国古代科技史上最负盛名的机械发明家之一。马钧年幼时家境贫寒，自己又有口吃的毛病，所以不擅言谈却精于巧思，后来在魏国担任给事中的官职。马钧最突出的表现有还原指南车；改进当时操作笨重的织绫机；发明一种由低处向高地引水的龙骨水车；制作出一种轮转式发石机，能连续发射石块，远至数百步；把木制原动轮装于木偶下面，叫做“水转百戏”。此后，马钧还改制了诸葛连弩，对科学发展和技术进步做出了贡献。",
	simazhao: "司马昭（211年—265年9月6日），字子上（小说《三国演义》为子尚），河内温县（今属河南）人。三国时期曹魏权臣，西晋王朝的奠基人之一。为晋宣帝司马懿与宣穆皇后张春华次子、晋景帝司马师之弟、晋武帝司马炎之父。 司马昭早年随父抗击蜀汉，多有战功。累官洛阳典农中郎将，封新城乡侯。正元二年（255年），继兄司马师为大将军，专揽国政。甘露五年（260年），魏帝曹髦被弑杀，司马昭立曹奂为帝。景元四年（263年），分兵遣钟会、邓艾、诸葛绪三路灭亡蜀汉，受封晋公。次年，进爵晋王。 咸熙二年（265年），司马昭病逝，年五十四，葬于崇阳陵。数月后，其子司马炎代魏称帝，建立晋朝，追尊司马昭为文帝，庙号太祖。",
	wangyuanji: "王元姬（217年—268年4月20日），东海郯县（今山东郯城西北）人。三国时期曹魏经学家王朗之孙女、王肃之女，晋文帝司马昭妻子，晋武帝司马炎与齐王司马攸的生母。 王元姬幼时便通《诗经》、《论语》，嫁司马昭后竭尽妇道、谦虚谨慎。其人颇有远见，曾预言钟会谋反之事。泰始元年（265年），司马炎建立西晋，尊王元姬为皇太后，宫号曰崇化宫。王元姬身处太后之位，提倡节俭，身体力行，作为众妃子的表率。在其治理之下，后宫井井有条，众人和睦相处。 泰始四年（268年），王元姬崩逝，终年五十二岁。谥号文明皇后，与司马昭合葬于崇阳陵。",

	liuye: "刘晔（？－234年），字子扬，淮南成德人，是光武帝刘秀之子阜陵王刘延的后代，三国时期魏国著名的战略家。刘晔年少知名，人称有佐世之才，是曹操手下举足轻重的谋士，他屡献妙计，对天下形势的发展往往一语中的。刘晔历仕数朝，是曹魏的三朝元老。",
	luzhi: "鲁芝（190年—273年），字世英。扶风郡郿县（今陕西眉县）人。魏晋时期名臣。官至光禄大夫，位特进，封阴平侯。泰始九年（273年）卒，时年八十四。谥号“贞”。",
	xizhicai: "戏志才（生卒年不详），或志才为字，名不详（一说名忠），东汉颍川郡（今河南禹州）人。经张邈推荐，成为曹操手下谋士。为人多谋略，曹操十分器重，不幸早卒。三国演义中并无此人，三国志中只有寥寥数语。由荀彧推荐给曹操，被称为有“负俗之讥”。死后，荀彧又举荐了郭嘉。<br>陈寿《三国志》记载：太祖与荀彧书曰：自志才亡后，莫可与计事者。汝、颍固多奇士，谁可以继之？彧荐嘉。",
	sunqian: "孙乾（？—约215年），字公祐。北海郡（治今山东昌乐西）人。东汉末年刘备的幕僚。最初被大儒郑玄推荐于州里。刘备领徐州，以孙乾为从事。自徐州跟随刘备，多次作为刘备的使臣。刘备定益州后，拜孙乾为秉忠将军，其待遇仅次于麋竺，与简雍相同。不久后便病逝。",
	miheng: "祢衡（173年－198年），字正平，平原郡（今山东德州临邑德平镇）人。个性恃才傲物．和孔融交好。孔融著有《荐祢衡表》，向曹操推荐祢衡，但是祢衡称病不肯去，曹操封他为鼓手，想要羞辱祢衡，却反而被祢衡裸身击鼓而羞辱。后来祢衡骂曹操，曹操就把他遣送给刘表，祢衡对刘表也很轻慢，刘表又把他送去给江夏太守黄祖，最后因为和黄祖言语冲突而被杀，时年二十六岁。黄祖对杀害祢衡一事感到十分后悔，便将其加以厚葬。",
	quyi: "麴义（又作曲义、鞠义），生卒年不详，是东汉末年军阀袁绍部下的将领，能征善战，屡建战功，早年在凉州，精通羌人战法，率领着袁绍的精锐部队。后来由于自恃功高而骄纵不轨，被袁绍所杀。",
	taoqian: "陶谦（132年－194年），字恭祖。丹阳郡（治今安徽宣城）人。汉末群雄之一。陶谦最初为诸生，在州郡任职，被举茂才，历任舒、卢二县令、幽州刺史、议郎，性格刚直，有大志。后随左车骑将军皇甫嵩对抗北宫伯玉，任扬武校尉，之后又随张温征韩遂、边章。中平五年（188年），徐州黄巾起，陶谦被朝廷任为徐州刺史，击破徐州黄巾，并推行屯田，恢复生产。尔后听从王朗、赵昱建议遣使进京朝贡，获拜安东将军、徐州牧，封溧阳侯。晚年因战事上为曹操大败，徐州大半几乎遭兵祸所害，以致过度忧劳而逝，终年六十三岁。",
	wangyun: "王允（137~192年），字子师，太原郡祁县（今山西祁县）人。东汉末年时期大臣。出身太原王氏，世代官宦。举孝廉出身，司徒高第征为侍御史。出任豫州刺史，勤政爱民。斗争中常侍张让失败后，去官隐居。中平六年，大将军何进掌权之后，辟为从事中郎，迁河南尹。董卓拥立汉献帝即位后，代替杨彪，拜太仆、尚书令、司徒，密谋刺死董卓，联合吕布共同执政，日益骄傲自满。初平三年（192年），董卓余党李傕、郭汜、樊稠等攻破长安。王允兵败处死，时年五十六岁。",
	bianfuren: "武宣皇后卞氏（159年12月30日－230年7月9日），琅邪开阳（今山东临沂）人，魏武帝曹操的正妻（继室），魏文帝曹丕、任城威王曹彰、陈思王曹植、萧怀王曹熊的母亲。原本是倡家，即汉代专门从事音乐歌舞的乐人家庭，后来与曹操成婚，建安初年，原配丁夫人被废，卞夫人成为曹操的正妻。曹丕继位后尊其为皇太后，曹叡继位后尊其为太皇太后。卞后在太和四年去世，与魏武帝曹操合葬高陵。",
	shamoke: "沙摩柯（？－222年），东汉末三国时期五溪蛮首领。汉章武元年（221年）初，为报关羽被东吴杀害之仇，刘备亲自领兵攻孙权，以金锦爵赏诱沙摩柯助战。章武二年（222年），吴大都督陆逊以火攻破刘备，率诸军齐击，汉军四十多个营寨被攻破，沙摩柯在大乱中匹马奔逃，被乱军杀死。",
	lvfan: "吕范（？－228年），字子衡。汝南郡细阳县（今安徽太和）人。汉末至三国时期吴国重臣。吕范年轻为汝南县吏，后避难寿春，结识孙策。此后随孙策、孙权征伐四方，对稳固孙氏在江东的统治做出了杰出的贡献，孙权将其比之于东汉开国元勋吴汉。吴国建立后，吕范累官至前将军、假节、扬州牧，封南昌侯。黄武七年（228年），吕范被拜为大司马，未得授官，便已病逝。孙权悲痛不已，遣使赠其大司马印绶。孙权还都建业后，以太牢礼祭祀吕范。",
	maojie: "毛玠（？—216年），字孝先，陈留平丘（今河南封丘）人。东汉末年大臣。年少时为县吏，以清廉公正著称。因战乱而打算到荆州避乱，但中途知道刘表政令不严明，因而改往鲁阳。后来投靠曹操，提出“奉天子以令不臣，脩耕植，畜军资”的战略规划，得到曹操的欣赏。<br>毛玠与崔琰主持选举，所举用的都是清廉正直之士。而毛玠为人廉洁，激起天下廉洁之风，一改朝中奢华风气。曹操大为赞赏，曹丕也亲自去拜访他。<br>曹操获封魏公后，毛玠改任尚书仆射，再典选举。又密谏曹操应该立嫡长子曹丕为魏国太子。崔琰被杀后，毛玠十分不快。后来有人诬告毛玠，曹操大怒，将毛玠收于狱中。及后在桓阶、和洽营救下，只被免职，不久逝世于家中。曹操在他死后赐他棺材和钱帛。",

	huangfusong: "字义真。安定郡朝那县（今宁夏彭阳）人。于黄巾起义时，以中郎将身份讨伐黄巾，用火攻大破张梁、张宝。后接替董卓进攻张梁，连胜七阵。掘张角墓，拜左车骑将军、冀州牧，因拒绝贿赂宦官而被免职。 董卓死，王允命其与吕布等共至郿坞抄籍董卓家产、人口，皇甫嵩将坞中所藏良家子女，尽行释放。",
	zangba: "其父臧戒，有二子臧艾与臧舜。年少时曾召集数人将获罪的父亲救出，此后四处流亡。后来成为陶谦麾下的骑都尉，负责募兵抵抗黄巾军。与孙观、尹礼等人拥兵驻屯于开阳，自成一股独立势力，后跟随吕布。吕布战败后，投降了曹操。后与袁绍、孙权等的战役里战功赫赫，官至镇东将军。",
	zhangren: "刘璋的属下，以忠勇著称。刘备入蜀时，张任曾劝刘璋提防刘备，但刘璋没有听从。魏延舞剑想趁机除掉刘璋时，张任出面对舞，解救刘璋。后在刘备进攻时于落凤坡射死了庞统。",
	jiling: "东汉末年袁术帐下将领，勇猛非常，曾奉命率军攻打小沛的刘备，在吕布辕门射戟的调停下撤兵。",
	zoushi: "军阀张济之妻，张绣之婶。张绣降曹后，邹氏遂被曹操霸占。贾诩献计趁机诛杀曹操，险些得手。曹操在损失爱将典韦、侄子曹安民和长子曹昂后方才逃出生天。",
	ganfuren: "刘备起兵后，于沛城娶甘氏为妾。后来，甘夫人随刘备到荆州，生了阿斗(也就是后主刘禅)。223年四月，刘备病死于白帝城，追谥甘夫人为“昭烈皇后”。",
	jiangfei: "请分别查看「蒋琬」和「费袆」的武将介绍。",
	mifuren: "刘备夫人。徐州别驾糜竺之妹。长坂兵败，她怀抱年仅两岁的刘禅在乱军中走散，被赵云发现；但麋夫人因为赵云只有一匹马，不肯上马，在将阿斗托付给赵云后投井而亡。",
	chendong: "陈武，东吴将领，孙策攻打刘繇，陈武前来相助，孙策非常喜爱陈武，拜为校尉，使作先锋。陈武以十数骑兵力杀敌五十余人。后于赤壁等战役屡立功勋。董袭献上严虎的人头来降孙策。赤壁之战，董袭受周瑜命，分兵去汉阳，合肥会战时接应太史慈，逍遥津支援孙权。濡须口之战时，董袭在船上督战，船覆董袭坚守殉职。",
	jiangqing: "擅长弓术。与周泰原为活跃于长江一带的江贼，孙策脱离袁术下江东自立门户时，和周泰一起率众投靠。 孙策攻刘繇，并引出城中麾下的陈横、薛礼、张英三名将领，陈横后被蒋钦一箭射杀，后与韩当等将乘舟过江，乱箭射杀敌军。曾在赤壁之战与周泰，还有擅使长枪的韩当率领水军在三江口踏江破敌。",
	kongrong: "字文举，鲁国人，东汉文学家，“建安七子”之首。献帝即位后任北军中侯、虎贲中郎将、北海相，时称孔北海后因触怒曹操，为曹操所杀。能诗善文。",
	mateng: "字寿成，扶风茂陵人，东汉末年征西将军，割据西凉一带的军阀，伏波将军马援的后代，官至卫尉，封爵槐里乡侯。因其子马超谋反，而被杀，夷灭三族。",
	tianfeng: "字元皓。东汉末年大军阀袁绍部下重要谋士。为人刚直不阿，曾多次向袁绍进言而不被采纳。后因谏阻袁绍征伐曹操而被袁绍下令监禁，并于官渡之战后，被袁绍杀害。",
	caochun: "字子和，沛国谯（今安徽亳州）人。东汉末年曹操麾下将领，曹仁之弟。曹纯是曹操部下精锐部队“虎豹骑”的统领者之一，因在平定北方的战役中颇有功绩，被加封为高陵亭侯。死后谥曰威侯。曹纯擅战，甚得人心，为人重纲纪，不失理智，好学问，敬爱学士，闻名天下。",
	hanba: "中国古代神话传说中引起旱灾的怪物。《诗·大雅·云汉》：“旱魃为虐，如惔如焚。”",
	cuiyan: "字季珪，清河东武城（今河北省清河县）人。东汉末年名士，司空崔林的从兄，曹操帐下谋士。崔琰相貌俊美，很有威望，曹操对他也很敬畏。建安二十一年（216年），崔琰在给杨训的书信中写道“时乎时乎，会当有变时”，曹操认为此句有不逊之意，因而将崔琰下狱，不久崔琰即被曹操赐死。",
	lifeng: "南阳（治今河南南阳）人，三国时期蜀汉大臣李严之子。230年，李严迁为骠骑将军，率军前往汉中，诸葛亮上表推举李丰为江州都督督军，以代替李严管理后方事务。李严去世后，李丰在蜀汉官至朱提太守。",
	sunru: "陆孙氏，是东吴上大将军、第三任丞相陆逊（字伯言）之妻，开创江东基业的吴侯孙策的女儿，陆抗的母亲。史册或文学作品中没有详细的介绍，故生卒年不详。后人取名为孙茹。",
	// 此孙茹非彼孙茹（徐琨出了孙茹还会远吗？）
	// sunru: "孙茹，孙坚之妹，其名载于《江浙通志》中。儿子徐琨亦为孙吴早期名将，当初母子二人随军跟从孙策渡长江时，因为暂时没足够的船，孙策感到苦恼打算暂时驻军江边。孙茹夫人献计以芦苇为筏，孙策大喜。吴军遂以神不知鬼不觉的速度过长江击破刘繇部将张英，立下平江东第一功。",
	lingcao: "东汉末年将领，吴郡余杭（今浙江余杭）人，凌统之父。早年跟随孙策转战江东。孙权统军后，凌操随其征伐黄祖，被甘宁射杀。《吴书》载：甘宁以善射，将兵在后，射杀校尉凌操。",
	zhugeguo: "诸葛果，为《历代神仙通鉴》中诸葛亮女儿的名字，《历代神仙通鉴》记录从上古到明代的神仙历史，因此诸葛果不见于任何史书。成都西南有朝真观，即乘烟观。相传，诸葛果在这里修行后成仙升天。",
	zhuling: "朱灵（生卒年不详），字文博，冀州清河国人，三国时期曹魏名将。官至后将军，封为高唐侯，谥号威侯。初为袁绍部将，后归顺曹操，随曹操征伐四方，屡建战功。",
	re_yuanshu: "字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。",
	fuwan: "伏完（?－209），琅邪东武（今属山东）人，东汉末大臣，汉献帝伏皇后之父。历官辅国将军、中散大夫、屯骑校尉。",
	liuxie: "字伯和，又字合。汉族，祖籍沛县，生于洛阳。汉灵帝第三子，被董卓迎立为帝。董卓被王允和吕布诛杀后，董卓部将李傕等攻入长安，再次挟持了他，后来逃出长安。公元196年，曹操控制了刘协，并迁都许昌，“挟天子以令诸侯”。公元220年，曹操病死，刘协被曹丕控制，随后被迫禅让于曹丕。",
	yuanshu: "字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。",
	gongsunzan: "字伯珪，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。",
	caohong: "字子廉，沛国谯（今安徽亳县）人，曹操从弟，曾献马并救护曹操。后多随军征伐，平兖州、征刘表、讨祝臂。曹丕即位时封曹洪为骠骑将军。曹叡即位，拜曹洪为后将军，更封乐城侯，后复拜为骠骑将军。曹洪逝世，追谥曰恭侯。",
	guanyinping: "河东解县（今山西运城）人，美髯公关羽之女。因在关羽的四个子女中排行第三，故又被称作“关三小姐”、“关氏三姐”或“关羽三小姐”。传说她是赵云的弟子、并随同诸葛亮平定南蛮。",
	xiahouba: "夏侯渊次子。本为曹魏武将，后因司马懿诛曹爽一族，夏侯霸身为曹氏宗室而心怀不安，遂投降蜀汉。后随蜀将姜维北伐，官至车骑将军。",
	daxiaoqiao: "大乔，庐江皖县人，为乔公长女，孙策之妻，容貌国色流离。小乔为大乔之妹，周瑜之妻，资貌绝伦。两人合称“二乔”。",
	yuejin: "字文谦，魏“五子良将”之一。容貌短小，以胆烈跟从曹操，南征北讨，战功无数。从击袁绍于官渡，奋勇力战，斩袁绍部将淳于琼。又从击袁绍子谭、尚于黎阳，斩其大将严敬。从平荆州，留屯襄阳，进击关羽、苏非等人，击退其众，南郡诸郡的山谷蛮夷都前往乐进处投降。后来从曹操征孙权，假进节。曹操回师后，留乐进与张辽、李典屯于合肥。又以乐进数有军功，迁右将军。建安二十三年逝世，谥曰威侯。",
	caoang: "字子修，曹操的长子，由于性情谦和且聪慧所以深得曹操喜爱。曹操征讨张绣时，羞辱张绣之婶邹氏，被张绣突然袭击。曹昂为保护曹操撤退，与典韦一起战死在宛城。",
	zhugejin: "字子瑜，吴国大臣，诸葛亮之兄，诸葛恪之父。经鲁肃推荐，为东吴效力。胸怀宽广，温厚诚信，得到孙权的深深信赖，努力缓和蜀汉与东吴的关系。建安二十五年（220年）吕蒙病逝，诸葛瑾代吕蒙领南郡太守，驻守公安。孙权称帝后，诸葛瑾官至大将军，领豫州牧。",
	zhangxingcai: "蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。",
	zumao: "字大荣，吴郡富春人，使用双刀。孙坚在汜水关被华雄击败，祖茂为保护主公而主动提出与孙坚交换头盔，孙坚因此得脱。祖茂将孙坚的赤帻挂在柱子上，准备以此引诱华雄，趁机偷袭，却反被华雄所杀。",
	dingfeng: "吴国将领。年少时以骁勇为小将，经常奋勇杀敌，屡立功勋，此后又于东兴之战中“雪中奋短兵”，大破侵犯东吴的魏军。吴景帝孙休在位时，丁奉设计除掉了东吴的权臣孙綝，被拜为大将军，后为右大司马、左军师。",
	panfeng: "冀州牧韩馥部下的上将。当十八路诸侯讨伐董卓之时，他奉韩馥之命前往汜水关前挑战董卓部下大将华雄，不敌被斩。",
	maliang: "字季常，因眉毛中有白毛，人称白眉马良，马谡的兄长。马良在兄弟五人中名声最佳，因此有“马氏五常，白眉最良”的说法。",
	zhugedan: "字公休，曹魏后期的重要将领，诸葛亮的族弟。曾与司马师一同平定毌丘俭、文钦的叛乱。之后因与被诛的夏侯玄、邓飏交厚，且见到王凌、毌丘俭等人的覆灭而心不自安，于甘露二年起兵，并得到东吴的支援，但于次年被镇压，被大将军司马胡奋所斩。",
	hetaihou: "大将军何进的妹妹，汉灵帝刘宏第二任皇后，汉少帝刘辩的生母。何氏出身于屠户家庭，后选入掖庭，得到汉灵帝临幸，生下皇子刘辩，并受封贵人。光和三年（180年），立为皇后。中平六年（189年），汉灵帝去世，刘辩继位，尊何氏为皇太后。董卓进京，废黜刘辩，不久毒杀刘辩及何氏。",
	sunluyu: "又名小虎，孙权与步练师之女。吴后期，孙鲁班诬陷孙鲁育参与谋反，于是孙峻杀害了孙鲁育。",
	wenpin: "本为刘表大将，刘表死后，跟随刘琮投降曹操。后曹操令其镇守江夏，多次阻止了关羽和孙权的进攻，为曹操倚为屏障的大将之一。",
	zhanglu: "汉宁太守，继父祖之后传播五斗米教。刘璋杀张鲁之母，二人因此结仇，多次交战。刘备攻益州时，刘璋向张鲁求援。张鲁派马超前往，但马超投降刘备。张鲁后见曹操自封魏王，想要自立为汉宁王，为谋士阎圃劝免。后曹操讨汉中，张鲁败，众人劝其烧粮仓，张鲁认为这是国家之物，未听从，为曹操所称赞。后投降曹操，任镇南将军。",
	mayunlu: "马腾之女，马超之妹，赵云之妻。父亲令其自幼习武，枪术非凡，寻常男子也是难以匹敌。",
	tadun: "东汉末年辽西乌桓（亦称乌丸）的首领，乌桓大人丘力居的从子，总摄三王部。曾出兵协助袁绍，击破公孙瓒。此后受袁绍假传朝廷诏命，与三王难楼、苏仆延、乌延等人同受单于称号及印绶。后难楼、苏仆延率其部众奉立楼班为单于，蹋顿于是退位为王。袁绍死后，收到被曹操击败的袁尚的求助，纠集逃亡至乌桓的幽州、冀州官吏百姓，企图夺回河北。东汉建安十二年，曹操亲征乌桓。八月，乌桓、袁氏部队于柳城白狼山为曹军所败，蹋顿在此战中被曹操的先锋张辽所斩杀。",
	yanbaihu: "吴郡乌程县人，原名“严虎”，别号“白虎”，东汉末年盘据吴郡一带山贼出身的地方豪帅。献帝初拥兵万人自固。孙策受袁术使渡江，攻破白虎等。白虎奔余杭，投靠许昭。建安二年，再度被孙策击败，至此不知亡佚何处。",
	simalang: "字伯达，“司马八达”之一。曹操任司空后，司马朗被辟为司空属官，又历任成皋令、堂阳长、元城令、丞相主簿、兖州刺史等职，所在皆有政绩，深受百姓爱戴。后司马朗与夏侯惇、臧霸等征讨吴国，到达居巢。军队中流行瘟疫，司马朗亲自去视察，派送医药，因此染病去世。",
	wangji: "字伯舆，东莱曲城人。三国时期魏国将领。王基文武兼备，才高于世，德溥于时，深得司马懿、司马师、司马昭的器重，尤其在南征毋丘俭，文钦之乱，东征诸葛诞之叛大规模军事活动中，王基与司马师、司马昭结下了深厚的军友情谊。魏景元二年王基去世，追赠司空，谥号为景侯。",
	buzhi: "吴重臣，最初避难江东，于孙权统事后，被召为主记。后游历吴地，又任海盐县长，还任东曹掾，出领鄱阳太守。建安十五年，转交州刺史、立武中郎将，率军接管往交州，追拜使持节、征南中郎将。次年，以平定交州功，加平戎将军，封广信侯。后迁右将军、左护军，改封临湘侯。孙权称帝后，拜骠骑将军，领冀州牧，后因冀州分与蜀汉而解牧职。又都督西陵。赤乌九年，代陆逊为丞相。",
	litong: "字文达，小字万亿。江夏平春（今河南信阳）人，汝南太守。早年以游侠闻名于江汝，在率众补充曹操兵源有功拜为阳安都尉，其间不因私而忘公，不因其妻子的求请而过问执法者。后来在曹操讨伐马超时出阵挑战，死于马超枪下。",
	mizhu: "原为徐州富商，后被徐州牧陶谦辟为别驾从事。陶谦病死后，奉其遗命迎接刘备。与其弟麋芳拒绝曹操的任命而跟随刘备，在刘备最潦倒之时给予刘备很大的帮助，使他重新振作。214年（建安十九年），刘备入主益州后，拜麋竺为安汉将军，地位在诸葛亮之上，为刘备手下众臣之最。吕蒙袭取荆州，麋芳举城投降，导致关羽兵败身亡，麋竺面缚请罪，刘备劝慰麋竺，对他待遇如初。",
	dongbai: "东汉末年县君，陇西临洮（今甘肃省岷县）人，董卓之孙女。董卓当权时，遍封其宗族，其中孙女董白尚未及笄，被封为渭阳君。",
	zhaoxiang: "赵云与马云騄之女，赵统赵广之妹，关平之妻。",
	heqi: "早年在平定山越的战争中立有大功，又讨平叛乱无数，身经百战，所向披靡，深受孙权器重。后来在与魏国的多次边境争斗中也屡立战功，官至后将军，并领徐州牧。",
	dongyun: "大汉重臣，掌军中郎将董和之子。东汉末年，其父董和事刘璋为益州太守，刘备立太子时，允被选为洗马，后为黄门侍郎，延熙六年（公元243年）加辅国将军，延熙七年（公元244年）以侍中守尚书令，任大将军费祎的副手。",
	mazhong: "本名狐笃，字德信，巴西阆中人，初次出场时随丞相诸葛亮南征孟获，诸葛亮遣马忠与赵云两路夹攻，大败蛮将阿会喃。孟获派弟孟优赴汉军处假投降，欲内应外合，诸葛亮将计就计，埋伏擒获孟获和诸洞酋长，马忠亦于此战立下战功。后诸葛亮北伐时亦数次出阵，立下汗马功劳。",
	kanze: "孙权谋士，在孙权广纳贤才之时与严畯等来到江东，甚为孙权礼遇。第一个识破周瑜打黄盖是苦肉计，后欣然向曹操献诈降书，被曹操识破后面不改色，哈哈大笑，一番妙言让曹操相信了诈降书，是苦肉计中的关键人物。后劝孙权不要设局请关羽。在刘备御驾亲征东吴时，向孙权举荐陆逊为都督，间接上挽救了东吴的命运。",
	lingju: "相传为吕布与貂蝉的女儿，被汉献帝掳走并训练为死士，被秘密送入宫中接近曹操，成为其“忘年红颜知己”。外表是柔弱的女子，实际上身怀致命的杀人绝技，等待时机给予曹操致命一击。",
	yangxiu: "字德祖，今陕西华阴人，是东汉末年的文学家。杨修学问渊博，极聪慧，任丞相府主簿。史载，“是时，军国多事，修总知外内，事皆称意”。",
	chenlin: "陈琳（？－217年），字孔璋，广陵射阳（今江苏宝应）人。东汉末年著名文学家，“建安七子”之一。",
	zhugeke: "字元逊，琅邪阳都（今山东沂南）人。三国时期吴臣，蜀丞相诸葛亮之侄，吴大将军诸葛瑾长子，从小就以神童著称，深受孙权赏识。",
	zhangbao: "东汉末年黄巾起义的首领之一，张角之弟，张梁之兄。中平元年（184）随兄张角起义，号称“地公将军”。",
	chengyu: "字仲德，本名程立，因梦中於泰山捧日，更名程昱。荀彧投曹操时向其举荐程昱。他参与了攻打吕布、袁绍、刘备、孙权的大部份战事，一直出谋献策，表现出众。",
	sunhao: "孙权之孙，孙和之子，东吴的末代君主。在位初期虽施行过明政，但不久即沉溺酒色，专于杀戮，变得昏庸暴虐，嗜用挖眼、剥皮等酷刑。280年，吴国被西晋所灭，孙皓投降西晋，被封为归命侯。",
	wutugu: "南蛮乌戈国主，身长丈二（约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。",
	shixie: "割据交州（今越南）一带的军阀，年少时师事刘陶，经逐渐升迁任交趾太守。后被朝廷加职绥南中郎将，迁安远将军，封龙度亭侯。在步骘接管交州时积极配合，归附孙权，被孙权加为左将军；此后又因诱降益州豪族雍闿而迁任卫将军，进封龙编侯。任交趾太守四十年。",
	guansuo: "关羽的三子。自荆州失陷后，逃难在鲍家庄养病，伤势痊愈之后入蜀，逢丞相诸葛亮南征，拜之为前部先锋，一同南征。",
	wanglang: "字景兴，汉末三国经学家，曹魏初期重臣。曾任会稽太守举兵抵抗孙策，后为曹操所征，被拜为谏议大夫等职。曹丕建立魏国后任命为司空。小说《三国演义》中他在阵前与诸葛亮饶舌比拼，最终被诸葛亮言词所驳倒，一时气愤坠马身亡。",
	zhangliang: "东汉末年黄巾起义首领之一，张角的三弟。中平元年（184）随兄起义，号称“人公将军”。遭到朝廷所派左中郎将皇甫嵩进攻时，他率军在广宗（今河北威县）进行反击。后因警戒疏忽，遭到汉军夜袭，兵败身亡。",
	wangcan: "王粲（177年－217年2月17日），字仲宣。山阳郡高平县（今山东微山两城镇）人。东汉末年文学家，“建安七子”之一，太尉王龚曾孙、司空王畅之孙。",
	re_jsp_pangtong: "庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
	lvdai: "吕岱（161年－256年），字定公，广陵海陵（今江苏如皋）人。三国时期吴国重臣、将领。吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年（256年），吕岱去世，年九十六。",
	lvqian: "吕虔（生卒年不详），字子恪。任城国（今山东济宁东南）人。汉末至三国曹魏时期将领。 吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。被推举为秀才，加任骑都尉，仍管辖泰山郡。 曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。再升任徐州刺史，加任威虏将军。任用王祥为别驾，将民政事务都委托于他，为世人所称赞。曹叡继位后，改封万年亭侯。吕虔死后，其子吕翻世袭万年亭侯。",
	panjun: "潘濬（一作潘浚）（？－239年），字承明。武陵郡汉寿县（今湖南汉寿）人。三国时期吴国重臣，蜀汉大司马蒋琬的表弟。 潘濬为人聪察，对问有机理，拜大儒宋忠为师，得到“建安七子”之一的王粲赏识。不到三十，即被荆州牧刘表任命为江夏从事，因按杀贪污的沙羡长而闻名。建安十六年（211年），被刘备任命为荆州治中从事，与守臣关羽不睦。建安二十四年（219年），孙权得荆州，拜潘濬为辅军中郎将。又迁奋威将军，封常迁亭侯。孙权称帝后，拜少府，进封刘阳侯，又改太常。黄龙三年（231年），授假节，与吕岱率军五万平五溪蛮夷叛乱，经三年而斩获数万，使得一方宁静。潘濬为人刚正不阿，在吕壹弄权时，屡请孙权将其诛杀。甚至想亲手击杀吕壹，使吕壹对他非常畏惧。 赤乌二年（239年），潘濬去世。",
	duji: "杜畿（163年—224年），字伯侯，京兆杜陵（今陕西西安东南）人。东汉末及三国时曹魏官吏及将领。西汉御史大夫杜延年的后代。历官郡功曹、守郑县令，善于断案。荀彧将他举荐给曹操，曹操任命他为司空司直，调任护羌校尉，使持节领西平太守。 曹丕受禅登基后，封杜畿为丰乐亭侯。官至尚书仆射。后在陶河试航时遇上大风沉没，杜畿淹死，死时六十二岁，曹丕为之涕泣，追赠其为太仆，谥戴侯。",
	zhoufang: "周鲂（生卒年不详），字子鱼。吴郡阳羡县（今江苏宜兴）人。三国时期吴国将领。周鲂年少时好学，被举为孝廉。历任宁国县长、怀安县长、钱塘侯相，一月之内，便斩杀作乱的彭式及其党羽，因而升任丹阳西部都尉。彭绮率数万人反叛时，周鲂被任命为鄱阳太守，与胡综共同将其生擒，因功加职昭义校尉。后诈降曹休，诱其率军接应，使曹休在石亭之战中一败涂地，战后因功被加职为裨将军，封关内侯。贼帅董嗣凭险骚扰豫章等郡，周鲂派间谍将其诱杀，不费兵卒即安定数郡。周鲂在鄱阳赏罚分明、恩威并施，于任职十三年后去世。",
	yanjun: "严畯（生卒年不详），字曼才，彭城（治今江苏徐州）人，三国时期孙吴官员、学者。性情忠厚，待人以诚。少好学，精通《诗》、《书》、《三礼》，又好《说文》。避乱江东，与诸葛瑾、步骘是好朋友，被张昭推荐给孙权作骑都尉、从事中郎。建安二十二年（217年），横江将军鲁肃去世，孙权打算让严畯接替其位。严畯很有自知之明，知道自己没有能力对抗在荆州的关羽和北面的曹魏，便坚决不接受此任命。后来担任尚书令。严畯享年七十八岁。著有《孝经传》、《潮水论》。",
	liuyao: "刘繇（一读yóu）（156年－197年），字正礼。东莱牟平（今山东牟平）人。东汉末年宗室、大臣，汉末群雄之一，齐悼惠王刘肥之后，太尉刘宠之侄。<br>刘繇最初被推举为孝廉，授郎中。任下邑县长时，因拒郡守请托而弃官。后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。兴平元年（194年），被任命为扬州刺史。他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。此后，刘繇又击破反叛的笮融，旋即病逝，年四十二。",
	liuyan: "刘焉（？－194年），字君郎（《华阳国志》又作君朗）。江夏郡竟陵县（今湖北省天门市）人。东汉末年宗室、军阀，汉末群雄之一，西汉鲁恭王刘余之后。<br>刘焉初以汉朝宗室身份，拜为中郎，历任雒阳令、冀州刺史、南阳太守、宗正、太常等官。因益州刺史郄俭在益州大肆聚敛，贪婪成风，加上当时天下大乱。刘焉欲取得一安身立命之所，割据一方，于是向朝廷求为益州牧，封阳城侯，前往益州整饬吏治。郄俭为黄巾军所杀，刘焉进入益州，派张鲁盘踞汉中，张鲁截断交通，斩杀汉使，从此益州与中央道路不通。刘焉进一步对内打击地方豪强，巩固自身势力，益州因而处于半独立的状态。兴平元年（194年），刘焉因背疮迸发而逝世，其子刘璋继领益州牧。",
};

export default characterIntro;
