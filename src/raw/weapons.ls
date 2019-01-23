# ============================================================================
# Column settings
# ============================================================================
# name:   name of this weapon
# type:   type of this weapon
# atk:    attack of this weapon
# hit:    hit number of this weapon
# f1:   the frame number of the attack motion
# f2:   the frame number of the rest motion
# range:  range boost of this weapon
# rare:   rarity of this weapon
# text:   extra message of this weapon
# ============================================================================

weapons = {
  slotWeapon: <[name type atk hit f1 f2 range rare text]>
  data: [
    ["脇差",                "sword",   5, 1, 15, 30, 140, 1, "攻撃速度+30%"]
    ["兜割",                "sword",  12, 1, 16, 30, 140, 1, "攻撃速度+20%"]
    ["太刀",                "sword",  14, 1, 19, 30, 145, 1, "範囲+5"]
    ["打刀",                "sword",  17, 1, 19, 30, 140, 1, ""]
    ["鉄砲切り兼光",        "sword",  20, 1, 16, 30, 140, 2, "攻撃速度+20%"]
    ["破魔の太刀",          "sword",  22, 1, 19, 30, 150, 2, "範囲+10"]
    ["雷切",                "sword",  31, 1, 17, 30, 140, 2, "攻撃速度+10%"]
    ["瓶割刀",              "sword",  35, 1, 19, 30, 140, 2, ""]
    ["清正の邪刀",          "sword",  24, 1, 19, 30, 140, 3, "敵の移動速度を少し下げる"]
    ["虎徹",                "sword",  30, 1, 15, 30, 140, 3, "攻撃速度+30%"]
    ["フルンティング",      "sword",  37, 1, 19, 30, 190, 3, "与ダメージの2%耐久が回復"]
    ["長巻",                "sword",  42, 1, 19, 30, 155, 3, "範囲+15"]
    ["古代刀",              "sword",  45, 1, 17, 30, 140, 3, "攻撃速度+10%"]
    ["蛇刀",                "sword",  48, 1, 19, 30, 150, 3, "範囲+10"]
    ["姫切",                "sword",  52, 1, 19, 30, 140, 3, ""]
    ["フラガラッハ",        "sword",  54, 1, 19, 30, 190, 3, "範囲+50 1體攻撃"]
    ["ちゅんちゅん丸",      "sword",  16, 1, 19, 22, 130, 4, "範囲-10 隙が25％短縮"]
    ["未来ガジェット6号機", "sword",  22, 1, 19, 30, 140, 4, "回復+10"]
    ["亘理来国光",          "sword",  30, 1, 19, 30, 140, 4, "防御+30"]
    ["真・清正の邪刀",      "sword",  35, 1, 19, 30, 140, 4, "敵の移動速度を少し下げる"]
    ["桜花爛漫刀",          "sword",  43, 1, 16, 30, 140, 4, "範囲+10 攻撃速度+20%"]
    ["妖刀村正",            "sword",  48, 1, 16, 30, 140, 4, "攻撃速度+20%"]
    ["魔剣フルンティング",  "sword",  48, 1, 19, 30, 190, 4, "与ダメージの2%耐久が回復"]
    ["千代金丸",            "sword",  50, 1, 19, 30, 140, 4, "回復+3"]
    ["同田貫",              "sword",  52, 1, 19, 30, 150, 4, "範囲+10"]
    ["蜂須賀虎徹",          "sword",  56, 1, 19, 30, 140, 4, "計略再使用-3秒"]
    ["さやかの剣",          "sword",  56, 2, 19, 30, 140, 4, "2連攻撃 1體攻撃"]
    ["明鏡止水",            "sword",  57, 1, 19, 30, 145, 4, "範囲+5"]
    ["童子切安綱",          "sword",  59, 1, 19, 30, 140, 4, "防禦+10"]
    ["飛天鳳凰丸",          "sword",  61, 1, 19, 30, 140, 4, "耐久+100"]
    ["鬼丸國綱",            "sword",  66, 1, 19, 30, 140, 4, ""]
    ["エクスカリバー",      "sword",  71, 1, 19, 30, 140, 7, "キャメロット城"]
    ["魔剣フラガラッハ",    "sword",  72, 1, 19, 30, 190, 4, "範囲+50 1體攻撃"]

    ["竹槍",                "lance",   5, 1, 19, 30, 200, 1, "攻撃速度+20%"]
    ["薙刀",                "lance",   8, 1, 23, 30, 200, 1, "防禦+5"]
    ["長柄鎌",              "lance",  10, 1, 23, 30, 210, 1, "範囲+10"]
    ["直槍",                "lance",  13, 1, 23, 30, 200, 1, ""]
    ["裂空の真槍",          "lance",  14, 1, 19, 30, 200, 2, "攻撃速度+20%"]
    ["陣中槍",              "lance",  26, 1, 23, 30, 200, 2, ""]
    ["名槍ロン",            "lance",  13, 1, 23, 30, 200, 3, "耐久+400"]
    ["幸村の朱槍",          "lance",  14, 1, 40, 30, 225, 3, "速度低下 範囲+25 "]
    ["雙龍槍",              "lance",  26, 1, 19, 30, 200, 3, "攻撃速度+20%"]
    ["片鎌槍",              "lance",  33, 1, 20, 30, 200, 3, "攻撃速度+10%"]
    ["極大長槍",            "lance",  36, 1, 23, 30, 205, 3, "範囲+5"]
    ["岩融",                "lance",  38, 1, 23, 30, 200, 3, ""]
    ["利家の巨槍",          "lance",  48, 1, 40, 30, 200, 3, "速度低下"]
    ["聖槍ロンゴミニアド",  "lance",  20, 1, 23, 30, 200, 4, "耐久+500"]
    ["両刃櫃槍",            "lance",  20, 2, 57, 30, 200, 4, "速度低下 2連攻撃"]
    ["真・幸村の朱槍",      "lance",  21, 1, 40, 30, 225, 4, "速度低下 範囲+25 "]
    ["門松寿槍",            "lance",  22, 1, 23, 30, 200, 4, "防御+25"]
    ["桜花爛漫槍",          "lance",  30, 1, 19, 30, 210, 4, "範囲+10 攻撃速度+20%"]
    ["とんぼきり",          "lance",  31, 1, 23, 30, 220, 4, "範囲+20"]
    ["蜻蛉切",              "lance",  35, 1, 19, 30, 200, 4, "攻撃速度+20%"]
    ["御手杵",              "lance",  43, 1, 23, 30, 205, 4, "範囲+5"]
    ["夜叉彦槍",            "lance",  44, 1, 23, 30, 200, 4, "計略再使用-3秒"]
    ["人間無骨",            "lance",  45, 1, 23, 30, 200, 4, "回覆+3"]
    ["日本號",              "lance",  47, 1, 23, 30, 200, 4, "防禦+5"]
    ["杏子の槍",            "lance",  47, 1, 23, 30, 200, 4, "槍の貫通距離が1.2倍"]
    ["大千鳥十文字槍",      "lance",  49, 1, 23, 30, 200, 4, "耐久+50"]
    ["山姥の槍",            "lance",  51, 1, 23, 30, 200, 4, ""]
    ["真・利家の巨槍",      "lance",  58, 1, 40, 30, 200, 4, "速度低下"]

    ["木槌",                "hammer",  6, 1, 21, 30, 100, 1, "攻撃速度+30%"]
    ["棍棒",                "hammer", 28, 1, 27, 30, 100, 1, ""]
    ["金棒",                "hammer", 27, 1, 27, 30, 110, 2, "範囲+10"]
    ["戦鎚",                "hammer", 41, 1, 27, 30, 100, 2, ""]
    ["神木の槌",            "hammer", 54, 1, 27, 30, 100, 3, ""]
    ["義重の重槌",          "hammer", 59, 1, 27, 30, 100, 3, "直撃+50% 暴風範囲が半減"]
    ["義弘の暴槌",          "hammer", 73, 1, 40, 30, 100, 3, "速度低下"]
    ["わたぬきやくも",      "hammer",  3, 1, 27, 30, 100, 4, ""]
    ["桜花爛漫槌",          "hammer", 36, 1, 23, 30, 110, 4, "範囲+10 攻撃速度+20%"]
    ["打ち出の小槌",        "hammer", 44, 1, 21, 30, 100, 4, "攻撃速度+30%"]
    ["軍配形天守槌",        "hammer", 54, 1, 23, 30, 100, 4, "攻撃速度+20%"]
    ["鬼の金棒",            "hammer", 60, 1, 27, 30, 110, 4, "範囲+10"]
    ["魔滅の金棒",          "hammer", 60, 1, 27, 30, 100, 4, "敵をすこし後退させる"]
    ["源翁鎚",              "hammer", 74, 1, 27, 30, 100, 4, ""]
    ["真・義重の重槌",      "hammer", 81, 1, 27, 30, 100, 4, "直撃+50% 暴風範囲が半減"]
    ["真・義弘の暴槌",      "hammer", 100, 1, 40, 30, 100, 4, "速度低下"]

    ["ウッドシールド",      "shield",  3, 1, 24, 30,  90, 1, "防禦+10"]
    ["バックラー",          "shield",  5, 1, 24, 30,  90, 1, "防禦+12"]
    ["ブロンズシールド",    "shield",  2, 1, 24, 30,  90, 1, "防禦+15"]
    ["タワーシールド",      "shield",  8, 1, 24, 30,  90, 2, "防禦+29"]
    ["カイトシールド",      "shield", 10, 1, 24, 30,  90, 2, "防禦+27"]
    ["ラウンドシールド",    "shield", 13, 1, 24, 30,  90, 2, "防禦+23"]
    ["ｼｭﾃﾌｧﾝの闘盾",        "shield", 10, 1, 24, 30, 110, 3, "範囲+20 防禦+33"]
    ["プリトウェン",        "shield", 15, 1, 24, 30,  90, 3, "防禦+44"]
    ["アキレウスの盾",      "shield", 20, 1, 24, 30,  90, 3, "防禦+37"]
    ["氏康の獅盾",          "shield", 44, 1, 42, 30,  90, 3, "防御を10%無視 速度低下 防禦+29"]
    ["ほむらの盾",          "shield", 13, 1, 24, 30, 190, 4, "1體攻撃 足止-2 範囲+100 防禦+32"]
    ["桜花爛漫盾",          "shield", 14, 1, 20, 30, 100, 4, "攻撃速度+20% 範囲+10 防禦+41"]
    ["真・ｼｭﾃﾌｧﾝの闘盾",    "shield", 15, 1, 24, 30, 110, 4, "範囲+20 防禦+43"]
    ["ダクネスの剣",        "shield", 18, 1, 24, 30,  90, 4, "防禦+22 敵3体を足止め"]
    ["ちょこしぃるど",      "shield", 21, 1, 24, 30,  90, 4, "回復+3 防禦+30"]
    ["アイアースの盾",      "shield", 23, 1, 24, 30,  90, 4, "耐久+300 防禦+48"]
    ["イージスの盾",        "shield", 25, 1, 24, 30,  90, 4, "防禦+55"]
    ["スヴェル",            "shield", 30, 1, 24, 30,  90, 4, "防禦+50"]
    ["幻想聖盾",            "shield", 52, 1, 24, 30,  90, 4, "防禦+36"]
    ["真・氏康の獅盾",      "shield", 59, 1, 42, 30,  90, 4, "防御を10%無視 速度低下 防禦+37"]

    ["手裏剣",              "kunai",   8, 1, 22, 22, 220, 1, "攻撃速度上昇 6體攻撃"]
    ["スローイングナイフ",  "kunai",  21, 1, 24, 22, 220, 1, "飛行特攻 3體攻撃"]
    ["苦無",                "kunai",  26, 1, 24, 22, 220, 1, "4體攻撃"]
    ["円戦輪",              "kunai",  38, 1, 27, 22, 240, 1, "攻撃速度低下 範圍+20 2體攻撃"]
    ["四方手裏剣",          "kunai",  16, 1, 22, 22, 220, 2, "攻撃速度上昇 6體攻撃"]
    ["ブーメランダガー",    "kunai",  27, 1, 24, 22, 220, 2, "飛行特攻 3體攻撃"]
    ["忍の苦無",            "kunai",  34, 1, 24, 22, 220, 2, "4體攻撃"]
    ["双刃戦輪",            "kunai",  51, 1, 27, 22, 245, 2, "攻撃速度低下 範圍+25 2體攻撃"]
    ["八方手裏剣",          "kunai",  24, 1, 22, 22, 220, 3, "攻撃速度上昇 6體攻撃"]
    ["ウォシュレ",          "kunai",  34, 1, 24, 22, 220, 3, "飛行特攻 3體攻撃"]
    ["十字苦無",            "kunai",  42, 1, 24, 22, 220, 3, "4體攻撃"]
    ["四方戦輪",            "kunai",  63, 1, 27, 22, 250, 3, "攻撃速度低下 範圍+30 2體攻撃"]
    ["月光の短剣",          "kunai",  30, 1, 20, 22, 220, 4, "飛行特攻 3體攻撃 攻撃速度+20%"]
    ["ダマスキナードナイフ", "kunai", 44, 1, 24, 22, 220, 4, "飛行特攻 3體攻撃"]
    ["夜叉の苦無",          "kunai",  55, 1, 24, 22, 220, 4, "4體攻撃"]
    ["白鏡の戦輪",          "kunai",  84, 1, 27, 22, 260, 4, "攻撃速度低下 範圍+40 2體攻撃"]
    
    ["鏑矢",                "bow",     6, 1, 19, 18, 290, 1, "範囲+10"]
    ["柳葉",                "bow",     9, 1, 17, 18, 280, 1, "攻撃速度+10%"]
    ["破壊の弓",            "bow",    11, 1, 19, 18, 280, 1, ""]
    ["重藤の弓",            "bow",    14, 1, 16, 18, 280, 2, "攻撃速度+20%"]
    ["破魔弓",              "bow",    15, 1, 19, 18, 290, 2, "範囲+10"]
    ["雷の弓",              "bow",    20, 1, 17, 18, 280, 2, "攻撃速度+10%"]
    ["炎の弓",              "bow",    23, 1, 19, 18, 280, 2, ""]
    ["天鹿児弓",            "bow",    24, 1, 16, 18, 280, 3, "攻撃速度+20%"]
    ["光義の弓",            "bow",    26, 1, 19, 18, 300, 3, "範囲+20"]
    ["殲滅の猛弓",          "bow",    32, 1, 19, 18, 285, 3, "範囲+5"]
    ["為朝の弓",            "bow",    34, 1, 19, 18, 280, 3, ""]
    ["元就の謀弓",          "bow",     3, 1, 69, 18, 280, 3, "速度低下 3體攻撃"]
    ["昌景の赤弓",          "bow",    13, 2, 48, 18, 280, 3, "速度低下 2連攻撃"]
    ["天の羽々矢",          "bow",    29, 1, 15, 18, 280, 4, "攻撃速度+30%"]
    ["桜花爛漫弓",          "bow",    31, 1, 16, 18, 290, 4, "範囲+10 攻撃速度+20%"]
    ["平泉の夏弓",          "bow",    31, 1, 19, 18, 280, 4, "与ダメージの3%耐久が回復"]
    ["聚楽の弓",            "bow",    35, 1, 16, 18, 280, 4, "攻撃速度+20%"]
    ["まどかの弓",          "bow",    38, 1, 19, 18, 300, 4, "範囲+20 矢の着弾速度高速化"]
    ["雷上動",              "bow",    40, 1, 17, 18, 280, 4, "攻撃速度+10%"]
    ["弓張月",              "bow",    43, 1, 19, 18, 290, 4, "範囲+10"]
    ["梓弓",                "bow",    45, 1, 19, 18, 280, 4, ""]
    ["真・元就の謀弓",      "bow",    12, 1, 69, 18, 280, 4, "速度低下 3體攻撃"]
    ["真・昌景の赤弓",      "bow",    22, 2, 48, 18, 280, 4, "速度低下 2連攻撃"]

    ["連弩",                "xbow",   18, 1, 42, 24, 250, 2, "2體攻撃"]
    ["木弩",                "xbow",   10, 1, 19, 24, 250, 1, "攻撃速度+20%"]
    ["石弩",                "xbow",   28, 1, 24, 24, 250, 1, ""]
    ["東方弩",              "xbow",   54, 1, 24, 24, 250, 2, ""]
    ["高虎の忠弩",          "xbow",   35, 1, 24, 24, 250, 3, "敵の移動速度を少し下げる"]
    ["舞鶴",                "xbow",   55, 1, 20, 24, 250, 3, "攻撃速度+20%"]
    ["近衛の弩",            "xbow",   72, 1, 24, 24, 270, 3, "範囲+20"]
    ["正則の剛弩",          "xbow",   84, 1, 38, 24, 250, 3, "速度低下"]
    ["わたぬき千狐",        "xbow",    5, 1, 24, 24, 250, 4, ""]
    ["多賀柵弩",            "xbow",   14, 1, 57, 24, 270, 4, "3體攻撃 範囲+20"]
    ["無雙弩",              "xbow",   27, 1, 57, 24, 250, 4, "3體攻撃"]
    ["真・高虎の忠弩",      "xbow",   51, 1, 24, 24, 250, 4, "敵の移動速度を少し下げる"]
    ["桜花爛漫弩",          "xbow",   57, 1, 20, 24, 260, 4, "範囲+10 攻撃速度+20%"]
    ["緋鯉の弩",            "xbow",   55, 1, 24, 24, 250, 4, "巨大化の気を5%軽減"]
    ["六花の水弩",          "xbow",   79, 1, 24, 24, 250, 4, "敵を少し後退させる"]
    ["龍髭の弩",            "xbow",   83, 1, 24, 24, 270, 4, "範囲+20"]
    ["床子弩",              "xbow",   96, 1, 24, 24, 250, 4, ""]
    ["真・正則の剛弩",      "xbow",  113, 1, 38, 24, 250, 4, "速度低下"]

    ["手銃",                "arqu",    4, 1, 31, 30, 340, 1, "攻撃速度+20%"]
    ["鉄砲",                "arqu",   15, 1, 37, 30, 360, 1, "範囲+20"]
    ["木砲",                "arqu",   19, 1, 37, 30, 350, 1, "範囲+10"]
    ["紅蓮の小筒",          "arqu",   25, 1, 37, 30, 340, 1, ""]
    ["連裝銃",              "arqu",    8, 2, 82, 30, 340, 2, "2連攻撃 敵の移動速度を下げる"]
    ["大筒",                "arqu",   35, 1, 37, 30, 360, 2, "範囲+20"]
    ["氏郷の燕砲",          "arqu",    8, 3, 102, 30, 340, 3, "3連攻撃 敵を少し後退させる"]
    ["回転砲",              "arqu",   12, 3, 102, 30, 340, 3, "3連攻撃 敵の移動速度を下げる"]
    ["墨縄",                "arqu",   33, 1, 31, 30, 340, 3, "攻撃速度+20%"]
    ["ヴァリス",            "arqu",   39, 1, 37, 30, 340, 3, "敵の防御を8%無視"]
    ["氷結の大筒",          "arqu",   54, 1, 37, 30, 360, 3, "範囲+20"]
    ["國友鉄砲",            "arqu",   57, 1, 37, 30, 350, 3, "範囲+10"]
    ["雷光の中筒",          "arqu",   50, 1, 34, 30, 340, 3, "攻撃速度+10%"]
    ["信玄砲",              "arqu",   50, 1, 37, 30, 340, 3, "後退距離若干上昇"]
    ["天海の鉄砲",          "arqu",   65, 1, 37, 30, 340, 3, ""]
    ["三成の烈砲",          "arqu",   70, 1, 62, 30, 340, 3, "速度低下"]
    ["真・氏郷の燕砲",      "arqu",   14, 3, 102, 30, 340, 4, "3連攻撃 敵を少し後退させる"]
    ["滅・ガトリング砲",    "arqu",   21, 3, 102, 30, 340, 4, "3連攻撃 敵の移動速度を下げる"]
    ["桜花爛漫銃",          "arqu",   52, 1, 31, 30, 350, 4, "範囲+10 攻撃速度+20%"]
    ["未来ガジェット1号機", "arqu",   52 1, 37, 30, 340, 4, "敵の移動速度を一瞬だけ0にする"]
    ["八咫烏",              "arqu",   58, 1, 31, 30, 340, 4, "攻撃速度+20%"]
    ["ヴァリス改",          "arqu",   58, 1, 37, 30, 340, 4, "敵の防御を10%無視"]
    ["白鷺の大筒",          "arqu",   60, 1, 33, 27, 340, 4, "攻撃速度+10% 隙を10%短縮"]
    ["萩防楯鉄砲",          "arqu",   62, 1, 37, 30, 340, 4, "防御+30"]
    ["三崎の長筒",          "arqu",   67, 1, 37, 30, 340, 4, "範囲内の海洋兜へのダメージが10%増加"]
    ["ﾏﾐのﾏｽｹｯﾄ銃",         "arqu",   69, 1, 37, 30, 340, 4, "範囲内の妖怪へのダメージが10%増加"]
    ["船形今治砲",          "arqu",   73, 1, 37, 30, 360, 4, "攻撃範囲+20"]
    ["雨夜手拍子",          "arqu",   80, 1, 37, 30, 340, 4, ""]
    ["真・三成の烈砲",      "arqu",   96, 1, 62, 30, 340, 4, "速度低下"]

    ["木製大砲",            "cannon",  7, 1, 35, 45, 340, 1, "攻撃速度+20%"]
    ["設置式大筒",          "cannon", 11, 1, 42, 45, 340, 1, ""]
    ["芝辻砲",              "cannon", 16, 1, 35, 45, 340, 2, "攻撃速度+20%"]
    ["セーカー砲",          "cannon", 18, 1, 42, 45, 360, 2, "範囲+20"]
    ["國友の大砲",          "cannon", 23, 1, 42, 45, 340, 2, ""]
    ["カルバリン砲",        "cannon", 29, 1, 42, 45, 360, 3, "範囲+20"]
    ["半加農砲",            "cannon", 37, 1, 42, 45, 340, 3, ""]
    ["兼続の愛砲",          "cannon", 47, 1, 42, 45, 340, 3, "爆風範囲低下"]
    ["長政の激砲",          "cannon", 48, 1, 67, 45, 340, 3, "速度低下"]
    ["未来ガジェット5号機", "cannon", 18, 1, 42, 45, 340, 4, "敵の攻撃と防御を10%下げる"]
    ["桜花爛漫砲",          "cannon", 25, 1, 35, 45, 350, 4, "範囲+10 攻撃速度+20%"]
    ["門松平蜘蛛砲",        "cannon", 31, 1, 42, 45, 360, 4, "範囲+20 爆風範囲やや拡大"]
    ["車山形大砲-祭-",      "cannon", 33, 1, 35, 45, 340, 4, "攻撃速度+20%"]
    ["古天明平蜘蛛砲",      "cannon", 40, 1, 42, 45, 340, 4, "爆風範囲やや拡大"]
    ["加農砲",              "cannon", 40, 1, 42, 45, 360, 4, "範囲+20"]
    ["國崩し",              "cannon", 45, 1, 38, 45, 340, 4, "攻撃速度+10%"]
    ["散星",                "cannon", 50, 1, 42, 45, 340, 4, ""]
    ["真・兼続の愛砲",      "cannon", 60, 1, 42, 45, 340, 4, "爆風範囲低下"]
    ["真・長政の激砲",      "cannon", 65, 1, 67, 45, 340, 4, "速度低下"]

    ["錫杖",                "spell",   6, 1, 42, 30, 260, 1, "範囲+20"]
    ["筆",                  "spell",  12, 1, 42, 30, 240, 1, ""]
    ["金銅錫杖",            "spell",  16, 1, 42, 30, 260, 2, "範囲+20"]
    ["弘法の筆",            "spell",  24, 1, 42, 30, 240, 2, ""]
    ["小十郎の響杖",        "spell",  22, 1, 35, 30, 240, 3, "攻撃速度+20%"]
    ["三蔵法師の杖",        "spell",  28, 1, 42, 30, 260, 3, "範囲+20"]
    ["閻魔の筆",            "spell",  36, 1, 42, 30, 240, 3, ""]
    ["ウィズの氷晶",        "spell",  20, 1, 42, 30, 240, 4, "敵の攻撃を下げる"]
    ["桜花爛漫筆",          "spell",  26, 1, 35, 30, 250, 4, "範囲+10 攻撃速度+20%"]
    ["真・小十郎の響杖",    "spell",  31, 1, 35, 30, 240, 4, "攻撃速度+20%"]
    ["菩薩の杖",            "spell",  37, 1, 42, 30, 260, 4, "範囲+20"]
    ["道風の筆",            "spell",  42, 1, 38, 30, 240, 4, "攻撃速度+10%"]
    ["役小角の杖",          "spell",  53, 1, 42, 30, 240, 4, ""]
    ["第六天魔王の錫杖",    "spell",  62, 1, 42, 30, 240, 4, "速度低下効果が上昇"]

    ["玄武",                "fist",   25, 3, 32, 19,  90, 4, "邯鄲"]
    ["青龍",                "fist",   30, 3, 32, 19,  90, 5, "平遙古城"]
    ["青龍",                "fist",   30, 3, 32, 19,  90, 5, "麗江古城"]
    ["白虎",                "fist",   35, 3, 32, 19,  90, 6, "長安城"]
    ["青龍",                "fist",   35, 3, 32, 19,  90, 6, "洛陽城"]
    ["黃龍",                "fist",   45, 3, 32, 19,  90, 7, "紫禁城"]
    ["天武拳",              "fist",   45, 3, 32, 19,  90, 7, "成都城"]
    ["旋風拳",              "fist",   45, 3, 32, 19,  90, 7, "琉球御城"]

    ["扇",                  "dance",   5, 1, 62, 60, 300, 1, "窪田城"]
    ["扇改",                "dance",  11, 1, 62, 60, 300, 2, "久保田城"]
    ["衝波扇",              "dance",  14, 1, 62, 60, 300, 3, "鶴ヶ岡城"]
    ["スマイルボイス",      "dance",  13, 1, 62, 60, 300, 2, "尾山御坊"]
    ["スイートボイス",      "dance",  14, 1, 62, 60, 300, 3, "山科本願寺"]
    ["鬼の団扇",            "dance",  18, 1, 62, 60, 300, 4, "鬼ノ城"]
    ["鮮緑の扇",            "dance",  22, 1, 62, 60, 300, 5, "近江八幡城"]
    ["慈悲のマイク",        "dance",  22, 1, 62, 60, 300, 5, "長谷堂城"]
    ["ハッピーボイス",      "dance",  25, 1, 62, 60, 300, 6, "石山御坊"]
    ["ゴールドマイク",      "dance",  25, 1, 62, 60, 300, 6, "水府城"]
    ["舞扇",                "dance",  25, 1, 62, 60, 300, 6, "勝竜寺城"]
    ["エレガントボイス",    "dance",  25, 1, 62, 60, 300, 6, "カゼルタ宮殿"]
    ["ミラクルボイス",      "dance",  35, 1, 62, 60, 300, 7, "大阪城"]
    ["オベリスクタクト",    "dance",  35, 1, 62, 60, 300, 7, "シェーンブルン宮殿"]
    ["ホーリーボイス",      "dance",  35, 1, 62, 60, 300, 7, "モン・サン＝ミッシェル"]

    ["浮城の鈴",            "bell",   20, 1, 156, 1, 320, 4, "高島城"]
    ["真鍮の鈴",            "bell",   20, 1, 156, 1, 320, 5, "濱田城"]
    ["舞鶴の鈴",            "bell",   20, 1, 156, 1, 320, 5, "天童城"]
    ["シルバーベル",        "bell",   28, 1, 156, 1, 320, 6, "アンボワーズ城"]
    ["祝福のベル",          "bell",   28, 1, 156, 1, 320, 6, "［花嫁衣装］アンボワーズ城"]
    ["シルバーベル",        "bell",   28, 1, 156, 1, 320, 6, "城塞都市ルクセンブルク"]
    ["海辺の風鈴",          "bell",   28, 1, 156, 1, 320, 6, "［夏］指月伏見城"]
    ["太平の鈴",            "bell",   28, 1, 156, 1, 320, 6, "新田金山城"]
    ["グレート・ベル",      "bell",   28, 1, 156, 1, 320, 6, "ウェストミンスター宮殿"]
    ["天神の鈴",            "bell",   28, 1, 156, 1, 320, 6, "川越城"]
    ["金の鈴",              "bell",   35, 1, 156, 1, 320, 7, "指月伏見城"]
    ["夜桜の鈴",            "bell",   40, 1, 156, 1, 320, 7, "烏城"]

    ["銀の杖",              "staff",  25, 1, 37, 30, 240, 4, "アイリーン・ドナン城"]
    ["深緑の杖",            "staff",  30, 1, 37, 30, 240, 5, "スピシュ城"]
    ["荊棘の杖",            "staff",  35, 1, 37, 30, 240, 6, "ユッセ城"]
    ["荊棘の杖",            "staff",  35, 1, 37, 30, 240, 6, "ペーナ宮殿"]
    ["荊棘の箒",            "staff",  35, 1, 37, 30, 240, 6, "［ハロウィン］ユッセ城"]
    ["クリスタルの杖",      "staff",  35, 1, 37, 30, 240, 6, "ホーエンザルツブルク城"]
    ["クリスタルの杖",      "staff",  35, 1, 37, 30, 240, 6, "シュノンソー城"]
    ["クリスタルの杖",      "staff",  35, 1, 37, 30, 240, 6, "セゴビアのアルカサ"]
    ["クリスタルの杖",      "staff",  35, 1, 37, 30, 240, 6, "リンドス・アクロポリス"]
    ["クリスタルの杖",      "staff",  35, 1, 37, 30, 240, 6, "ネスヴィジ城"]
    ["女神の杖",            "staff",  45, 1, 37, 30, 240, 7, "プラハ城"]
    ["水鏡の杖",            "staff",  45, 1, 37, 30, 240, 7, "ヴェルサイユ宮殿"]
    ["凶眼の魔杖",          "staff",  45, 1, 37, 30, 240, 7, "ウチヒサル城"]
  ]
}
module.exports = weapons
