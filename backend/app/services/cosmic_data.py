from typing import List, Dict, Any

def get_cosmic_timeline() -> List[Dict[str, Any]]:
    """
    返回宇宙大年历的静态数据（12个月份）
    注意：前端使用 Tailwind 渐变 class。由于这些 class 来自 API，
    前端 tailwind.config 中做了 safelist，保证生产构建不丢样式。
    """
    return [
        {"month": 1, "title": "起源 (The Origin)", "epoch": "宇宙大爆炸",
         "color_class": "from-red-900 via-orange-800 to-red-950",
         "events": [{"day": 1, "desc": "Big Bang (大爆炸)"}, {"day": 22, "desc": "第一批恒星诞生"}]},
        {"month": 2, "title": "黑暗时代 (Dark Ages)", "epoch": "星系原型",
         "color_class": "from-slate-900 via-gray-800 to-black",
         "events": [{"day": 15, "desc": "古老星系开始合并"}]},
        {"month": 3, "title": "再电离 (Reionization)", "epoch": "第一束星光",
         "color_class": "from-gray-900 via-indigo-900 to-black",
         "events": [{"day": 7, "desc": "宇宙逐渐变得透明"}]},
        {"month": 4, "title": "星系成形 (Galaxies)", "epoch": "星系网络",
         "color_class": "from-orange-900 via-rose-900 to-slate-950",
         "events": [{"day": 12, "desc": "星系团开始出现"}]},
        {"month": 5, "title": "银河诞生 (Milky Way)", "epoch": "银河系圆盘",
         "color_class": "from-purple-900 via-indigo-900 to-slate-900",
         "events": [{"day": 1, "desc": "银河系圆盘形成"}]},
        {"month": 6, "title": "恒星工厂 (Star Forge)", "epoch": "恒星世代",
         "color_class": "from-fuchsia-900 via-violet-900 to-slate-950",
         "events": [{"day": 18, "desc": "恒星形成率达到高峰"}]},
        {"month": 7, "title": "元素炼金 (Elements)", "epoch": "重元素诞生",
         "color_class": "from-amber-900 via-yellow-800 to-slate-950",
         "events": [{"day": 22, "desc": "超新星合成重元素"}]},
        {"month": 8, "title": "太阳系 (Solar System)", "epoch": "太阳诞生",
         "color_class": "from-blue-900 via-cyan-900 to-slate-900",
         "events": [{"day": 31, "desc": "太阳在气体云中诞生"}]},
        {"month": 9, "title": "最初的生命 (First Life)", "epoch": "地球与生命",
         "color_class": "from-teal-900 via-emerald-900 to-slate-900",
         "events": [{"day": 14, "desc": "地球形成"}, {"day": 25, "desc": "地球上出现原始生命"}]},
        {"month": 10, "title": "复杂生命 (Complex Life)", "epoch": "氧气与多细胞",
         "color_class": "from-emerald-900 via-lime-900 to-slate-950",
         "events": [{"day": 3, "desc": "大氧化事件推动演化"}]},
        {"month": 11, "title": "多样化 (Diversification)", "epoch": "生命爆发",
         "color_class": "from-sky-900 via-blue-900 to-slate-950",
         "events": [{"day": 9, "desc": "生态系统复杂度上升"}]},
        {"month": 12, "title": "智慧的火花 (Intelligence)", "epoch": "人类登场",
         "color_class": "from-yellow-700 via-amber-800 to-slate-900",
         "events": [{"day": 17, "desc": "寒武纪生命大爆发"},
                    {"day": 30, "desc": "恐龙灭绝"},
                    {"day": 31, "time": "23:52", "desc": "解剖学现代人类出现"}]},
    ]
