import { SearchResult } from '../types';

export const searchData: SearchResult[] = [
  {
    id: 1,
    title: "YouTube",
    url: "https://www.youtube.com",
    description: "Kullanıcıların video yükleyebildiği, izleyebildiği ve paylaşabildiği popüler bir video paylaşım platformu.",
    category: "Eğlence",
    subLinks: [
      { title: "Music", url: "https://music.youtube.com" },
      { title: "Studio", url: "https://studio.youtube.com" },
      { title: "Kids", url: "https://www.youtubekids.com" },
      { title: "TV", url: "https://tv.youtube.com" }
    ]
  },
  {
    id: 2,
    title: "TikTok",
    url: "https://www.tiktok.com",
    description: "Kısa biçimli mobil videolar oluşturmak ve paylaşmak için kullanılan bir sosyal medya uygulaması.",
    category: "Sosyal Medya"
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com",
    description: "Fotoğraf ve video paylaşımına odaklanan bir sosyal ağ hizmeti.",
    category: "Sosyal Medya"
  },
  {
    id: 4,
    title: "Hikaye Kulesi",
    url: "http://hikayekulesi.rf.gd",
    description: "",
    category: "Eğlence"
  },
  {
    id: 5,
    title: "Nexor",
    url: "http://nexor.rf.gd",
    description: "",
    category: "Teknoloji"
  },
  {
    id: 7,
    title: "Sea Simulation",
    url: "http://seasimulation.rf.gd",
    description: "",
    category: "Eğlence"
  },
  {
    id: 8,
    title: "Yandex",
    url: "https://www.yandex.com.tr",
    description: "Türkiye'ye özel hizmetler sunan popüler bir arama motoru ve teknoloji şirketi.",
    category: "Araçlar & Üretkenlik",
     subLinks: [
      { title: "Mail", url: "https://mail.yandex.com.tr" },
      { title: "Translate", url: "https://translate.yandex.com.tr" },
      { title: "Maps", url: "https://yandex.com.tr/maps" },
      { title: "Disk", url: "https://disk.yandex.com.tr" }
    ]
  },
  {
    id: 9,
    title: "Google",
    url: "https://www.google.com",
    description: "Dünyanın en büyük arama motoru. Web'de bilgi bulmak için kullanılır.",
    category: "Araçlar & Üretkenlik",
    subLinks: [
      { title: "Gmail", url: "https://mail.google.com" },
      { title: "Maps", url: "https://maps.google.com" },
      { title: "Translate", url: "https://translate.google.com" },
      { title: "Drive", url: "https://drive.google.com" },
      { title: "News", url: "https://news.google.com" }
    ]
  },
  {
    id: 10,
    title: "GitHub",
    url: "https://github.com",
    description: "Yazılım geliştirme ve sürüm kontrolü için bir web tabanlı platform.",
    category: "Geliştirme",
    subLinks: [
      { title: "Gist", url: "https://gist.github.com" },
      { title: "Desktop", url: "https://desktop.github.com" },
      { title: "Marketplace", url: "https://github.com/marketplace" },
      { title: "Copilot", url: "https://github.com/features/copilot" }
    ]
  },
  {
    id: 11,
    title: "X (Twitter)",
    url: "https://twitter.com",
    description: "Kullanıcıların 'tweet' adı verilen kısa metinler gönderdiği bir sosyal ağ.",
    category: "Sosyal Medya"
  },
  {
    id: 12,
    title: "LinkedIn",
    url: "https://linkedin.com",
    description: "İş dünyasındaki profesyonellere yönelik bir sosyal ağ platformu.",
    category: "Sosyal Medya",
    subLinks: [
      { title: "Jobs", url: "https://www.linkedin.com/jobs/" },
      { title: "Learning", url: "https://www.linkedin.com/learning/" }
    ]
  },
  {
    id: 13,
    title: "Reddit",
    url: "https://reddit.com",
    description: "İlgi alanlarına göre toplulukların (subreddit) bulunduğu bir sosyal haber ve tartışma sitesi.",
    category: "Sosyal Medya"
  },
  {
    id: 14,
    title: "Amazon",
    url: "https://amazon.com",
    description: "Dünyanın en büyük e-ticaret ve bulut bilişim şirketi.",
    category: "E-Ticaret",
    subLinks: [
      { title: "Prime Video", url: "https://www.primevideo.com" },
      { title: "AWS", url: "https://aws.amazon.com" },
      { title: "Music", url: "https://music.amazon.com" }
    ]
  },
  {
    id: 15,
    title: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "Profesyonel ve amatör programcılar için bir soru-cevap sitesi.",
    category: "Geliştirme"
  },
  {
    id: 16,
    title: "Wikipedia",
    url: "https://wikipedia.org",
    description: "Kullanıcıları tarafından ortaklaşa hazırlanan, özgür bir internet ansiklopedisi.",
    category: "Referans",
    subLinks: [
      { title: "Wiktionary", url: "https://www.wiktionary.org/" },
      { title: "Wikidata", url: "https://www.wikidata.org/" }
    ]
  },
  {
    id: 17,
    title: "Netflix",
    url: "https://netflix.com",
    description: "Dizi, film ve belgesel yayını yapan popüler bir video akış hizmeti.",
    category: "Eğlence"
  },
  {
    id: 18,
    title: "Spotify",
    url: "https://spotify.com",
    description: "Milyonlarca şarkıya ve podcaste erişim sunan bir dijital müzik servisi.",
    category: "Eğlence",
     subLinks: [
      { title: "Web Player", url: "https://open.spotify.com" },
      { title: "For Artists", url: "https://artists.spotify.com" }
    ]
  },
  {
    id: 19,
    "title": "Figma",
    "url": "https://www.figma.com",
    "description": "Web tabanlı, işbirlikçi bir arayüz tasarım aracı.",
    category: "Tasarım",
     subLinks: [
      { title: "Community", url: "https://www.figma.com/community" },
      { title: "FigJam", url: "https://www.figma.com/figjam/" }
    ]
  },
  {
    id: 20,
    "title": "Pinterest",
    "url": "https://www.pinterest.com",
    "description": "Görsel keşfetme ve koleksiyonlar oluşturma odaklı bir sosyal medya platformu.",
    category: "Sosyal Medya"
  },
  {
    id: 21,
    "title": "Twitch",
    "url": "https://www.twitch.tv",
    "description": "Özellikle video oyunları üzerine odaklanmış bir canlı yayın platformu.",
    category: "Oyun"
  },
  {
    id: 22,
    "title": "Medium",
    "url": "https://medium.com",
    "description": "Amatör ve profesyonel yazarların makaleler yayınladığı bir çevrimiçi yayın platformu.",
    category: "Haberler & Medya"
  },
  {
    id: 23,
    "title": "Dribbble",
    "url": "https://dribbble.com",
    "description": "Tasarımcılar için bir çevrimiçi topluluk ve portfolyo platformu.",
    category: "Tasarım"
  },
  {
    id: 24,
    "title": "Behance",
    "url": "https://www.behance.net",
    "description": "Adobe'ye ait, yaratıcı profesyonellerin çalışmalarını sergilediği bir portfolyo platformu.",
    category: "Tasarım"
  },
  {
    id: 25,
    "title": "eBay",
    "url": "https://www.ebay.com",
    "description": "Tüketiciden tüketiciye ve işletmeden tüketiciye satış hizmetleri sunan bir e-ticaret sitesi.",
    category: "E-Ticaret"
  },
  {
    id: 26,
    "title": "BBC News",
    "url": "https://www.bbc.com/news",
    "description": "Dünya çapında haberler sunan, İngiltere merkezli uluslararası bir haber kuruluşu.",
    category: "Haberler & Medya"
  },
  {
    id: 27,
    "title": "The New York Times",
    "url": "https://www.nytimes.com",
    "description": "New York merkezli, küresel etkiye sahip bir Amerikan gazetesi.",
    category: "Haberler & Medya"
  },
  {
    id: 28,
    "title": "Discord",
    "url": "https://discord.com",
    "description": "Toplulukların sohbet, sesli ve görüntülü görüşme yapabildiği bir iletişim platformu.",
    category: "Sosyal Medya",
    subLinks: [
        { title: "Developers", url: "https://discord.com/developers" },
        { title: "Nitro", url: "https://discord.com/nitro" }
    ]
  },
  {
    id: 29,
    "title": "Steam",
    "url": "https://store.steampowered.com",
    "description": "Valve tarafından geliştirilen bir dijital video oyunu dağıtım platformu.",
    category: "Oyun",
    subLinks: [
        { title: "Community", url: "https://steamcommunity.com/" },
        { title: "Workshop", url: "https://steamcommunity.com/workshop/" }
    ]
  },
  {
    id: 30,
    title: "Facebook",
    url: "https://www.facebook.com",
    description: "İnsanların arkadaşlarıyla ve aileleriyle bağlantı kurmasını sağlayan küresel bir sosyal ağ.",
    category: "Sosyal Medya",
    subLinks: [
        { title: "Messenger", url: "https://www.messenger.com" },
        { title: "Business", url: "https://business.facebook.com/" }
    ]
  },
  {
    id: 31,
    title: "WhatsApp",
    url: "https://www.whatsapp.com",
    description: "Dünya çapında kullanılan ücretsiz bir anlık mesajlaşma ve arama uygulaması.",
    category: "Sosyal Medya",
    subLinks: [
      { title: "WhatsApp Web", url: "https://web.whatsapp.com" }
    ]
  },
  {
    id: 32,
    title: "Telegram",
    url: "https://telegram.org",
    description: "Hız ve güvenlik odaklı bulut tabanlı bir anlık mesajlaşma uygulaması.",
    category: "Sosyal Medya",
    subLinks: [
      { title: "Telegram Web", url: "https://web.telegram.org" }
    ]
  },
  {
    id: 33,
    title: "Vercel",
    url: "https://vercel.com",
    description: "Frontend geliştiricileri için modern web siteleri ve uygulamaları dağıtma platformu.",
    category: "Geliştirme",
    subLinks: [
      { title: "Templates", url: "https://vercel.com/templates" },
      { title: "Docs", url: "https://vercel.com/docs" }
    ]
  },
  {
    id: 34,
    title: "Netlify",
    url: "https://www.netlify.com",
    description: "Web projelerini oluşturmak, dağıtmak ve ölçeklendirmek için hepsi bir arada bir platform.",
    category: "Geliştirme",
    subLinks: [
      { title: "Templates", url: "https://www.netlify.com/templates/" },
      { title: "Docs", url: "https://docs.netlify.com/" }
    ]
  },
  {
    id: 35,
    title: "CodePen",
    url: "https://codepen.io",
    description: "Frontend geliştiricileri için çevrimiçi bir kod düzenleyici ve açık kaynaklı öğrenme ortamı.",
    category: "Geliştirme"
  },
  {
    id: 36,
    title: "Alibaba",
    url: "https://www.alibaba.com",
    description: "Küresel toptan ticaret için lider bir e-ticaret platformu.",
    category: "E-Ticaret"
  },
  {
    id: 37,
    title: "ESPN",
    url: "https://www.espn.com",
    description: "Spor haberleri, skorlar, ve canlı yayınlar için kapsamlı bir platform.",
    category: "Haberler & Medya"
  },
  {
    id: 38,
    title: "IMDb",
    url: "https://www.imdb.com",
    description: "Filmler, TV şovları ve ünlüler hakkında bilgi içeren çevrimiçi bir veritabanı.",
    category: "Referans"
  },
  {
    id: 39,
    title: "Quora",
    url: "https://www.quora.com",
    description: "Kullanıcıların sorular sorduğu ve topluluk tarafından cevaplandığı bir platform.",
    category: "Sosyal Medya"
  },
  {
    id: 40,
    title: "Canva",
    url: "https://www.canva.com",
    description: "Kullanıcıların kolayca sosyal medya grafikleri, sunumlar ve diğer görsel içerikler oluşturmasını sağlayan bir tasarım aracı.",
    category: "Tasarım"
  },
  {
    id: 41,
    title: "Adobe",
    url: "https://www.adobe.com",
    description: "Photoshop, Illustrator ve Acrobat gibi yaratıcı ve multimedya yazılımları sunan bir şirket.",
    category: "Tasarım",
    subLinks: [
      { title: "Creative Cloud", url: "https://www.adobe.com/creativecloud.html" },
      { title: "Photoshop", url: "https://www.adobe.com/products/photoshop.html" }
    ]
  },
  {
    id: 42,
    title: "Notion",
    url: "https://www.notion.so",
    description: "Not alma, proje yönetimi ve görev takibi için hepsi bir arada bir çalışma alanı.",
    category: "Araçlar & Üretkenlik",
    subLinks: [
      { title: "Templates", url: "https://www.notion.so/templates" }
    ]
  },
  {
    id: 43,
    title: "Slack",
    url: "https://slack.com",
    description: "Ekipler için tasarlanmış, kanal tabanlı bir mesajlaşma platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 44,
    title: "Zoom",
    url: "https://zoom.us",
    description: "Video konferans, çevrimiçi toplantılar ve sohbet için bir iletişim platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 45,
    title: "Microsoft",
    url: "https://www.microsoft.com",
    description: "Windows işletim sistemleri, Office paketi ve Azure bulut hizmetleri ile tanınan bir teknoloji devi.",
    category: "Geliştirme",
    subLinks: [
      { title: "Office 365", url: "https://www.office.com/" },
      { title: "Azure", url: "https://azure.microsoft.com/" },
      { title: "Outlook", url: "https://outlook.live.com/" },
      { title: "OneDrive", url: "https://onedrive.live.com/" }
    ]
  },
  {
    id: 46,
    title: "Apple",
    url: "https://www.apple.com",
    description: "iPhone, iPad, Mac gibi tüketici elektroniği ve yazılım ürünleri tasarlayan ve satan bir teknoloji şirketi.",
    category: "Geliştirme",
    subLinks: [
      { title: "Music", url: "https://music.apple.com/" },
      { title: "TV+", url: "https://tv.apple.com/" }
    ]
  },
  {
    id: 47,
    title: "Trendyol",
    url: "https://www.trendyol.com",
    description: "Türkiye'nin en büyük e-ticaret platformlarından biri.",
    category: "E-Ticaret"
  },
  {
    id: 48,
    title: "Hepsiburada",
    url: "https://www.hepsiburada.com",
    description: "Geniş ürün yelpazesi sunan önde gelen bir Türk e-ticaret sitesi.",
    category: "E-Ticaret"
  },
  {
    id: 49,
    title: "Vertex",
    url: "https://vertexishere.com/",
    description: "",
    category: "Teknoloji"
  },
  {
    id: 50,
    title: "Vimeo",
    url: "https://vimeo.com",
    description: "Yüksek kaliteli video barındırma, paylaşma ve hizmetler sunan bir platform.",
    category: "Eğlence"
  },
  {
    id: 51,
    title: "ArtStation",
    url: "https://www.artstation.com",
    description: "Oyun, film, medya ve eğlence sanatçıları için bir portfolyo platformu.",
    category: "Tasarım"
  },
  {
    id: 52,
    title: "Codewars",
    url: "https://www.codewars.com",
    description: "Geliştiricilerin kodlama becerilerini zorlu görevlerle geliştirdiği bir eğitim platformu.",
    category: "Eğitim"
  },
  {
    id: 53,
    title: "Trello",
    url: "https://trello.com",
    description: "Projeleri ve görevleri panolar, listeler ve kartlar aracılığıyla organize eden görsel bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 54,
    title: "Asana",
    url: "https://asana.com",
    description: "Ekiplerin işlerini yönetmelerine, organize etmelerine ve takip etmelerine yardımcı olan bir proje yönetim aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 55,
    title: "Dropbox",
    url: "https://www.dropbox.com",
    description: "Dosya barındırma, dosya senkronizasyonu ve bulut depolama hizmeti sunan bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 56,
    title: "Reuters",
    url: "https://www.reuters.com",
    description: "Dünya çapında finans, iş ve politika haberleri sunan uluslararası bir haber ajansı.",
    category: "Haberler & Medya"
  },
  {
    id: 57,
    title: "The Guardian",
    url: "https://www.theguardian.com",
    description: "İngiltere merkezli, liberal bir bakış açısıyla küresel haberler sunan bir gazete.",
    category: "Haberler & Medya"
  },
  {
    id: 58,
    title: "SoundCloud",
    url: "https://soundcloud.com",
    description: "Kullanıcıların ses yükleyebildiği, tanıtabildiği ve paylaşabildiği bir çevrimiçi ses dağıtım platformu.",
    category: "Eğlence"
  },
  {
    id: 59,
    title: "DeviantArt",
    url: "https://www.deviantart.com",
    description: "Sanatçıların ve sanat meraklılarının eserlerini sergilediği ve tartıştığı bir çevrimiçi topluluk.",
    category: "Tasarım"
  },
  {
    id: 60,
    title: "Etsy",
    url: "https://www.etsy.com",
    description: "El yapımı, vintage ve özel ürünler için küresel bir çevrimiçi pazar yeri.",
    category: "E-Ticaret"
  },
  {
    id: 61,
    title: "Walmart",
    url: "https://www.walmart.com",
    description: "Geniş bir ürün yelpazesi sunan çok uluslu bir perakende şirketi.",
    category: "E-Ticaret"
  },
  {
    id: 62,
    title: "Target",
    url: "https://www.target.com",
    description: "Çeşitli ürünler sunan popüler bir Amerikan perakende zinciri.",
    category: "E-Ticaret"
  },
  {
    id: 63,
    title: "Best Buy",
    url: "https://www.bestbuy.com",
    description: "Tüketici elektroniği konusunda uzmanlaşmış çok uluslu bir perakendeci.",
    category: "E-Ticaret"
  },
  {
    id: 64,
    title: "Snapchat",
    url: "https://www.snapchat.com",
    description: "Kısa ömürlü fotoğraf ve videoların paylaşıldığı bir anlık mesajlaşma uygulaması.",
    category: "Sosyal Medya"
  },
  {
    id: 65,
    title: "WeChat",
    url: "https://www.wechat.com",
    description: "Mesajlaşma, sosyal medya ve mobil ödeme özelliklerini birleştiren çok amaçlı bir uygulama.",
    category: "Sosyal Medya"
  },
  {
    id: 66,
    title: "Signal",
    url: "https://signal.org",
    description: "Uçtan uca şifreleme ile gizlilik odaklı bir anlık mesajlaşma hizmeti.",
    category: "Sosyal Medya"
  },
  {
    id: 67,
    title: "Viber",
    url: "https://www.viber.com",
    description: "Ücretsiz ve güvenli aramalar ve mesajlar sunan bir platformlar arası sesli IP uygulaması.",
    category: "Sosyal Medya"
  },
  {
    id: 68,
    title: "CNN",
    url: "https://www.cnn.com",
    description: "ABD merkezli, küresel haberler ve canlı yayınlar sunan büyük bir haber kanalı.",
    category: "Haberler & Medya"
  },
  {
    id: 69,
    title: "The Washington Post",
    url: "https://www.washingtonpost.com",
    description: "Araştırmacı gazeteciliği ile tanınan, önde gelen bir Amerikan günlük gazetesi.",
    category: "Haberler & Medya"
  },
  {
    id: 70,
    title: "Forbes",
    url: "https://www.forbes.com",
    description: "Finans, endüstri, yatırım ve pazarlama konularında makaleler yayınlayan bir iş dergisi.",
    category: "Haberler & Medya"
  },
  {
    id: 71,
    title: "Business Insider",
    url: "https://www.businessinsider.com",
    description: "İş, finans ve teknoloji haberleri sunan küresel bir haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 72,
    title: "TechCrunch",
    url: "https://techcrunch.com",
    description: "Teknoloji ve başlangıç şirketleri üzerine odaklanmış bir haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 73,
    title: "Hulu",
    url: "https://www.hulu.com",
    description: "İsteğe bağlı dizi ve film akışı sunan bir abonelik tabanlı video hizmeti.",
    category: "Eğlence"
  },
  {
    id: 74,
    title: "Disney+",
    url: "https://www.disneyplus.com",
    description: "Disney, Pixar, Marvel, Star Wars ve National Geographic içeriklerini sunan bir akış hizmeti.",
    category: "Eğlence"
  },
  {
    id: 75,
    title: "Max (HBO Max)",
    url: "https://www.max.com",
    description: "Warner Bros. Discovery'ye ait, geniş bir eğlence yelpazesi sunan bir akış platformu.",
    category: "Eğlence"
  },
  {
    id: 76,
    title: "Peacock",
    url: "https://www.peacocktv.com",
    description: "NBCUniversal'a ait, TV şovları, filmler ve canlı spor yayınları sunan bir video akış hizmeti.",
    category: "Eğlence"
  },
  {
    id: 77,
    title: "Apple TV+",
    url: "https://tv.apple.com",
    description: "Apple Originals adı altında özel filmler ve diziler sunan bir abonelikli akış hizmeti.",
    category: "Eğlence"
  },
  {
    id: 78,
    title: "Monday.com",
    url: "https://monday.com",
    description: "Ekiplerin projeleri ve iş akışlarını yönetmeleri için bir iş yönetimi platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 79,
    title: "Jira",
    url: "https://www.atlassian.com/software/jira",
    description: "Özellikle çevik yazılım geliştirme ekipleri için bir sorun izleme ve proje yönetimi aracı.",
    category: "Geliştirme"
  },
  {
    id: 80,
    title: "Miro",
    url: "https://miro.com",
    description: "Dağıtık ekipler için işbirliğine dayalı bir çevrimiçi beyaz tahta platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 81,
    title: "Evernote",
    url: "https://evernote.com",
    description: "Not alma, görev yönetimi ve arşivleme için tasarlanmış bir uygulama.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 82,
    title: "Google Drive",
    url: "https://drive.google.com",
    description: "Kullanıcıların dosyaları bulutta depolamasına ve senkronize etmesine olanak tanıyan bir dosya depolama hizmeti.",
    category: "Araçlar & Üretkenlik",
    subLinks: [
      { title: "Docs", url: "https://docs.google.com" },
      { title: "Sheets", url: "https://sheets.google.com" },
      { title: "Slides", url: "https://slides.google.com" }
    ]
  },
  {
    id: 83,
    title: "Microsoft OneDrive",
    url: "https://onedrive.live.com",
    description: "Microsoft'un dosya barındırma ve senkronizasyon hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 84,
    title: "Coursera",
    url: "https://www.coursera.org",
    description: "Üniversiteler ve kuruluşlarla ortaklaşa çevrimiçi kurslar sunan bir eğitim platformu.",
    category: "Eğitim"
  },
  {
    id: 85,
    title: "Udemy",
    url: "https://www.udemy.com",
    description: "Profesyonel yetişkinlerin ve öğrencilerin yeni beceriler öğrendiği bir çevrimiçi öğrenme pazarı.",
    category: "Eğitim"
  },
  {
    id: 86,
    title: "edX",
    url: "https://www.edx.org",
    description: "Dünya çapındaki üniversitelerden yüksek öğrenim düzeyinde kurslar sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 87,
    title: "Khan Academy",
    url: "https://www.khanacademy.org",
    description: "Çeşitli konularda pratik alıştırmalar ve eğitici videolar sunan kar amacı gütmeyen bir eğitim kuruluşu.",
    category: "Eğitim"
  },
  {
    id: 88,
    title: "Duolingo",
    url: "https://www.duolingo.com",
    description: "Oyunlaştırılmış derslerle dil öğrenmeyi sağlayan popüler bir uygulama.",
    category: "Eğitim"
  },
  {
    id: 89,
    title: "Airbnb",
    url: "https://www.airbnb.com",
    description: "Kullanıcıların konaklama yerleri kiralamasına veya listelemesine olanak tanıyan bir çevrimiçi pazar yeri.",
    category: "Seyahat"
  },
  {
    id: 90,
    title: "Booking.com",
    url: "https://www.booking.com",
    description: "Konaklama rezervasyonları ve seyahat hizmetleri sunan bir çevrimiçi seyahat acentesi.",
    category: "Seyahat"
  },
  {
    id: 91,
    title: "Expedia",
    url: "https://www.expedia.com",
    description: "Uçak biletleri, otel rezervasyonları ve tatil paketleri sunan bir seyahat sitesi.",
    category: "Seyahat"
  },
  {
    id: 92,
    title: "TripAdvisor",
    url: "https://www.tripadvisor.com",
    description: "Otel, restoran ve turistik yerler hakkında kullanıcı yorumları sunan bir seyahat platformu.",
    category: "Seyahat"
  },
  {
    id: 93,
    title: "PayPal",
    url: "https://www.paypal.com",
    description: "Çevrimiçi para transferlerini destekleyen ve geleneksel yöntemlere bir alternatif sunan bir online ödeme sistemi.",
    category: "Finans & Kripto"
  },
  {
    id: 94,
    title: "Stripe",
    url: "https://stripe.com",
    description: "İşletmelerin internet üzerinden ödeme kabul etmelerini sağlayan bir teknoloji şirketi.",
    category: "Finans & Kripto"
  },
  {
    id: 95,
    title: "Coinbase",
    url: "https://www.coinbase.com",
    description: "Kripto para birimlerinin alınıp satıldığı güvenli bir çevrimiçi platform.",
    category: "Finans & Kripto"
  },
  {
    id: 96,
    title: "Binance",
    url: "https://www.binance.com",
    description: "İşlem hacmine göre dünyanın en büyük kripto para borsası.",
    category: "Finans & Kripto"
  },
  {
    id: 97,
    title: "MyFitnessPal",
    url: "https://www.myfitnesspal.com",
    description: "Beslenme ve egzersiz takibi yapan bir akıllı telefon uygulaması ve web sitesi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 98,
    title: "Headspace",
    url: "https://www.headspace.com",
    description: "Rehberli meditasyon ve farkındalık eğitimi sunan bir çevrimiçi platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 99,
    title: "Calm",
    url: "https://www.calm.com",
    description: "Uyku, meditasyon ve rahatlama odaklı bir yazılım şirketi ve uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 100,
    title: "Allrecipes",
    url: "https://www.allrecipes.com",
    description: "Kullanıcılar tarafından oluşturulan ve paylaşılan yemek tarifleri için bir sosyal ağ sitesi.",
    category: "Referans"
  },
  {
    id: 101,
    title: "Unsplash",
    url: "https://unsplash.com",
    description: "Serbestçe kullanılabilen yüksek çözünürlüklü fotoğrafların paylaşıldığı bir web sitesi.",
    category: "Tasarım"
  },
  {
    id: 102,
    title: "Pexels",
    url: "https://www.pexels.com",
    description: "Ücretsiz stok fotoğrafları ve videoları sunan bir platform.",
    category: "Tasarım"
  },
  {
    id: 103,
    title: "Giphy",
    url: "https://giphy.com",
    description: "Kullanıcıların animasyonlu GIF'ler aramasına, paylaşmasına ve oluşturmasına olanak tanıyan bir veritabanı.",
    category: "Eğlence"
  },
  {
    id: 104,
    title: "Roblox",
    url: "https://www.roblox.com",
    description: "Kullanıcıların oyunlar programladığı ve diğer kullanıcılar tarafından oluşturulan oyunları oynadığı bir çevrimiçi oyun platformu.",
    category: "Oyun"
  },
  {
    id: 105,
    title: "Epic Games Store",
    url: "https://store.epicgames.com",
    description: "PC ve Mac için bir dijital video oyunu vitrini.",
    category: "Oyun"
  },
  {
    id: 106,
    title: "GOG.com",
    url: "https://www.gog.com",
    description: "DRM'siz video oyunları sunan bir dijital dağıtım platformu.",
    category: "Oyun"
  },
  {
    id: 107,
    title: "Bandcamp",
    url: "https://bandcamp.com",
    description: "Bağımsız sanatçıların müziklerini tanıtıp sattığı bir çevrimiçi müzik şirketi.",
    category: "Eğlence"
  },
  {
    id: 108,
    title: "Pandora",
    url: "https://www.pandora.com",
    description: "Kullanıcıların müzik zevklerine göre kişiselleştirilmiş radyo istasyonları oluşturan bir müzik akış hizmeti.",
    category: "Eğlence"
  },
  {
    id: 109,
    title: "Stack Exchange",
    url: "https://stackexchange.com",
    description: "Stack Overflow dahil olmak üzere çeşitli konularda soru-cevap sitelerinden oluşan bir ağ.",
    category: "Geliştirme"
  },
  {
    id: 110,
    title: "Ekşi Sözlük",
    url: "https://eksisozluk.com",
    description: "Kullanıcıların çeşitli konularda yorum yazdığı, Türkiye'nin en büyük katılımcı sözlüğü.",
    category: "Sosyal Medya"
  },
  {
    id: 111,
    title: "Sahibinden.com",
    url: "https://www.sahibinden.com",
    description: "Türkiye'nin en büyük online seri ilan ve alışveriş platformu.",
    category: "E-Ticaret"
  },
  {
    id: 112,
    title: "N11",
    url: "https://www.n11.com",
    description: "Elektronikten giyime, ev eşyasından kozmetiğe kadar geniş bir ürün yelpazesi sunan e-ticaret sitesi.",
    category: "E-Ticaret"
  },
  {
    id: 113,
    title: "Getir",
    url: "https://getir.com",
    description: "Market ürünlerini ve yemek siparişlerini dakikalar içinde teslim eden bir mobil perakende uygulaması.",
    category: "E-Ticaret"
  },
  {
    id: 114,
    title: "Yemeksepeti",
    url: "https://www.yemeksepeti.com",
    description: "Türkiye'nin en büyük online yemek sipariş platformu.",
    category: "E-Ticaret"
  },
  {
    id: 115,
    title: "Onedio",
    url: "https://onedio.com",
    description: "Türkiye'nin ilk ve en büyük sosyal içerik platformu.",
    category: "Haberler & Medya"
  },
  {
    id: 116,
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    description: "Teknoloji, girişimcilik ve bilgisayar bilimi üzerine odaklanmış bir sosyal haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 117,
    title: "The Verge",
    url: "https://www.theverge.com",
    description: "Teknoloji, bilim, sanat ve kültürün kesişimini inceleyen bir multimedya haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 118,
    title: "Ars Technica",
    url: "https://arstechnica.com",
    description: "Teknoloji haberleri, politikaları ve teknoloji meraklıları için derinlemesine analizler sunan bir yayın.",
    category: "Haberler & Medya"
  },
  {
    id: 119,
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    description: "Kodlama öğrenmek için ücretsiz çevrimiçi kurslar, projeler ve sertifikalar sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 120,
    title: "LeetCode",
    url: "https://leetcode.com",
    description: "Yazılım mühendisliği mülakatlarına hazırlanmak için kodlama problemlerinin bulunduğu bir platform.",
    category: "Eğitim"
  },
  {
    id: 121,
    title: "GitLab",
    url: "https://gitlab.com",
    description: "Tüm DevOps yaşam döngüsü için tek bir uygulama olarak hizmet veren bir web tabanlı Git deposu yöneticisi.",
    category: "Geliştirme"
  },
  {
    id: 122,
    title: "Bitbucket",
    url: "https://bitbucket.org",
    description: "Profesyonel ekipler için Atlassian tarafından sunulan bir Git tabanlı kod barındırma hizmeti.",
    category: "Geliştirme"
  },
  {
    id: 123,
    title: "Docker Hub",
    url: "https://hub.docker.com",
    description: "Konteyner görüntülerini bulmak ve paylaşmak için kullanılan dünyanın en büyük kütüphanesi ve topluluğu.",
    category: "Geliştirme"
  },
  {
    id: 124,
    title: "npm",
    url: "https://www.npmjs.com",
    description: "JavaScript için bir paket yöneticisi ve dünyanın en büyük yazılım kayıt defteri.",
    category: "Geliştirme"
  },
  {
    id: 125,
    title: "Postman",
    url: "https://www.postman.com",
    description: "API geliştirmek için kullanılan bir işbirliği platformu.",
    category: "Geliştirme"
  },
  {
    id: 126,
    title: "Awwwards",
    url: "https://www.awwwards.com",
    description: "Dünyanın en iyi web tasarımcılarının, geliştiricilerinin ve ajanslarının çalışmalarını tanıyan ve ödüllendiren bir platform.",
    category: "Tasarım"
  },
  {
    id: 127,
    title: "Pixabay",
    url: "https://pixabay.com",
    description: "Telif hakkı olmayan, yüksek kaliteli fotoğraflar, illüstrasyonlar ve videolar sunan bir topluluk.",
    category: "Tasarım"
  },
  {
    id: 128,
    title: "Coolors",
    url: "https://coolors.co",
    description: "Tasarımcılar için hızlı ve kolay bir şekilde renk paletleri oluşturma aracı.",
    category: "Tasarım"
  },
  {
    id: 129,
    title: "Font Awesome",
    url: "https://fontawesome.com",
    description: "Web'in en popüler ikon seti ve araç kiti.",
    category: "Tasarım"
  },
  {
    id: 130,
    title: "Todoist",
    url: "https://todoist.com",
    description: "Görevleri ve projeleri organize etmek için kullanılan bir görev yönetimi uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 131,
    title: "ClickUp",
    url: "https://clickup.com",
    description: "Görevler, belgeler, sohbet ve hedefler gibi tüm işleri bir araya getiren bir üretkenlik platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 132,
    title: "Skillshare",
    url: "https://www.skillshare.com",
    description: "Yaratıcı profesyoneller için video dersler aracılığıyla çevrimiçi öğrenme topluluğu.",
    category: "Eğitim"
  },
  {
    id: 133,
    title: "MasterClass",
    url: "https://www.masterclass.com",
    description: "Alanında dünyanın en iyilerinden çevrimiçi dersler sunan bir eğitim platformu.",
    category: "Eğitim"
  },
  {
    id: 134,
    title: "Brilliant.org",
    url: "https://brilliant.org",
    description: "Matematik, bilim ve bilgisayar bilimi alanlarında interaktif problem çözme yoluyla öğrenmeyi teşvik eden bir platform.",
    category: "Eğitim"
  },
  {
    id: 135,
    title: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
    description: "Bilgisayar bilimi ve programlama konularında makaleler ve kurslar sunan bir eğitim portalı.",
    category: "Eğitim"
  },
  {
    id: 136,
    title: "Associated Press (AP)",
    url: "https://apnews.com",
    description: "Merkezi New York'ta bulunan, küresel bir kar amacı gütmeyen haber ajansı.",
    category: "Haberler & Medya"
  },
  {
    id: 137,
    title: "National Geographic",
    url: "https://www.nationalgeographic.com",
    description: "Bilim, keşif ve macera konularında içerikler sunan küresel bir medya kuruluşu.",
    category: "Haberler & Medya"
  },
  {
    id: 138,
    title: "Bloomberg",
    url: "https://www.bloomberg.com",
    description: "İş ve finans piyasaları hakkında küresel haberler ve veriler sunan bir medya şirketi.",
    category: "Haberler & Medya"
  },
  {
    id: 139,
    title: "Al Jazeera",
    url: "https://www.aljazeera.com",
    description: "Katar merkezli, uluslararası haberler sunan bir devlet destekli yayın kuruluşu.",
    category: "Haberler & Medya"
  },
  {
    id: 140,
    title: "Shopify",
    url: "https://www.shopify.com",
    description: "Kullanıcıların kendi çevrimiçi mağazalarını oluşturmalarını sağlayan bir e-ticaret platformu.",
    category: "E-Ticaret"
  },
  {
    id: 141,
    title: "AliExpress",
    url: "https://www.aliexpress.com",
    description: "Çin'deki küçük işletmelerin dünya çapındaki müşterilere ürünler sunduğu bir online perakende hizmeti.",
    category: "E-Ticaret"
  },
  {
    id: 142,
    title: "Wise",
    url: "https://wise.com",
    description: "Düşük maliyetli uluslararası para transferleri sunan bir çevrimiçi para transfer hizmeti.",
    category: "Finans & Kripto"
  },
  {
    id: 143,
    title: "Tumblr",
    url: "https://www.tumblr.com",
    description: "Kullanıcıların multimedya ve diğer içerikleri bir mikroblog şeklinde yayınlamasına olanak tanıyan bir platform.",
    category: "Sosyal Medya"
  },
  {
    id: 144,
    title: "Flickr",
    url: "https://www.flickr.com",
    description: "Kullanıcıların fotoğraf ve videolarını paylaştığı bir resim ve video barındırma hizmeti.",
    category: "Sosyal Medya"
  },
  {
    id: 145,
    title: "Goodreads",
    url: "https://www.goodreads.com",
    description: "Okurların kitapları keşfettiği, takip ettiği ve yorumladığı bir sosyal kataloglama web sitesi.",
    category: "Referans"
  },
  {
    id: 146,
    title: "Letterboxd",
    url: "https://letterboxd.com",
    description: "Sinemaseverler için film keşfetme, günlük tutma ve paylaşma odaklı bir sosyal ağ.",
    category: "Eğlence"
  },
  {
    id: 147,
    title: "Last.fm",
    url: "https://www.last.fm",
    description: "Kullanıcıların dinledikleri müzikleri takip eden ve kişiselleştirilmiş öneriler sunan bir müzik keşif hizmeti.",
    category: "Eğlence"
  },
  {
    id: 148,
    title: "Crunchyroll",
    url: "https://www.crunchyroll.com",
    description: "Anime, manga ve dorama gibi Doğu Asya içeriklerine odaklanmış bir yayın hizmeti.",
    category: "Eğlence"
  },
  {
    id: 149,
    title: "WolframAlpha",
    url: "https://www.wolframalpha.com",
    description: "Sorulara doğrudan cevaplar hesaplayan bir bilgi motoru.",
    category: "Referans"
  },
  {
    id: 150,
    title: "Internet Archive",
    url: "https://archive.org",
    description: "Web siteleri, yazılımlar, filmler ve müzik gibi dijital materyallerin arşivlendiği bir kütüphane.",
    category: "Referans"
  },
  {
    id: 151,
    title: "SimilarWeb",
    url: "https://www.similarweb.com",
    description: "Web siteleri ve mobil uygulamalar için web analitiği hizmetleri sunan bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 152,
    title: "Speedtest.net",
    url: "https://www.speedtest.net",
    description: "İnternet bağlantı hızınızı ve performansınızı test eden ücretsiz bir geniş bant analiz aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 153,
    title: "WebMD",
    url: "https://www.webmd.com",
    description: "Sağlık ve esenlik konularında güvenilir ve güncel bilgiler sunan bir çevrimiçi yayıncı.",
    category: "Referans"
  },
  {
    id: 154,
    title: "Zillow",
    url: "https://www.zillow.com",
    description: "Gayrimenkul ve kiralama pazar yeri veritabanı.",
    category: "Finans & Kripto"
  },
  {
    id: 155,
    title: "Glassdoor",
    url: "https://www.glassdoor.com",
    description: "Şirketler hakkında çalışanlar tarafından yazılan anonim yorumlar, maaşlar ve mülakat bilgileri sunan bir site.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 156,
    title: "Indeed",
    url: "https://www.indeed.com",
    description: "İş arayanların iş ilanlarını aradığı, özgeçmişlerini yayınladığı ve şirketleri araştırdığı bir iş arama motoru.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 157,
    title: "Rotten Tomatoes",
    url: "https://www.rottentomatoes.com",
    description: "Filmler ve TV şovları için eleştirmen ve izleyici yorumlarını toplayan bir inceleme toplama sitesi.",
    category: "Referans"
  },
  {
    id: 158,
    title: "Genius",
    url: "https://genius.com",
    description: "Şarkı sözleri ve müzik bilgileri üzerine odaklanmış bir çevrimiçi bilgi tabanı.",
    category: "Referans"
  },
  {
    id: 159,
    title: "Wayback Machine",
    url: "https://web.archive.org",
    description: "Internet Archive'ın bir parçası olarak web sitelerinin geçmiş sürümlerini arşivleyen bir dijital arşiv.",
    category: "Referans"
  },
  {
    id: 160,
    title: "Framer",
    url: "https://www.framer.com",
    description: "Etkileşimli prototipler ve web siteleri oluşturmak için kullanılan bir tasarım aracı.",
    category: "Tasarım",
    subLinks: [
      { title: "Motion", url: "https://www.framer.com/motion/" },
      { title: "Templates", url: "https://www.framer.com/templates/" }
    ]
  },
  {
    id: 161,
    title: "Webflow",
    url: "https://webflow.com",
    description: "Kod yazmadan profesyonel, özel web siteleri oluşturmak için bir platform.",
    category: "Geliştirme"
  },
  {
    id: 162,
    title: "Supabase",
    url: "https://supabase.io",
    description: "Veritabanı, kimlik doğrulama, depolama ve API'ler sunan açık kaynaklı bir Firebase alternatiifi.",
    category: "Geliştirme"
  },
  {
    id: 163,
    title: "Firebase",
    url: "https://firebase.google.com",
    description: "Google tarafından sunulan, mobil ve web uygulamaları geliştirmek için bir platform.",
    category: "Geliştirme"
  },
  {
    id: 164,
    title: "Render.com",
    url: "https://render.com",
    description: "Sıfır DevOps ile bulutta uygulama ve web sitesi dağıtımı için birleşik bir platform.",
    category: "Geliştirme"
  },
  {
    id: 165,
    title: "Fly.io",
    url: "https://fly.io",
    description: "Uygulamaları ve veritabanlarını kullanıcılara yakın bir şekilde dağıtmak için bir platform.",
    category: "Geliştirme"
  },
  {
    id: 166,
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Web teknolojileri ve API'ler için Mozilla tarafından geliştirilen kapsamlı bir referans.",
    category: "Referans"
  },
  {
    id: 167,
    title: "CSS-Tricks",
    url: "https://css-tricks.com",
    description: "Web geliştirme, özellikle CSS üzerine odaklanmış makaleler ve eğitimler sunan bir blog.",
    category: "Geliştirme"
  },
  {
    id: 168,
    title: "Smashing Magazine",
    url: "https://www.smashingmagazine.com",
    description: "Web tasarımcıları ve geliştiricileri için pratik makaleler sunan bir çevrimiçi dergi.",
    category: "Tasarım"
  },
  {
    id: 169,
    title: "A List Apart",
    url: "https://alistapart.com",
    description: "Web standartları ve en iyi uygulamalar üzerine odaklanan bir web içeriği dergisi.",
    category: "Tasarım"
  },
  {
    id: 170,
    title: "Replit",
    url: "https://replit.com",
    description: "Tarayıcıda kod yazmak, işbirliği yapmak ve barındırmak için bir çevrimiçi IDE.",
    category: "Geliştirme"
  },
  {
    id: 171,
    title: "Glitch",
    url: "https://glitch.com",
    description: "Web uygulamaları oluşturmak ve paylaşmak için işbirlikçi bir programlama ortamı.",
    category: "Geliştirme"
  },
  {
    id: 172,
    title: "Google Fonts",
    url: "https://fonts.google.com",
    description: "Web sitelerinde kullanılabilecek ücretsiz ve açık kaynaklı yazı tiplerinden oluşan bir kütüphane.",
    category: "Tasarım"
  },
  {
    id: 173,
    title: "Adobe Fonts",
    url: "https://fonts.adobe.com",
    description: "Adobe Creative Cloud aboneliğiyle gelen binlerce yazı tipinden oluşan bir koleksiyon.",
    category: "Tasarım"
  },
  {
    id: 174,
    title: "Product Hunt",
    url: "https://www.producthunt.com",
    description: "Yeni teknoloji ürünlerini keşfetmek ve paylaşmak için bir platform.",
    category: "Haberler & Medya"
  },
  {
    id: 175,
    title: "Indie Hackers",
    url: "https://www.indiehackers.com",
    description: "Karlı çevrimiçi işletmeler kuran geliştiriciler ve girişimciler için bir topluluk.",
    category: "Haberler & Medya"
  },
  {
    id: 176,
    title: "Zapier",
    url: "https://zapier.com",
    description: "Farklı web uygulamaları arasında iş akışlarını otomatikleştiren bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 177,
    title: "IFTTT",
    url: "https://ifttt.com",
    description: "Uygulamaları, cihazları ve hizmetleri birbirine bağlayan bir otomasyon platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 178,
    title: "Airtable",
    url: "https://www.airtable.com",
    description: "Veritabanı ve elektronik tablonun özelliklerini birleştiren bir bulut tabanlı işbirliği platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 179,
    title: "Google Colab",
    url: "https://colab.research.google.com",
    description: "Tarayıcıda Python kodu yazmak ve çalıştırmak için kullanılan bir Jupyter not defteri ortamı.",
    category: "Geliştirme"
  },
  {
    id: 180,
    title: "Kaggle",
    url: "https://www.kaggle.com",
    description: "Veri bilimcileri ve makine öğrenmesi uygulayıcıları için bir çevrimiçi topluluk.",
    category: "Geliştirme"
  },
  {
    id: 181,
    title: "Investing.com",
    url: "https://www.investing.com",
    description: "Küresel finans piyasaları hakkında gerçek zamanlı veriler ve haberler sunan bir portal.",
    category: "Finans & Kripto"
  },
  {
    id: 182,
    title: "TradingView",
    url: "https://www.tradingview.com",
    description: "Finansal piyasaları analiz etmek için kullanılan bir grafik platformu ve sosyal ağ.",
    category: "Finans & Kripto"
  },
  {
    id: 183,
    title: "OpenSea",
    url: "https://opensea.io",
    description: "NFT'ler (non-fungible tokens) için en büyük pazar yerlerinden biri.",
    category: "Finans & Kripto"
  },
  {
    id: 184,
    title: "Etherscan",
    url: "https://etherscan.io",
    description: "Ethereum blok zinciri için bir blok gezgini ve analiz platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 185,
    title: "AnyDesk",
    url: "https://anydesk.com",
    description: "Uzak masaüstü erişimi için hızlı ve güvenli bir yazılım.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 186,
    title: "TeamViewer",
    url: "https://www.teamviewer.com",
    description: "Uzak kontrol, masaüstü paylaşımı ve dosya transferi için bir yazılım.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 187,
    title: "WeTransfer",
    url: "https://wetransfer.com",
    description: "Büyük dosyaları kolayca göndermek için kullanılan bir bulut tabanlı hizmet.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 188,
    title: "TinyPNG",
    url: "https://tinypng.com",
    description: "Görüntü kalitesini düşürmeden PNG ve JPEG dosyalarını sıkıştıran bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 189,
    title: "Remove.bg",
    url: "https://www.remove.bg",
    description: "Görüntülerden arka planı otomatik olarak kaldıran bir web sitesi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 190,
    title: "Photopea",
    url: "https://www.photopea.com",
    description: "Tarayıcıda çalışan, Photoshop'a benzer gelişmiş bir çevrimiçi görüntü düzenleyici.",
    category: "Tasarım"
  },
  {
    id: 191,
    title: "Sketch",
    url: "https://www.sketch.com",
    description: "macOS için bir dijital tasarım ve vektör grafik düzenleyici.",
    category: "Tasarım"
  },
  {
    id: 192,
    title: "InVision",
    url: "https://www.invisionapp.com",
    description: "Dijital ürün tasarımı, prototipleme ve işbirliği için bir platform.",
    category: "Tasarım"
  },
  {
    id: 193,
    title: "W3Schools",
    url: "https://www.w3schools.com",
    description: "Web geliştirme teknolojileri için eğitimler ve referanslar sunan popüler bir kaynak.",
    category: "Eğitim"
  },
  {
    id: 194,
    title: "Atlas Obscura",
    url: "https://www.atlasobscura.com",
    description: "Dünyanın gizli harikalarını ve sıra dışı yerlerini keşfetmek için bir rehber.",
    category: "Seyahat"
  },
  {
    id: 195,
    title: "Skyscanner",
    url: "https://www.skyscanner.com",
    description: "Uçak biletleri, oteller ve araba kiralama için küresel bir arama motoru.",
    category: "Seyahat"
  },
  {
    id: 196,
    title: "IGN",
    url: "https://www.ign.com",
    description: "Video oyunları, filmler ve TV şovları hakkında haberler, incelemeler ve videolar sunan bir eğlence medyası.",
    category: "Oyun"
  },
  {
    id: 197,
    title: "GameSpot",
    url: "https://www.gamespot.com",
    description: "Video oyunları hakkında haberler, incelemeler ve önizlemeler sunan bir web sitesi.",
    category: "Oyun"
  },
  {
    id: 198,
    title: "Polygon",
    url: "https://www.polygon.com",
    description: "Video oyunları, eğlence ve popüler kültür üzerine odaklanmış bir web sitesi.",
    category: "Oyun"
  },
  {
    id: 199,
    title: "OpenStreetMap",
    url: "https://www.openstreetmap.org",
    description: "Dünyanın özgür ve düzenlenebilir bir haritasını oluşturmak için işbirlikçi bir proje.",
    category: "Referans"
  },
  {
    id: 200,
    title: "Anker",
    url: "https://www.anker.com",
    description: "Şarj cihazları, power bank'ler ve diğer mobil aksesuarlar üreten bir elektronik markası.",
    category: "E-Ticaret"
  },
  {
    id: 201,
    title: "The Movie Database (TMDb)",
    url: "https://www.themoviedb.org",
    description: "Filmler ve TV şovları hakkında topluluk tarafından oluşturulan bir veritabanı.",
    category: "Referans"
  },
  {
    id: 202,
    title: "React.dev",
    url: "https://react.dev",
    description: "Modern React dokümantasyonu ve öğrenme kaynakları.",
    category: "Geliştirme",
    subLinks: [
      { title: "React Native", url: "https://reactnative.dev/" }
    ]
  },
  {
    id: 203,
    title: "Vue.js",
    url: "https://vuejs.org",
    description: "İlerici bir JavaScript çerçevesi.",
    category: "Geliştirme",
    subLinks: [
      { title: "Vue Router", url: "https://router.vuejs.org/" },
      { title: "Pinia", url: "https://pinia.vuejs.org/" }
    ]
  },
  {
    id: 204,
    title: "Svelte",
    url: "https://svelte.dev",
    description: "Radikal olarak yeni bir yaklaşımla kullanıcı arayüzleri oluşturan bir derleyici.",
    category: "Geliştirme",
    subLinks: [
      { title: "SvelteKit", url: "https://kit.svelte.dev/" }
    ]
  },
  {
    id: 205,
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "Hızlı UI geliştirme için tasarlanmış, kullanışlılık öncelikli bir CSS çerçevesi.",
    category: "Geliştirme",
    subLinks: [
      { title: "Tailwind UI", url: "https://tailwindui.com/" }
    ]
  },
  {
    id: 206,
    title: "DigitalOcean",
    url: "https://www.digitalocean.com",
    description: "Geliştiriciler için bulut alyapısı sağlayıcısı.",
    category: "Geliştirme"
  },
  {
    id: 207,
    title: "Heroku",
    url: "https://www.heroku.com",
    description: "Uygulamaları oluşturmak, çalıştırmak ve ölçeklendirmek için bulut tabanlı bir platform.",
    category: "Geliştirme"
  },
  {
    id: 208,
    title: "Auth0",
    url: "https://auth0.com",
    description: "Uygulamalar için kimlik doğrulama ve yetkilendirme platformu.",
    category: "Geliştirme"
  },
  {
    id: 209,
    title: "Algolia",
    url: "https://www.algolia.com",
    description: "Geliştiriciler için güçlü bir arama ve keşif API'si.",
    category: "Geliştirme"
  },
  {
    id: 210,
    title: "GraphQL",
    url: "https://graphql.org",
    description: "API'ler için bir sorgu dili ve sunucu tarafı çalışma zamanı.",
    category: "Geliştirme"
  },
  {
    id: 211,
    title: "PlanetScale",
    url: "https://planetscale.com",
    description: "Geliştiriciler için sunucusuz bir MySQL veritabanı platformu.",
    category: "Geliştirme"
  },
  {
    id: 212,
    title: "Spline",
    url: "https://spline.design",
    description: "Tarayıcıda 3D tasarımlar ve animasyonlar oluşturmak için bir araç.",
    category: "Tasarım"
  },
  {
    id: 213,
    title: "LottieFiles",
    url: "https://lottiefiles.com",
    description: "Web ve mobil uygulamalar için Lottie animasyonları bulma ve kullanma platformu.",
    category: "Tasarım"
  },
  {
    id: 214,
    title: "UI8.net",
    url: "https://ui8.net",
    description: "UI kitleri, temalar ve ikonlar gibi yüksek kaliteli tasarım kaynakları pazarı.",
    category: "Tasarım"
  },
  {
    id: 215,
    title: "Mobbin",
    url: "https://mobbin.com",
    description: "En iyi mobil uygulama tasarımlarından oluşan bir kütüphane.",
    category: "Tasarım"
  },
  {
    id: 216,
    title: "SiteInspire",
    url: "https://www.siteinspire.com",
    description: "En iyi web ve interaktif tasarım örneklerinden oluşan bir galeri.",
    category: "Tasarım"
  },
  {
    id: 217,
    title: "Muzli",
    url: "https://muz.li",
    description: "Tasarımcılar için en son ve en iyi tasarım ilhamlarını bir araya getiren bir eklenti.",
    category: "Tasarım"
  },
  {
    id: 218,
    title: "Feather Icons",
    url: "https://feathericons.com",
    description: "Basit ve güzel açık kaynaklı ikonlar.",
    category: "Tasarım"
  },
  {
    id: 219,
    title: "Carbon Design System",
    url: "https://carbondesignsystem.com",
    description: "IBM tarafından oluşturulan açık kaynaklı bir tasarım sistemi.",
    category: "Tasarım"
  },
  {
    id: 220,
    title: "Ant Design",
    url: "https://ant.design",
    description: "Kurumsal uygulamalar için bir React UI kütüphanesi ve tasarım sistemi.",
    category: "Tasarım"
  },
  {
    id: 221,
    title: "Material Design",
    url: "https://m3.material.io/",
    description: "Google'ın kapsamlı tasarım sistemi.",
    category: "Tasarım"
  },
  {
    id: 222,
    title: "Raycast",
    url: "https://www.raycast.com",
    description: "macOS için hızlı ve genişletilebilir bir başlatıcı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 223,
    title: "Linear",
    url: "https://linear.app",
    description: "Yüksek performanslı ekipler için modern bir proje yönetim aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 224,
    title: "Cron",
    url: "https://cron.com",
    description: "Profesyoneller için tasarlanmış yeni nesil takvim uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 225,
    title: "Obsidian",
    url: "https://obsidian.md",
    description: "İkinci beyniniz olarak çalışan, Markdown tabanlı bir bilgi yönetim aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 226,
    title: "Logseq",
    url: "https://logseq.com",
    description: "Gizlilik odaklı, açık kaynaklı bir bilgi ve düşünce yönetim aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 227,
    title: "Loom",
    url: "https://www.loom.com",
    description: "Hızlı ve kolay ekran kaydı ve video mesajlaşma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 228,
    title: "Calendly",
    url: "https://calendly.com",
    description: "Toplantıları ve randevuları planlamak için otomasyon yazılımı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 229,
    title: "Otter.ai",
    url: "https://otter.ai",
    description: "Toplantılar ve konuşmalar için yapay zeka destekli sesli transkripsiyon hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 230,
    title: "Grammarly",
    url: "https://www.grammarly.com",
    description: "Yazım, dilbilgisi ve üslup hatalarını düzelten bir yazma asistanı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 231,
    title: "1Password",
    url: "https://1password.com",
    description: "Güçlü ve güvenli bir şifre yöneticisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 232,
    title: "Setapp",
    url: "https://setapp.com",
    description: "Mac ve iOS için seçkin uygulamalara abonelik tabanlı erişim hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 233,
    title: "CleanMyMac X",
    url: "https://macpaw.com/cleanmymac",
    description: "macOS için optimizasyon, temizleme ve koruma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 234,
    title: "Alfred",
    url: "https://www.alfredapp.com",
    description: "macOS için klavye kısayolları ve otomasyon içeren bir verimlilik uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 235,
    title: "Hazel",
    url: "https://www.noodlesoft.com",
    description: "macOS için dosyaları otomatik olarak organize eden bir otomasyon aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 236,
    title: "Readwise",
    url: "https://readwise.io",
    description: "Okuduğunuz makale ve kitaplardaki önemli noktaları hatırlamanıza yardımcı olan bir hizmet.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 237,
    title: "egghead.io",
    url: "https://egghead.io",
    description: "Modern web geliştirme üzerine kısa ve yoğun video dersler.",
    category: "Eğitim"
  },
  {
    id: 238,
    title: "Scrimba",
    url: "https://scrimba.com",
    description: "Etkileşimli kodlama dersleri sunan bir çevrimiçi öğrenme platformu.",
    category: "Eğitim"
  },
  {
    id: 239,
    title: "Frontend Masters",
    url: "https://frontendmasters.com",
    description: "Uzmanlardan derinlemesine, modern frontend mühendisliği kursları.",
    category: "Eğitim"
  },
  {
    id: 240,
    title: "Pluralsight",
    url: "https://www.pluralsight.com",
    description: "Teknoloji profesyonelleri için çevrimiçi eğitim kursları sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 241,
    title: "DataCamp",
    url: "https://www.datacamp.com",
    description: "Veri bilimi ve analitik becerileri öğrenmek için interaktif bir platform.",
    category: "Eğitim"
  },
  {
    id: 242,
    title: "Codecademy",
    url: "https://www.codecademy.com",
    description: "Milyonlarca kişinin kodlamayı öğrendiği interaktif bir öğrenme platformu.",
    category: "Eğitim"
  },
  {
    id: 243,
    title: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu",
    description: "MIT'nin lisans ve lisansüstü düzeyindeki ders materyallerinin ücretsiz yayını.",
    category: "Eğitim"
  },
  {
    id: 244,
    title: "Stanford Online",
    url: "https://online.stanford.edu",
    description: "Stanford Üniversitesi'nden çevrimiçi kurslar ve programlar.",
    category: "Eğitim"
  },
  {
    id: 245,
    title: "Refactoring Guru",
    url: "https://refactoring.guru",
    description: "Tasarım desenleri ve yeniden düzenleme üzerine kolay anlaşılır eğitimler.",
    category: "Eğitim"
  },
  {
    id: 246,
    title: "exercism",
    url: "https://exercism.org",
    description: "50'den fazla programlama dilinde pratik yaparak kodlama becerilerini geliştiren bir platform.",
    category: "Eğitim"
  },
  {
    id: 247,
    title: "MUBI",
    url: "https://mubi.com",
    description: "Sinemaseverler için özenle seçilmiş filmler sunan bir yayın hizmeti.",
    category: "Eğlence"
  },
  {
    id: 248,
    title: "The Criterion Channel",
    url: "https://www.criterionchannel.com",
    description: "Klasik ve çağdaş sinemanın önemli filmlerini sunan bir yayın platformu.",
    category: "Eğlence"
  },
  {
    id: 249,
    title: "NTS Radio",
    url: "https://www.nts.live",
    description: "Küresel müzik topluluklarına odaklanan bir çevrimiçi radyo istasyonu.",
    category: "Eğlence"
  },
  {
    id: 250,
    title: "Boiler Room",
    url: "https://boilerroom.tv",
    description: "Yeraltı müzik sahnesinden canlı müzik setleri yayınlayan bir platform.",
    category: "Eğlence"
  },
  {
    id: 251,
    title: "Pitchfork",
    url: "https://pitchfork.com",
    description: "Müzik eleştirileri, haberler ve röportajlar üzerine odaklanmış bir çevrimiçi dergi.",
    category: "Eğlence"
  },
  {
    id: 252,
    title: "Resident Advisor",
    url: "https://ra.co",
    description: "Elektronik müzik, sanatçılar ve etkinlikler hakkında bir çevrimiçi dergi.",
    category: "Eğlence"
  },
  {
    id: 253,
    title: "Hypebeast",
    url: "https://hypebeast.com",
    description: "Erkek modası, sokak giyimi, sanat ve kültür üzerine bir medya platformu.",
    category: "Eğlence"
  },
  {
    id: 254,
    title: "Highsnobiety",
    url: "https://www.highsnobiety.com",
    description: "Stil, sanat, müzik ve kültürün en iyilerini belgeleyen bir yayın.",
    category: "Eğlence"
  },
  {
    id: 255,
    title: "IMDbPro",
    url: "https://pro.imdb.com",
    description: "Eğlence endüstrisi profesyonelleri için iletişim bilgileri ve sektör verileri sunan bir hizmet.",
    category: "Eğlence"
  },
  {
    id: 256,
    title: "Box Office Mojo",
    url: "https://www.boxofficemojo.com",
    description: "Filmlerin gişe hasılatını sistematik bir şekilde takip eden bir web sitesi.",
    category: "Eğlence"
  },
  {
    id: 257,
    title: "Axios",
    url: "https://www.axios.com",
    description: "Teknoloji, politika ve iş dünyası hakkında kısa ve öz haberler sunan bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 258,
    title: "Semafor",
    url: "https://www.semafor.com",
    description: "Küresel ve karmaşık hikayelere farklı bakış açıları sunan bir haber kuruluşu.",
    category: "Haberler & Medya"
  },
  {
    id: 259,
    title: "Puck",
    url: "https://puck.news",
    description: "Silikon Vadisi, Hollywood, Washington ve Wall Street üzerine içerikler.",
    category: "Haberler & Medya"
  },
  {
    id: 260,
    title: "Stratechery",
    url: "https://stratechery.com",
    description: "Teknoloji ve strateji üzerine derinlemesine analizler sunan bir blog.",
    category: "Haberler & Medya"
  },
  {
    id: 261,
    title: "The Information",
    url: "https://www.theinformation.com",
    description: "Teknoloji endüstrisi hakkında derinlemesine, özel haberler sunan bir abonelikli yayın.",
    category: "Haberler & Medya"
  },
  {
    id: 262,
    title: "Protocol",
    url: "https://www.protocol.com",
    description: "Teknoloji endüstrisindeki insanlar, güç ve politika üzerine odaklanan bir medya şirketi.",
    category: "Haberler & Medya"
  },
  {
    id: 263,
    title: "Rest of World",
    url: "https://restofworld.org",
    description: "Batı dışındaki ülkelerdeki teknoloji etkisini belgeleyen bir yayın.",
    category: "Haberler & Medya"
  },
  {
    id: 264,
    title: "9to5Mac",
    url: "https://9to5mac.com",
    description: "Apple ve ürünleri hakkında en son haberler, dedikodular ve incelemeler.",
    category: "Haberler & Medya"
  },
  {
    id: 265,
    title: "Android Police",
    url: "https://www.androidpolice.com",
    description: "Android ekosistemi hakkında haberler, incelemeler ve rehberler.",
    category: "Haberler & Medya"
  },
  {
    id: 266,
    title: "Electrek",
    url: "https://electrek.co",
    description: "Elektrikli ulaşım ve sürdürülebilir enerji endüstrisi hakkında haberler.",
    category: "Haberler & Medya"
  },
  {
    id: 267,
    title: "CoinMarketCap",
    url: "https://coinmarketcap.com",
    description: "Kripto para birimlerinin piyasa değeri, fiyatı ve hacmini takip eden bir site.",
    category: "Finans & Kripto"
  },
  {
    id: 268,
    title: "CoinGecko",
    url: "https://www.coingecko.com",
    description: "Kripto para piyasasını temel analizlerle takip eden bir veri toplayıcı.",
    category: "Finans & Kripto"
  },
  {
    id: 269,
    title: "Messari",
    url: "https://messari.io",
    description: "Kripto profesyonelleri için pazar istihbaratı, veri ve araştırma sunan bir platform.",
    category: "Finans & Kripto"
  },
  {
    id: 270,
    title: "DeFi Pulse",
    url: "https://defipulse.com",
    description: "Merkeziyetsiz finans (DeFi) protokollerindeki en son analizler ve sıralamalar.",
    category: "Finans & Kripto"
  },
  {
    id: 271,
    title: "Robinhood",
    url: "https://robinhood.com",
    description: "Hisse senetleri, ETF'ler ve kripto para birimleri için komisyonsuz yatırım platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 272,
    title: "DevDocs",
    url: "https://devdocs.io",
    description: "Birden fazla API dokümantasyonunu tek bir arayüzde birleştiren bir platform.",
    category: "Referans"
  },
  {
    id: 273,
    title: "tldr.sh",
    url: "https://tldr.sh",
    description: "Komut satırı araçları için basitleştirilmiş ve topluluk tarafından yönetilen yardım sayfaları.",
    category: "Referans"
  },
  {
    id: 274,
    title: "Cambridge Dictionary",
    url: "https://dictionary.cambridge.org",
    description: "İngilizce öğrenenler için popüler bir çevrimiçi sözlük.",
    category: "Referans"
  },
  {
    id: 275,
    title: "Merriam-Webster",
    url: "https://www.merriam-webster.com",
    description: "Amerika'nın önde gelen dil bilgisi sağlayıcısı ve sözlük yayıncısı.",
    category: "Referans"
  },
  {
    id: 276,
    title: "World Factbook (CIA)",
    url: "https://www.cia.gov/the-world-factbook/",
    description: "Dünya ülkeleri hakkında bilgi, tarih ve istatistikler.",
    category: "Referans"
  },
  {
    id: 277,
    title: "Statista",
    url: "https://www.statista.com",
    description: "Pazar ve tüketici verileri için lider bir çevrimiçi portal.",
    category: "Referans"
  },
  {
    id: 278,
    title: "Our World in Data",
    url: "https://ourworldindata.org",
    description: "Dünyanın en büyük sorunları hakkında veriler ve araştırmalar sunan bir yayın.",
    category: "Referans"
  },
  {
    id: 279,
    title: "Snopes",
    url: "https://www.snopes.com",
    description: "İnternet'teki söylentileri, şehir efsanelerini ve yanlış bilgileri araştıran bir doğruluk kontrolü sitesi.",
    category: "Referans"
  },
  {
    id: 280,
    title: "HowStuffWorks",
    url: "https://www.howstuffworks.com",
    description: "Binlerce konunun nasıl çalıştığını açıklayan makaleler ve podcast'ler sunan bir site.",
    category: "Referans"
  },
  {
    id: 281,
    title: "explainshell.com",
    url: "https://explainshell.com",
    description: "Karmaşık kabuk komutlarının ne anlama geldiğini görsel olarak açıklayan bir araç.",
    category: "Referans"
  },
  {
    id: 282,
    title: "Mastodon",
    url: "https://joinmastodon.org",
    description: "Merkezi olmayan, açık kaynaklı bir sosyal ağ platformu.",
    category: "Sosyal Medya"
  },
  {
    id: 283,
    title: "Bluesky",
    url: "https://bsky.app",
    description: "Twitter'ın kurucusu tarafından başlatılan, merkezi olmayan bir sosyal ağ protokolü.",
    category: "Sosyal Medya"
  },
  {
    id: 284,
    title: "Polywork",
    url: "https://www.polywork.com",
    description: "Profesyonellerin işbirlikleri ve projeler için bir araya geldiği bir sosyal ağ.",
    category: "Sosyal Medya"
  },
  {
    id: 285,
    title: "Elpha",
    url: "https://elpha.com/",
    description: "Teknolojideki kadınlar için profesyonel bir sosyal ağ.",
    category: "Sosyal Medya"
  },
  {
    id: 286,
    title: "Caffeine",
    url: "https://www.caffeine.tv",
    description: "Canlı yayın, oyun ve eğlence odaklı bir sosyal yayın platformu.",
    category: "Sosyal Medya"
  },
  {
    id: 287,
    title: "Newegg",
    url: "https://www.newegg.com",
    description: "Bilgisayar donanımı ve tüketici elektroniği odaklı bir çevrimiçi perakendeci.",
    category: "E-Ticaret"
  },
  {
    id: 288,
    title: "B&H Photo Video",
    url: "https://www.bhphotovideo.com",
    description: "Fotoğraf, video ve ses ekipmanları satan büyük bir perakendeci.",
    category: "E-Ticaret"
  },
  {
    id: 289,
    title: "Threadless",
    url: "https://www.threadless.com",
    description: "Sanatçılar tarafından tasarlanan tişörtler ve diğer ürünlerin satıldığı bir çevrimiçi topluluk.",
    category: "E-Ticaret"
  },
  {
    id: 290,
    title: "Gumroad",
    url: "https://gumroad.com",
    description: "Yaratıcıların dijital ürünlerini (kitaplar, yazılımlar, kurslar) doğrudan sattığı bir platform.",
    category: "E-Ticaret"
  },
  {
    id: 291,
    title: "Zappos",
    url: "https://www.zappos.com",
    description: "Ayakkabı ve giyim üzerine odaklanmış, müşteri hizmetleriyle tanınan bir e-ticaret sitesi.",
    category: "E-Ticaret"
  },
  {
    id: 292,
    title: "Kayak",
    url: "https://www.kayak.com",
    description: "Uçuşlar, oteller ve kiralık arabalar için fiyatları karşılaştıran bir seyahat arama motoru.",
    category: "Seyahat"
  },
  {
    id: 293,
    title: "Google Flights",
    url: "https://www.google.com/flights",
    description: "Uçak biletlerini aramak ve en iyi fiyatları bulmak için hızlı bir arayüz.",
    category: "Seyahat"
  },
  {
    id: 294,
    title: "Lonely Planet",
    url: "https://www.lonelyplanet.com",
    description: "Kapsamlı seyahat rehberleri, ipuçları ve ilham verici içerikler sunan bir yayıncı.",
    category: "Seyahat"
  },
  {
    id: 295,
    title: "Culture Trip",
    url: "https://theculturetrip.com",
    description: "Belirli bir yerin kültürü, yemekleri ve görülecek yerleri hakkında ilham verici içerikler sunar.",
    category: "Seyahat"
  },
  {
    id: 296,
    title: "Nomad List",
    url: "https://nomadlist.com",
    description: "Dijital göçebeler için dünyanın en iyi şehirlerini yaşama maliyeti, internet hızı ve diğer faktörlere göre sıralar.",
    category: "Seyahat"
  },
  {
    id: 297,
    title: "Metacritic",
    url: "https://www.metacritic.com",
    description: "Video oyunları, filmler, TV şovları ve müzik albümleri için eleştiri puanlarını toplayan bir site.",
    category: "Oyun"
  },
  {
    id: 298,
    title: "Rock, Paper, Shotgun",
    url: "https://www.rockpapershotgun.com",
    description: "PC oyunları üzerine odaklanmış, düşünceli makaleler ve haberler sunan bir blog.",
    category: "Oyun"
  },
  {
    id: 299,
    title: "Giant Bomb",
    url: "https://www.giantbomb.com",
    description: "Video oyunları hakkında podcast'ler, videolar ve incelemeler sunan bir topluluk sitesi.",
    category: "Oyun"
  },
  {
    id: 300,
    title: "Humble Bundle",
    url: "https://www.humblebundle.com",
    description: "Oyun, yazılım ve kitap paketlerini indirimli fiyatlarla satan ve gelirin bir kısmını hayır kurumlarına bağışlayan bir site.",
    category: "Oyun"
  },
  {
    id: 301,
    title: "Itch.io",
    url: "https://itch.io",
    description: "Bağımsız video oyunu geliştiricilerinin oyunlarını barındırdığı, sattığı ve indirdiği bir pazar yeri.",
    category: "Oyun"
  },
  {
    id: 302,
    title: "Nexor Studio",
    url: "http://nexorstudio.rf.gd",
    description: "",
    category: "Teknoloji"
  },
  {
    id: 303,
    title: "Ustandan Kapına",
    url: "http://ustadankapina.rf.gd",
    description: "",
    category: "E-Ticaret"
  },
  {
    id: 304,
    title: "Framer Motion",
    url: "https://www.framer.com/motion/",
    description: "React için üretimde kullanıma hazır, güçlü bir animasyon kütüphanesi.",
    category: "Geliştirme"
  },
  {
    id: 305,
    title: "Things 3",
    url: "https://culturedcode.com/things/",
    description: "Apple ekosistemi için tasarlanmış, zarif ve güçlü bir görev yönetimi uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 306,
    title: "CodinGame",
    url: "https://www.codingame.com",
    description: "Geliştiricilerin oyun oynayarak kodlama becerilerini geliştirmelerine olanak tanıyan bir platform.",
    category: "Eğitim"
  },
  {
    id: 307,
    title: "Ledger",
    url: "https://www.ledger.com",
    description: "Kripto varlıkları güvenli bir şekilde saklamak için donanım cüzdanları üreten bir teknoloji şirketi.",
    category: "Finans & Kripto"
  },
  {
    id: 308,
    title: "Going.com",
    url: "https://www.going.com",
    description: "Ucuz uçak bileti fırsatlarını ve seyahat ipuçlarını e-posta yoluyla sunan bir hizmet.",
    category: "Seyahat"
  },
  {
    id: 309,
    title: "DuckDuckGo",
    url: "https://duckduckgo.com",
    description: "Kullanıcı gizliliğine odaklanan ve arama geçmişini takip etmeyen bir internet arama motoru.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 310,
    title: "ModDB",
    url: "https://www.moddb.com",
    description: "Video oyunları için kullanıcı tarafından oluşturulan modifikasyonların, eklentilerin ve içeriklerin paylaşıldığı bir web sitesi.",
    category: "Oyun"
  },
  {
    id: 311,
    title: "BeReal",
    url: "https://bere.al",
    description: "Kullanıcıların her gün farklı bir saatte, 2 dakika içinde filtresiz bir fotoğraf paylaşmasını isteyen bir sosyal medya uygulaması.",
    category: "Sosyal Medya"
  },
  {
    id: 312,
    title: "TypeScript",
    url: "https://www.typescriptlang.org",
    description: "JavaScript'in üzerine tür sistemi ekleyen, Microsoft tarafından geliştirilen açık kaynaklı bir programlama dili.",
    category: "Geliştirme"
  },
  {
    id: 313,
    title: "Node.js",
    url: "https://nodejs.org",
    description: "Chrome'un V8 JavaScript motoru üzerine kurulu bir sunucu tarafı JavaScript çalışma zamanı.",
    category: "Geliştirme"
  },
  {
    id: 314,
    title: "Deno",
    url: "https://deno.land",
    description: "Node.js'in yaratıcıları tarafından geliştirilen güvenli, modern bir JavaScript ve TypeScript çalışma zamanı.",
    category: "Geliştirme"
  },
  {
    id: 315,
    title: "Rust",
    url: "https://www.rust-lang.org",
    description: "Performans, güvenilirlik ve üretkenliğe odaklanan bir sistem programlama dili.",
    category: "Geliştirme"
  },
  {
    id: 316,
    title: "Go",
    url: "https://go.dev",
    description: "Google tarafından oluşturulan basit, güvenilir ve verimli yazılımlar oluşturmak için bir programlama dili.",
    category: "Geliştirme"
  },
  {
    id: 317,
    title: "Electron",
    url: "https://www.electronjs.org",
    description: "JavaScript, HTML ve CSS ile platformlar arası masaüstü uygulamaları oluşturmak için bir çerçeve.",
    category: "Geliştirme"
  },
  {
    id: 318,
    title: "Ionic",
    url: "https://ionicframework.com",
    description: "Tek bir kod tabanıyla iOS, Android ve web için yüksek kaliteli uygulamalar oluşturma platformu.",
    category: "Geliştirme"
  },
  {
    id: 319,
    title: "Flutter",
    url: "https://flutter.dev",
    description: "Google tarafından oluşturulan, tek bir kod tabanından mobil, web ve masaüstü için güzel uygulamalar oluşturma aracı.",
    category: "Geliştirme"
  },
  {
    id: 320,
    title: "Jest",
    url: "https://jestjs.io",
    description: "Basitliğe odaklanan keyifli bir JavaScript Test Çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 321,
    title: "Testing Library",
    url: "https://testing-library.com",
    description: "Yazılım güvenini artıran basit ve eksiksiz test araçları.",
    category: "Geliştirme"
  },
  {
    id: 322,
    title: "Storybook",
    url: "https://storybook.js.org",
    description: "UI bileşenlerini izole bir şekilde oluşturmak, test etmek ve belgelemek için bir araç.",
    category: "Geliştirme"
  },
  {
    id: 323,
    title: "Webpack",
    url: "https://webpack.js.org",
    description: "Modern JavaScript uygulamaları için statik bir modül paketleyicisi.",
    category: "Geliştirme"
  },
  {
    id: 324,
    title: "Rollup",
    url: "https://rollupjs.org",
    description: "JavaScript için yeni nesil bir ES modül paketleyicisi.",
    category: "Geliştirme"
  },
  {
    id: 325,
    title: "Babel",
    url: "https://babeljs.io",
    description: "Yeni nesil JavaScript'i bugünün tarayıcılarıyla uyumlu hale getiren bir derleyici.",
    category: "Geliştirme"
  },
  {
    id: 326,
    title: "ESLint",
    url: "https://eslint.org",
    description: "JavaScript ve JSX'teki sorunları bulan ve düzelten, yapılandırılabilir bir linting aracı.",
    category: "Geliştirme"
  },
  {
    id: 327,
    title: "Prettier",
    url: "https://prettier.io",
    description: "Kodunuzu biçimlendirerek tutarlı bir stil sağlayan inatçı bir kod biçimlendirici.",
    category: "Geliştirme"
  },
  {
    id: 328,
    title: "Prisma",
    url: "https://www.prisma.io",
    description: "Node.js ve TypeScript için yeni nesil bir ORM.",
    category: "Geliştirme"
  },
  {
    id: 329,
    title: "MongoDB",
    url: "https://www.mongodb.com",
    description: "Modern uygulamalar için geliştirilmiş, belge odaklı bir NoSQL veritabanı.",
    category: "Geliştirme"
  },
  {
    id: 330,
    title: "PostgreSQL",
    url: "https://www.postgresql.org",
    description: "Genişletilebilirliğe ve SQL uyumluluğuna vurgu yapan güçlü, açık kaynaklı bir nesne-ilişkisel veritabanı sistemi.",
    category: "Geliştirme"
  },
  {
    id: 331,
    title: "Redis",
    url: "https://redis.io",
    description: "Veritabanı, önbellek ve mesaj aracısı olarak kullanılan bellek içi bir veri yapısı deposu.",
    category: "Geliştirme"
  },
  {
    id: 332,
    title: "Kubernetes",
    url: "https://kubernetes.io",
    description: "Konteynerli uygulamaların dağıtımını, ölçeklendirilmesini ve yönetimini otomatikleştirmek için açık kaynaklı bir sistem.",
    category: "Geliştirme"
  },
  {
    id: 333,
    title: "Terraform",
    url: "https://www.terraform.io",
    description: "Altyapıyı kod olarak oluşturmak, değiştirmek ve sürümlemek için bir araç.",
    category: "Geliştirme"
  },
  {
    id: 334,
    title: "Ansible",
    url: "https://www.ansible.com",
    description: "Uygulama dağıtımı, yapılandırma yönetimi ve otomasyon için bir BT otomasyon aracı.",
    category: "Geliştirme"
  },
  {
    id: 335,
    title: "Jenkins",
    url: "https://www.jenkins.io",
    description: "Yazılım geliştirme süreçlerinin çeşitli yönlerini otomatikleştirmek için kullanılan açık kaynaklı bir otomasyon sunucusu.",
    category: "Geliştirme"
  },
  {
    id: 336,
    title: "CircleCI",
    url: "https://circleci.com",
    description: "Sürekli entegrasyon ve teslimat için kullanılan bir platform.",
    category: "Geliştirme"
  },
  {
    id: 337,
    title: "Sentry",
    url: "https://sentry.io",
    description: "Geliştiricilerin hataları gerçek zamanlı olarak teşhis etmelerine, düzeltmelerine ve optimize etmelerine yardımcı olan hata izleme platformu.",
    category: "Geliştirme"
  },
  {
    id: 338,
    title: "Datadog",
    url: "https://www.datadoghq.com",
    description: "Bulut ölçekli uygulamalar için izleme ve analiz platformu.",
    category: "Geliştirme"
  },
  {
    id: 339,
    title: "New Relic",
    url: "https://newrelic.com",
    description: "Yazılım performansını ve kullanılabilirliğini izlemek için bir gözlemlenebilirlik platformu.",
    category: "Geliştirme"
  },
  {
    id: 340,
    title: "Apollo GraphQL",
    url: "https://www.apollographql.com",
    description: "GraphQL uygulamaları oluşturmak için bir veri grafiği platformu.",
    category: "Geliştirme"
  },
  {
    id: 341,
    title: "Strapi",
    url: "https://strapi.io",
    description: "Açık kaynaklı, başsız bir CMS (İçerik Yönetim Sistemi).",
    category: "Geliştirme"
  },
  {
    id: 342,
    title: "Contentful",
    url: "https://www.contentful.com",
    description: "Dijital ürünler için içerik oluşturmak, yönetmek ve dağıtmak için bir API-öncelikli CMS.",
    category: "Geliştirme"
  },
  {
    id: 343,
    title: "Sanity.io",
    url: "https://www.sanity.io",
    description: "Yapılandırılmış içerik için birleşik bir içerik platformu.",
    category: "Geliştirme"
  },
  {
    id: 344,
    title: "Next.js",
    url: "https://nextjs.org",
    description: "React tabanlı, sunucu tarafı renderlama ve statik site oluşturma yetenekleri sunan bir web geliştirme çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 345,
    title: "Nuxt.js",
    url: "https://nuxtjs.org",
    description: "Vue.js tabanlı, sezgisel ve güçlü bir web geliştirme çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 346,
    title: "Gatsby",
    url: "https://www.gatsbyjs.com",
    description: "React tabanlı, hızlı ve modern web siteleri oluşturmak için bir statik site üreteci.",
    category: "Geliştirme"
  },
  {
    id: 347,
    title: "Remix",
    url: "https://remix.run",
    description: "Daha iyi kullanıcı deneyimlerine odaklanan bir React web çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 348,
    title: "Astro",
    url: "https://astro.build",
    description: "Hızlı, içerik odaklı web siteleri oluşturmak için tasarlanmış bir web çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 349,
    title: "Playwright",
    url: "https://playwright.dev",
    description: "Modern web uygulamaları için güvenilir uçtan uca testler sağlayan bir otomasyon kütüphanesi.",
    category: "Geliştirme"
  },
  {
    id: 350,
    title: "Cypress",
    url: "https://www.cypress.io",
    description: "Tarayıcıda çalışan her şey için hızlı, kolay ve güvenilir testler.",
    category: "Geliştirme"
  },
  {
    id: 351,
    title: "web.dev",
    url: "https://web.dev",
    description: "Google tarafından geliştiricilere modern web yetenekleri hakkında bilgi veren bir kaynak.",
    category: "Geliştirme"
  },
  {
    id: 352,
    title: "Can I use...",
    url: "https://caniuse.com",
    description: "Masaüstü ve mobil web tarayıcıları için ön uç web teknolojileri destek tabloları.",
    category: "Geliştirme"
  },
  {
    id: 353,
    title: "JSDelivr",
    url: "https://www.jsdelivr.com",
    description: "Geliştiriciler için ücretsiz, hızlı ve güvenilir bir açık kaynaklı CDN.",
    category: "Geliştirme"
  },
  {
    id: 354,
    title: "unpkg",
    url: "https://unpkg.com",
    description: "npm kayıt defterindeki her şey için hızlı, küresel bir içerik dağıtım ağı.",
    category: "Geliştirme"
  },
  {
    id: 355,
    title: "cdnjs",
    url: "https://cdnjs.com",
    description: "Popüler ön uç kütüphaneleri ve varlıkları için bir CDN hizmeti.",
    category: "Geliştirme"
  },
  {
    id: 356,
    title: "Socket.IO",
    url: "https://socket.io",
    description: "Gerçek zamanlı, çift yönlü ve olay tabanlı iletişimi sağlayan bir JavaScript kütüphanesi.",
    category: "Geliştirme"
  },
  {
    id: 357,
    title: "Vite",
    url: "https://vitejs.dev",
    description: "Son derece hızlı bir ön uç geliştirme ortamı ve derleme aracı.",
    category: "Geliştirme"
  },
  {
    id: 358,
    title: "Bun",
    url: "https://bun.sh",
    description: "JavaScript ve TypeScript uygulamaları için tasarlanmış, hepsi bir arada, inanılmaz hızlı bir çalışma zamanı ve araç kiti.",
    category: "Geliştirme"
  },
  {
    id: 359,
    title: "Iconscout",
    url: "https://iconscout.com",
    description: "Yüksek kaliteli ikonlar, illüstrasyonlar ve stok fotoğraflar için bir tasarım kaynakları platformu.",
    category: "Tasarım"
  },
  {
    id: 360,
    title: "The Noun Project",
    url: "https://thenounproject.com",
    description: "Her şey için ikonlar sunan geniş bir koleksiyon.",
    category: "Tasarım"
  },
  {
    id: 361,
    title: "Flaticon",
    url: "https://www.flaticon.com",
    description: "Projeleriniz için en büyük ücretsiz ikon veritabanı.",
    category: "Tasarım"
  },
  {
    id: 362,
    title: "Lordicon",
    url: "https://lordicon.com",
    description: "Dijital ürünleriniz için güçlü animasyonlu ikonlar kütüphanesi.",
    category: "Tasarım"
  },
  {
    id: 363,
    title: "unDraw",
    url: "https://undraw.co",
    description: "Herkesin kullanabileceği açık kaynaklı illüstrasyonlar koleksiyonu.",
    category: "Tasarım"
  },
  {
    id: 364,
    title: "Humaaans",
    url: "https://www.humaaans.com",
    description: "İnsan karakterlerini karıştırıp eşleştirebileceğiniz bir tasarım kütüphanesi.",
    category: "Tasarım"
  },
  {
    id: 365,
    title: "Blush",
    url: "https://blush.design",
    description: "Dünyanın dört bir yanından sanatçıların illüstrasyonlarını kolayca özelleştirip kullanabileceğiniz bir platform.",
    category: "Tasarım"
  },
  {
    id: 366,
    title: "MyColor.space",
    url: "https://mycolor.space",
    description: "Renk paletleri ve gradyanlar oluşturan bir renk üreteci.",
    category: "Tasarım"
  },
  {
    id: 367,
    title: "Happy Hues",
    url: "https://www.happyhues.co",
    description: "Gerçek dünya örnekleriyle renk paleti ilhamları sunan bir site.",
    category: "Tasarım"
  },
  {
    id: 368,
    title: "Color Hunt",
    url: "https://colorhunt.co",
    description: "Tasarımcılar ve sanatçılar için binlerce trend renk paleti sunan bir koleksiyon.",
    category: "Tasarım"
  },
  {
    id: 369,
    title: "Adobe Color",
    url: "https://color.adobe.com",
    description: "Renk temaları oluşturmak ve keşfetmek için bir Adobe aracı.",
    category: "Tasarım"
  },
  {
    id: 370,
    title: "UI Garage",
    url: "https://uigarage.net",
    description: "Tasarımcılar için UI desenleri ve ilham kaynakları koleksiyonu.",
    category: "Tasarım"
  },
  {
    id: 371,
    title: "DaFont",
    url: "https://www.dafont.com",
    description: "İndirilebilir yazı tiplerinin bulunduğu büyük bir arşiv.",
    category: "Tasarım"
  },
  {
    id: 372,
    title: "WhatFontIs",
    url: "https://www.whatfontis.com",
    description: "Herhangi bir görüntüden yazı tipini bulmanızı sağlayan bir araç.",
    category: "Tasarım"
  },
  {
    id: 373,
    title: "Typewolf",
    url: "https://www.typewolf.com",
    description: "Web'deki tipografi trendleri için bir kaynak.",
    category: "Tasarım"
  },
  {
    id: 374,
    title: "Fonts In Use",
    url: "https://fontsinuse.com",
    description: "Gerçek dünyadaki projelerde kullanılan yazı tiplerinin bir arşivi.",
    category: "Tasarım"
  },
  {
    id: 375,
    title: "Designspiration",
    url: "https://www.designspiration.com",
    description: "Tasarım ilhamı bulmak ve kaydetmek için bir platform.",
    category: "Tasarım"
  },
  {
    id: 376,
    title: "Savee",
    url: "https://savee.it",
    description: "Tasarımcılar için görsel bir ilham toplama platformu.",
    category: "Tasarım"
  },
  {
    id: 377,
    title: "HTTPSTER",
    url: "https://httpster.net",
    description: "Harika web tasarım ilhamlarından oluşan bir koleksiyon.",
    category: "Tasarım"
  },
  {
    id: 378,
    title: "SiteSee",
    url: "https://sitesee.co",
    description: "Modern web sitelerinden oluşan bir galeri.",
    category: "Tasarım"
  },
  {
    id: 379,
    title: "Landingfolio",
    url: "https://www.landingfolio.com",
    description: "En iyi açılış sayfası tasarımlarından ilham almak için bir kaynak.",
    category: "Tasarım"
  },
  {
    id: 380,
    title: "Godly",
    url: "https://godly.website",
    description: "Web'deki en iyi web sitesi tasarımlarından oluşan bir galeri.",
    category: "Tasarım"
  },
  {
    id: 381,
    title: "Lapa Ninja",
    url: "https://www.lapa.ninja",
    description: "En iyi açılış sayfası tasarımlarından oluşan bir galeri.",
    category: "Tasarım"
  },
  {
    id: 382,
    title: "Raindrop.io",
    url: "https://raindrop.io",
    description: "Tüm yer imlerinizi, makalelerinizi ve fotoğraflarınızı tek bir yerde saklayan bir yer imi yöneticisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 383,
    title: "Are.na",
    url: "https://www.are.na",
    description: "Fikirleri kaydetmek, organize etmek ve paylaşmak için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 384,
    title: "Eraser.io",
    url: "https://www.eraser.io",
    description: "Mühendislik ekipleri için dokümantasyon, diyagramlar ve beyaz tahta aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 385,
    title: "Craft.do",
    url: "https://www.craft.do",
    description: "Yapılandırılmış ve güzel belgeler oluşturmak için bir not alma ve yazma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 386,
    title: "Whimsical",
    url: "https://whimsical.com",
    description: "Akış şemaları, tel kafesler ve zihin haritaları oluşturmak için işbirlikçi bir çalışma alanı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 387,
    title: "Excalidraw",
    url: "https://excalidraw.com",
    description: "El çizimi hissiyatı veren sanal bir işbirlikçi beyaz tahta.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 388,
    title: "tldraw",
    url: "https://www.tldraw.com",
    description: "Küçük, basit ve eğlenceli bir çizim uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 390,
    title: "RegExr",
    url: "https://regexr.com",
    description: "Düzenli ifadeler oluşturmak ve test etmek için bir çevrimiçi araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 391,
    title: "JSON Formatter",
    url: "https://jsonformatter.org",
    description: "JSON verilerini doğrulamak ve biçimlendirmek için bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 392,
    title: "JWT.io",
    url: "https://jwt.io",
    description: "JSON Web Token'larını (JWT) kodlamak ve çözmek için bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 393,
    title: "Insomnia",
    url: "https://insomnia.rest",
    description: "API'ler tasarlamak ve test etmek için bir işbirliği platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 394,
    title: "Hoppscotch",
    url: "https://hoppscotch.io",
    description: "Açık kaynaklı bir API geliştirme ekosistemi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 395,
    title: "GitKraken",
    url: "https://www.gitkraken.com",
    description: "Geliştiriciler için efsanevi bir Git GUI istemcisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 396,
    title: "Sourcetree",
    url: "https://www.sourcetreeapp.com",
    description: "Git ve Mercurial için ücretsiz bir masaüstü istemcisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 397,
    title: "iTerm2",
    url: "https://iterm2.com",
    description: "macOS için standart terminalin yerine geçen güçlü bir terminal emülatörü.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 398,
    title: "Hyper",
    url: "https://hyper.is",
    description: "HTML, CSS ve JavaScript tabanlı, genişletilebilir bir terminal.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 399,
    title: "Warp",
    url: "https://www.warp.dev",
    description: "21. yüzyıl için yeniden tasarlanmış, Rust tabanlı modern bir terminal.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 400,
    title: "Oh My Zsh",
    url: "https://ohmyz.sh",
    description: "Zsh yapılandırmanızı yönetmek için açık kaynaklı, topluluk odaklı bir çerçeve.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 401,
    title: "Homebrew",
    url: "https://brew.sh",
    description: "macOS (veya Linux) için eksik paket yöneticisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 402,
    title: "ngrok",
    url: "https://ngrok.com",
    description: "Yerel sunucularınızı güvenli tünellerle internete açan bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 403,
    title: "I Love PDF",
    url: "https://www.ilovepdf.com",
    description: "PDF dosyalarını birleştirmek, bölmek, sıkıştırmak ve dönüştürmek için çevrimiçi araçlar.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 404,
    title: "Smallpdf",
    url: "https://smallpdf.com",
    description: "PDF sorunlarınız için basit ve güvenli bir çözüm.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 405,
    title: "Kap",
    url: "https://kap.app",
    description: "macOS için açık kaynaklı bir ekran kayıt uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 406,
    title: "Screen Studio",
    url: "https://www.screen.studio",
    description: "Zahmetsizce güzel ekran kayıtları oluşturmak için bir macOS uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 407,
    title: "CleanShot X",
    url: "https://cleanshot.com",
    description: "macOS için üstün bir ekran yakalama aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 408,
    title: "Bitly",
    url: "https://bitly.com",
    description: "Bağlantıları kısaltmak ve analiz etmek için bir URL kısaltma hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 409,
    title: "Cutt.ly",
    url: "https://cutt.ly",
    description: "Ücretsiz özel bir URL kısaltıcı ve bağlantı yönetim platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 410,
    title: "Mailchimp",
    url: "https://mailchimp.com",
    description: "E-posta pazarlama ve otomasyon hizmetleri sunan bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 411,
    title: "ConvertKit",
    url: "https://convertkit.com",
    description: "Yaratıcılar için bir kitle oluşturma ve e-posta pazarlama platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 412,
    title: "Substack",
    url: "https://substack.com",
    description: "Yazarların kendi e-posta bültenlerini başlatmaları için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 413,
    title: "Typeform",
    url: "https://www.typeform.com",
    description: "Konuşma tabanlı ve etkileşimli formlar, anketler ve sınavlar oluşturma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 414,
    title: "SurveyMonkey",
    url: "https://www.surveymonkey.com",
    description: "Çevrimiçi anketler oluşturmak ve göndermek için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 415,
    title: "Jotform",
    url: "https://www.jotform.com",
    description: "Güçlü ve özelleştirilebilir çevrimiçi formlar oluşturma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 416,
    title: "Semrush",
    url: "https://www.semrush.com",
    description: "SEO, PPC, içerik ve sosyal medya pazarlaması için bir görünürlük yönetimi platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 417,
    title: "Ahrefs",
    url: "https://ahrefs.com",
    description: "SEO uzmanları için anahtar kelime araştırması, rakip analizi ve backlink denetimi araçları.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 418,
    title: "Moz",
    url: "https://moz.com",
    description: "SEO yazılımı ve veri araçları sunan bir şirket.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 419,
    title: "Buffer",
    url: "https://buffer.com",
    description: "Küçük işletmeler için sosyal medya yönetimi platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 420,
    title: "Hootsuite",
    url: "https://www.hootsuite.com",
    description: "Sosyal medya hesaplarını tek bir yerden yönetmek için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 421,
    title: "Later",
    url: "https://later.com",
    description: "Instagram, Facebook, Pinterest ve Twitter için sosyal medya zamanlama aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 422,
    title: "Mail.ru",
    url: "https://mail.ru",
    description: "Rusya'nın en büyük internet şirketlerinden biri tarafından sunulan popüler bir e-posta hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 423,
    title: "OpenAI",
    url: "https://openai.com",
    description: "Yapay zeka araştırma ve dağıtım şirketi. GPT modellerinin ve DALL-E'nin yaratıcısı.",
    category: "Yapay Zeka"
  },
  {
    id: 424,
    title: "ChatGPT",
    url: "https://chat.openai.com",
    description: "OpenAI tarafından geliştirilen, diyalog tabanlı bir yapay zeka sohbet robotu.",
    category: "Yapay Zeka"
  },
  {
    id: 425,
    title: "Hugging Face",
    url: "https://huggingface.co",
    description: "Doğal dil işleme teknolojileri üzerine odaklanmış, açık kaynaklı bir yapay zeka topluluğu ve platformu.",
    category: "Yapay Zeka"
  },
  {
    id: 426,
    title: "Perplexity AI",
    url: "https://www.perplexity.ai",
    description: "Doğru ve kaynakça belirtilmiş cevaplar sunan bir yapay zeka arama motoru.",
    category: "Yapay Zeka"
  },
  {
    id: 427,
    title: "Claude",
    url: "https://claude.ai",
    description: "Anthropic tarafından geliştirilen, güvenliğe odaklanmış bir yapay zeka asistanı.",
    category: "Yapay Zeka"
  },
  {
    id: 428,
    title: "Midjourney",
    url: "https://www.midjourney.com",
    description: "Metin açıklamalarından görüntüler oluşturan bir yapay zeka programı.",
    category: "Yapay Zeka"
  },
  {
    id: 429,
    title: "Leonardo.Ai",
    url: "https://leonardo.ai",
    description: "Oyun varlıkları, sanat ve görüntüler oluşturmak için bir yapay zeka platformu.",
    category: "Yapay Zeka"
  },
  {
    id: 430,
    title: "Runway",
    url: "https://runwayml.com",
    description: "Video, ses ve görüntü düzenleme için yapay zeka araçları sunan bir platform.",
    category: "Yapay Zeka"
  },
  {
    id: 431,
    title: "ElevenLabs",
    url: "https://elevenlabs.io",
    description: "Yapay zeka kullanarak gerçekçi metin-konuşma ve ses klonlama hizmetleri sunar.",
    category: "Yapay Zeka"
  },
  {
    id: 432,
    title: "Poe",
    url: "https://poe.com",
    description: "Farklı yapay zeka modelleriyle sohbet etmenizi sağlayan bir Quora platformu.",
    category: "Yapay Zeka"
  },
  {
    id: 433,
    title: "Replicate",
    url: "https://replicate.com",
    description: "Geliştiricilerin bulutta makine öğrenmesi modellerini çalıştırmaları için bir platform.",
    category: "Yapay Zeka"
  },
  {
    id: 434,
    title: "Google Gemini",
    url: "https://gemini.google.com",
    description: "Google tarafından geliştirilen çok modlu bir yapay zeka modeli ve sohbet arayüzü.",
    category: "Yapay Zeka"
  },
  {
    id: 435,
    title: "Cursor",
    url: "https://cursor.sh",
    description: "Yapay zeka ile kod yazmak, düzenlemek ve sohbet etmek için tasarlanmış bir kod editörü.",
    category: "Yapay Zeka"
  },
  {
    id: 436,
    title: "Code.org",
    url: "https://code.org",
    description: "Bilgisayar bilimi eğitimine erişimi genişletmeyi amaçlayan kar amacı gütmeyen bir kuruluş.",
    category: "Eğitim"
  },
  {
    id: 437,
    title: "3Blue1Brown",
    url: "https://www.3blue1brown.com",
    description: "Karmaşık matematik konularını görsel ve sezgisel bir şekilde açıklayan animasyonlu videolar.",
    category: "Eğitim"
  },
  {
    id: 438,
    title: "SoloLearn",
    url: "https://www.sololearn.com",
    description: "Kodlama öğrenmek için dersler ve pratik alıştırmalar sunan bir mobil ve web platformu.",
    category: "Eğitim"
  },
  {
    id: 439,
    title: "FutureLearn",
    url: "https://www.futurelearn.com",
    description: "Dünya çapındaki üniversitelerden ve kuruluşlardan çevrimiçi kurslar sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 440,
    title: "Academic Earth",
    url: "https://academicearth.org",
    description: "Dünyanın en iyi üniversitelerinden ücretsiz çevrimiçi kurslar koleksiyonu.",
    category: "Eğitim"
  },
  {
    id: 441,
    title: "TED",
    url: "https://www.ted.com",
    description: "Teknoloji, Eğlence ve Tasarım (TED) konferanslarından ilham verici konuşmalar.",
    category: "Eğitim"
  },
  {
    id: 442,
    title: "Skillcrush",
    url: "https://skillcrush.com",
    description: "Teknoloji alanında kariyer yapmak isteyenler için çevrimiçi kodlama ve tasarım dersleri.",
    category: "Eğitim"
  },
  {
    id: 443,
    title: "Big Think",
    url: "https://bigthink.com",
    description: "Uzmanların büyük fikirleri ve temel becerileri paylaştığı videolar ve makaleler.",
    category: "Eğitim"
  },
  {
    id: 444,
    title: "Kraken",
    url: "https://www.kraken.com",
    description: "Bitcoin ve diğer kripto para birimlerini alıp satmak için güvenli bir borsa.",
    category: "Finans & Kripto"
  },
  {
    id: 445,
    title: "KuCoin",
    url: "https://www.kucoin.com",
    description: "Çok çeşitli dijital varlıklar sunan küresel bir kripto para borsası.",
    category: "Finans & Kripto"
  },
  {
    id: 446,
    title: "MetaMask",
    url: "https://metamask.io",
    description: "Ethereum tabanlı merkezi olmayan uygulamalara (DApps) erişmenizi sağlayan bir tarayıcı cüzdanı.",
    category: "Finans & Kripto"
  },
  {
    id: 447,
    title: "Phantom",
    url: "https://phantom.app",
    description: "Solana blok zinciri için tasarlanmış bir kripto cüzdanı.",
    category: "Finans & Kripto"
  },
  {
    id: 448,
    title: "Zerion",
    url: "https://zerion.io",
    description: "DeFi ve NFT portföyünüzü tek bir yerden yönetmek için bir akıllı cüzdan.",
    category: "Finans & Kripto"
  },
  {
    id: 449,
    title: "Zapper",
    url: "https://zapper.fi",
    description: "DeFi varlıklarınızı ve borçlarınızı takip etmek için bir portföy yönetim panosu.",
    category: "Finans & Kripto"
  },
  {
    id: 450,
    title: "Dune",
    url: "https://dune.com",
    description: "Kripto verilerini sorgulamak, analiz etmek ve görselleştirmek için bir platform.",
    category: "Finans & Kripto"
  },
  {
    id: 451,
    title: "Nansen",
    url: "https://www.nansen.ai",
    description: "Kripto para piyasaları için zincir üstü (on-chain) analiz platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 452,
    title: "The Block",
    url: "https://www.theblock.co",
    description: "Kripto ve blok zinciri alanında araştırma, analiz ve haberler sunan bir kaynak.",
    category: "Finans & Kripto"
  },
  {
    id: 453,
    title: "CoinDesk",
    url: "https://www.coindesk.com",
    description: "Bitcoin ve dijital para birimleri için haberler, fiyatlar ve bilgiler sunan bir medya platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 454,
    title: "Decrypt",
    url: "https://decrypt.co",
    description: "Web3 ve merkezi olmayan web hakkında eğitim ve haberler sunan bir medya kuruluşu.",
    category: "Finans & Kripto"
  },
  {
    id: 455,
    title: "Mint",
    url: "https://mint.intuit.com",
    description: "Kişisel finans ve bütçe yönetimi için bir uygulama.",
    category: "Finans & Kripto"
  },
  {
    id: 456,
    title: "YNAB",
    url: "https://www.youneedabudget.com",
    description: "Paranızı yönetmenize yardımcı olan bir bütçeleme yöntemi ve yazılımı.",
    category: "Finans & Kripto"
  },
  {
    id: 457,
    title: "Ecosia",
    url: "https://www.ecosia.org",
    description: "Arama gelirlerini ağaç dikmek için kullanan bir arama motoru.",
    category: "Referans"
  },
  {
    id: 458,
    title: "Brave",
    url: "https://brave.com",
    description: "Gizliliğe odaklanan ve reklamları engelleyen bir web tarayıcısı.",
    category: "Referans"
  },
  {
    id: 459,
    title: "Startpage",
    url: "https://www.startpage.com",
    description: "Google arama sonuçlarını anonim olarak sunan gizlilik odaklı bir arama motoru.",
    category: "Referans"
  },
  {
    id: 460,
    title: "SearX",
    url: "https://searx.space",
    description: "Birden fazla arama motorundan sonuçları toplayan, gizliliğe saygılı bir meta arama motoru.",
    category: "Referans"
  },
  {
    id: 461,
    title: "archive.today",
    url: "https://archive.ph",
    description: "Web sayfalarının anlık görüntülerini alıp saklayan bir arşiv sitesi.",
    category: "Referans"
  },
  {
    id: 462,
    title: "Google Scholar",
    url: "https://scholar.google.com",
    description: "Akademik literatür için geniş bir arama motoru.",
    category: "Referans"
  },
  {
    id: 463,
    title: "Google Trends",
    url: "https://trends.google.com",
    description: "Arama terimlerinin popülerliğini analiz eden bir Google aracı.",
    category: "Referans"
  },
  {
    id: 464,
    title: "GitHub Explore",
    url: "https://github.com/explore",
    description: "GitHub'daki trend olan ve popüler projeleri keşfetmek için bir bölüm.",
    category: "Referans"
  },
  {
    id: 465,
    title: "Shields.io",
    url: "https://shields.io",
    description: "Projeleriniz için okunabilir ve tutarlı bir SVG rozetleri oluşturma hizmeti.",
    category: "Referans"
  },
  {
    id: 466,
    title: "Simkl",
    url: "https://simkl.com",
    description: "İzlediğiniz TV şovlarını, animeleri ve filmleri takip etmek için bir platform.",
    category: "Eğlence"
  },
  {
    id: 467,
    title: "Plex",
    url: "https://www.plex.tv",
    description: "Kişisel medya koleksiyonunuzu düzenlemek ve herhangi bir cihazda izlemek için bir medya sunucusu.",
    category: "Eğlence"
  },
  {
    id: 468,
    title: "Jellyfin",
    url: "https://jellyfin.org",
    description: "Açık kaynaklı, ücretsiz bir medya sistemi.",
    category: "Eğlence"
  },
  {
    id: 469,
    title: "Nexus Mods",
    url: "https://www.nexusmods.com",
    description: "Video oyunları için modifikasyonların paylaşıldığı en büyük topluluklardan biri.",
    category: "Eğlence"
  },
  {
    id: 470,
    title: "PC Gamer",
    url: "https://www.pcgamer.com",
    description: "PC oyunları hakkında haberler, incelemeler ve özellikler sunan bir yayın.",
    category: "Eğlence"
  },
  {
    id: 471,
    title: "Kotaku",
    url: "https://kotaku.com",
    description: "Video oyunları, oyuncular ve oyun kültürü üzerine bir blog.",
    category: "Eğlence"
  },
  {
    id: 472,
    title: "9GAG",
    url: "https://9gag.com",
    description: "Kullanıcı tarafından oluşturulan memler, GIF'ler ve komik görsellerin paylaşıldığı bir platform.",
    category: "Eğlence"
  },
  {
    id: 473,
    title: "Imgur",
    url: "https://imgur.com",
    description: "Viral görseller, memler ve GIF'lerin paylaşıldığı bir çevrimiçi görüntü barındırma hizmeti.",
    category: "Eğlence"
  },
  {
    id: 474,
    title: "Know Your Meme",
    url: "https://knowyourmeme.com",
    description: "İnternet memlerini ve viral fenomenleri belgeleyen bir web sitesi.",
    category: "Eğlence"
  },
  {
    id: 475,
    title: "TV Time",
    url: "https://www.tvtime.com",
    description: "İzlediğiniz dizileri ve filmleri takip etmenize ve keşfetmenize yardımcı olan bir uygulama.",
    category: "Eğlence"
  },
  {
    id: 476,
    title: "Strava",
    url: "https://www.strava.com",
    description: "Koşu ve bisiklet aktivitelerini takip etmek için bir sosyal ağ.",
    category: "Sağlık & Fitness"
  },
  {
    id: 477,
    title: "Fitbit",
    url: "https://www.fitbit.com",
    description: "Aktivite, uyku ve kilo takibi yapan giyilebilir cihazlar ve bir uygulama.",
    category: "Sağlık & Fitness"
  },
  {
    id: 478,
    title: "Healthline",
    url: "https://www.healthline.com",
    description: "Sağlık ve esenlik konularında bilgi ve haberler sunan bir kaynak.",
    category: "Sağlık & Fitness"
  },
  {
    id: 479,
    title: "Mayo Clinic",
    url: "https://www.mayoclinic.org",
    description: "Hastalıklar, belirtiler ve sağlık yönetimi hakkında güvenilir tıbbi bilgiler.",
    category: "Sağlık & Fitness"
  },
  {
    id: 480,
    title: "Examine",
    url: "https://examine.com",
    description: "Beslenme ve takviyeler üzerine kanıta dayalı, tarafsız araştırmalar sunan bir kaynak.",
    category: "Sağlık & Fitness"
  },
  {
    id: 481,
    title: "ÇiçekSepeti",
    url: "https://www.ciceksepeti.com",
    description: "Çiçek, hediye ve gurme ürünleri için online bir alışveriş sitesi.",
    category: "E-Ticaret"
  },
  {
    id: 482,
    title: "Dolap",
    url: "https://dolap.com",
    description: "İkinci el moda ürünlerinin alınıp satıldığı bir mobil uygulama.",
    category: "E-Ticaret"
  },
  {
    id: 483,
    title: "letgo",
    url: "https://www.letgo.com",
    description: "Yakınınızdaki ikinci el ürünleri alıp satmak için bir pazar yeri.",
    category: "E-Ticaret"
  },
  {
    id: 484,
    title: "Pazarama",
    url: "https://www.pazarama.com",
    description: "Elektronikten modaya, süpermarketten tatile geniş ürün yelpazesi sunan bir e-ticaret platformu.",
    category: "E-Ticaret"
  },
  {
    id: 485,
    title: "BetaList",
    url: "https://betalist.com",
    description: "Geleceğin internet girişimlerini keşfetmek için bir platform.",
    category: "Haberler & Medya"
  },
  {
    id: 486,
    title: "Habertürk",
    url: "https://www.haberturk.com",
    description: "Türkiye ve dünyadan en son haberler, ekonomi ve spor haberleri.",
    category: "Haberler & Medya"
  },
  {
    id: 487,
    title: "Sözcü",
    url: "https://www.sozcu.com.tr",
    description: "Türkiye'nin en çok okunan gazetelerinden birinin çevrimiçi haber portalı.",
    category: "Haberler & Medya"
  },
  {
    id: 488,
    title: "Milliyet",
    url: "https://www.milliyet.com.tr",
    description: "Güncel, siyaset, spor, ekonomi ve yaşam haberleri sunan bir haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 489,
    title: "Hürriyet",
    url: "https://www.hurriyet.com.tr",
    description: "Türkiye'nin önde gelen haber ve medya kuruluşlarından biri.",
    category: "Haberler & Medya"
  },
  {
    id: 490,
    title: "NTV",
    url: "https://www.ntv.com.tr",
    description: "Türkiye ve dünyadan son dakika haberleri, ekonomi, siyaset ve spor haberleri.",
    category: "Haberler & Medya"
  },
  {
    id: 491,
    title: "Bloomberg HT",
    url: "https://www.bloomberght.com",
    description: "Türkiye ve dünya ekonomisi hakkında finans haberleri ve analizler.",
    category: "Haberler & Medya"
  },
  {
    id: 492,
    title: "Sputnik Türkiye",
    url: "https://sputniknews.com.tr",
    description: "Uluslararası bir haber ajansının Türkiye odaklı haber portalı.",
    category: "Haberler & Medya"
  },
  {
    id: 493,
    title: "Webtekno",
    url: "https://www.webtekno.com",
    description: "Teknoloji, internet, bilim ve oyun dünyasından haberler sunan bir yayın.",
    category: "Haberler & Medya"
  },
  {
    id: 494,
    title: "DonanımHaber",
    url: "https://www.donanimhaber.com",
    description: "Türkiye'nin en büyük teknoloji ve donanım forumu ve haber sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 495,
    title: "ShiftDelete.Net",
    url: "https://shiftdelete.net",
    description: "Teknoloji dünyasından en son haberler, incelemeler ve videolar.",
    category: "Haberler & Medya"
  },
  {
    id: 496,
    title: "LOG",
    url: "https://www.log.com.tr",
    description: "Teknoloji ve dijital yaşam üzerine odaklanmış bir haber ve içerik sitesi.",
    category: "Haberler & Medya"
  },
  {
    id: 497,
    title: "The Wall Street Journal",
    url: "https://www.wsj.com",
    description: "İş ve finans odaklı, küresel etkiye sahip bir Amerikan gazetesi.",
    category: "Haberler & Medya"
  },
  {
    id: 498,
    title: "The Economist",
    url: "https://www.economist.com",
    description: "Uluslararası iş, politika ve teknoloji üzerine derinlemesine analizler sunan bir dergi.",
    category: "Haberler & Medya"
  },
  {
    id: 499,
    title: "Fanatical",
    url: "https://www.fanatical.com",
    description: "Resmi lisanslı PC oyunları, paketler ve e-kitaplar için bir dijital mağaza.",
    category: "Oyun"
  },
  {
    id: 500,
    title: "Green Man Gaming",
    url: "https://www.greenmangaming.com",
    description: "Video oyunları için dijital perakende mağazası ve topluluk platformu.",
    category: "Oyun"
  },
  {
    id: 501,
    title: "Mod.io",
    url: "https://mod.io",
    description: "Oyunlar için platformlar arası kullanıcı tarafından oluşturulan içerik (UGC) ve mod desteği.",
    category: "Oyun"
  },
  {
    id: 502,
    title: "PostHog",
    url: "https://posthog.com",
    description: "Geliştiriciler için ürün analitiği, oturum kaydı ve özellik bayrakları sunan açık kaynaklı bir platform.",
    category: "Geliştirme"
  },
  {
    id: 503,
    title: "Qwik",
    url: "https://qwik.builder.io",
    description: "Yeniden yüklenebilir (resumable) ve anında yüklenen web uygulamaları için bir JavaScript çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 504,
    title: "SolidJS",
    url: "https://www.solidjs.com",
    description: "Kullanıcı arayüzleri oluşturmak için bildirimsel ve reaktif bir JavaScript kütüphanesi.",
    category: "Geliştirme"
  },
  {
    id: 505,
    title: "Docusaurus",
    url: "https://docusaurus.io",
    description: "React tabanlı, optimize edilmiş dokümantasyon web siteleri oluşturmak için bir statik site üreteci.",
    category: "Geliştirme"
  },
  {
    id: 506,
    title: "Biome",
    url: "https://biomejs.dev",
    description: "Web projeleri için hızlı ve birleşik bir linter ve biçimlendirici.",
    category: "Geliştirme"
  },
  {
    id: 507,
    title: "Turbopack",
    url: "https://turbo.build/pack",
    description: "Vercel tarafından geliştirilen, Rust tabanlı artımlı bir paketleyici.",
    category: "Geliştirme"
  },
  {
    id: 508,
    title: "esbuild",
    url: "https://esbuild.github.io",
    description: "Go dilinde yazılmış, son derece hızlı bir JavaScript paketleyicisi ve küçültücüsü.",
    category: "Geliştirme"
  },
  {
    id: 509,
    title: "pnpm",
    url: "https://pnpm.io",
    description: "Hızlı, disk alanı açısından verimli bir paket yöneticisi.",
    category: "Geliştirme"
  },
  {
    id: 510,
    title: "Drizzle ORM",
    url: "https://orm.drizzle.team",
    description: "TypeScript için tasarlanmış, SQL benzeri bir sorgu oluşturucu ve ORM.",
    category: "Geliştirme"
  },
  {
    id: 511,
    title: "tRPC",
    url: "https://trpc.io",
    description: "Şema veya kod oluşturma olmadan uçtan uca tür güvenli API'ler oluşturma aracı.",
    category: "Geliştirme"
  },
  {
    id: 512,
    title: "TanStack Query",
    url: "https://tanstack.com/query/latest",
    description: "React, Solid, Vue ve Svelte için güçlü asenkron durum yönetimi.",
    category: "Geliştirme"
  },
  {
    id: 513,
    title: "Zod",
    url: "https://zod.dev",
    description: "TypeScript öncelikli, şema doğrulama ve statik tür çıkarımı sağlayan bir kütüphane.",
    category: "Geliştirme"
  },
  {
    id: 514,
    title: "Auth.js (NextAuth.js)",
    url: "https://authjs.dev",
    description: "Next.js ve diğer çerçeveler için açık kaynaklı bir kimlik doğrulama çözümü.",
    category: "Geliştirme"
  },
  {
    id: 515,
    title: "Clerk",
    url: "https://clerk.com",
    description: "React ve Next.js uygulamaları için eksiksiz kullanıcı yönetimi ve kimlik doğrulama hizmeti.",
    category: "Geliştirme"
  },
  {
    id: 516,
    title: "Resend",
    url: "https://resend.com",
    description: "Geliştiriciler için tasarlanmış bir e-posta gönderme API'si.",
    category: "Geliştirme"
  },
  {
    id: 517,
    title: "Upstash",
    url: "https://upstash.com",
    description: "Sunucusuz uygulamalar için sunucusuz Redis ve Kafka hizmeti.",
    category: "Geliştirme"
  },
  {
    id: 518,
    title: "Railway",
    url: "https://railway.app",
    description: "Altyapı hakkında düşünmeden kodunuzu dağıtmanızı sağlayan bir platform.",
    category: "Geliştirme"
  },
  {
    id: 519,
    title: "Coolify",
    url: "https://coolify.io",
    description: "Heroku ve Netlify'a alternatif, kendi kendine barındırılabilen bir PaaS.",
    category: "Geliştirme"
  },
  {
    id: 520,
    title: "PocketBase",
    url: "https://pocketbase.io",
    description: "Tek bir dosyada açık kaynaklı bir backend (veritabanı, kimlik doğrulama, dosya depolama).",
    category: "Geliştirme"
  },
  {
    id: 521,
    title: "Appwrite",
    url: "https://appwrite.io",
    description: "Web, mobil ve Flutter geliştiricileri için güvenli, kendi kendine barındırılabilen bir backend platformu.",
    category: "Geliştirme"
  },
  {
    id: 522,
    title: "SurrealDB",
    url: "https://surrealdb.com",
    description: "Geleceğin uygulamaları için tasarlanmış, ölçeklenebilir bir bulut yerel veritabanı.",
    category: "Geliştirme"
  },
  {
    id: 523,
    title: "Zed Editor",
    url: "https://zed.dev",
    description: "İşbirliği için tasarlanmış, yüksek performanslı bir kod editörü.",
    category: "Geliştirme"
  },
  {
    id: 524,
    title: "Fig",
    url: "https://fig.io",
    description: "Terminal için otomatik tamamlama, komut dosyaları ve uygulama entegrasyonları.",
    category: "Geliştirme"
  },
  {
    id: 525,
    title: "Tauri",
    url: "https://tauri.app",
    description: "Tüm ana masaüstü platformları için optimize edilmiş, güvenli ve performanslı uygulamalar oluşturma aracı.",
    category: "Geliştirme"
  },
  {
    id: 526,
    title: "Wails",
    url: "https://wails.io",
    description: "Go ve web teknolojilerini kullanarak masaüstü uygulamaları oluşturmak için bir çerçeve.",
    category: "Geliştirme"
  },
  {
    id: 527,
    title: "LangChain",
    url: "https://www.langchain.com",
    description: "Büyük dil modelleri (LLM) tarafından desteklenen uygulamalar geliştirmek için bir çerçeve.",
    category: "Yapay Zeka"
  },
  {
    id: 528,
    title: "LlamaIndex",
    url: "https://www.llamaindex.ai",
    description: "LLM uygulamaları için özel verileri bağlayan bir veri çerçevesi.",
    category: "Yapay Zeka"
  },
  {
    id: 529,
    title: "Radix UI",
    url: "https://www.radix-ui.com",
    description: "Hızlı geliştirme ve erişilebilirlik için tasarlanmış, stile ihtiyaç duymayan React UI bileşenleri.",
    category: "Tasarım"
  },
  {
    id: 530,
    title: "shadcn/ui",
    url: "https://ui.shadcn.com",
    description: "Radix UI ve Tailwind CSS kullanılarak oluşturulmuş, yeniden kullanılabilir bileşenler koleksiyonu.",
    category: "Tasarım"
  },
  {
    id: 531,
    title: "Aceternity UI",
    url: "https://ui.aceternity.com",
    description: "Modern ve karmaşık animasyonlara sahip, özenle hazırlanmış React bileşenleri.",
    category: "Tasarım"
  },
  {
    id: 532,
    title: "Flowbite",
    url: "https://flowbite.com",
    description: "Tailwind CSS üzerine kurulu açık kaynaklı bir UI bileşenleri kütüphanesi.",
    category: "Tasarım"
  },
  {
    id: 533,
    title: "DaisyUI",
    url: "https://daisyui.com",
    description: "Tailwind CSS için hızlı UI geliştirme sağlayan bir eklenti ve bileşen kütüphanesi.",
    category: "Tasarım"
  },
  {
    id: 534,
    title: "Open Props",
    url: "https://open-props.style",
    description: "Süper güçlü, standartlaştırılmış CSS özel özellikleri (custom properties).",
    category: "Tasarım"
  },
  {
    id: 535,
    title: "Laws of UX",
    url: "https://lawsofux.com",
    description: "Tasarımcıların kullanıcı arayüzü oluştururken göz önünde bulundurması gereken ilkelerin bir koleksiyonu.",
    category: "Tasarım"
  },
  {
    id: 536,
    title: "Growth.Design",
    url: "https://growth.design",
    description: "Popüler ürünlerin UX ve ürün düşüncesini vaka çalışmalarıyla analiz eden bir site.",
    category: "Tasarım"
  },
  {
    id: 537,
    title: "Checklist.design",
    url: "https://www.checklist.design",
    description: "Tasarım sürecinin her aşaması için en iyi uygulamaların bulunduğu bir kontrol listesi koleksiyonu.",
    category: "Tasarım"
  },
  {
    id: 538,
    title: "Page Flows",
    url: "https://pageflows.com",
    description: "En iyi ürünlerden kullanıcı akışı ve UX desenleri için bir ilham kaynağı.",
    category: "Tasarım"
  },
  {
    id: 539,
    title: "Screenlane",
    url: "https://screenlane.com",
    description: "Mobil ve web arayüz tasarımlarından ilham almak için bir galeri.",
    category: "Tasarım"
  },
  {
    id: 540,
    title: "Refero",
    url: "https://refero.design",
    description: "En iyi web uygulamalarından tasarım referansları ve UI desenleri.",
    category: "Tasarım"
  },
  {
    id: 541,
    title: "Canny.io",
    url: "https://canny.io",
    description: "Kullanıcı geri bildirimlerini toplayarak daha iyi ürünler oluşturmanızı sağlayan bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 542,
    title: "Arc Browser",
    url: "https://arc.net",
    description: "İnterneti kullanma şeklimizi değiştirmeyi amaçlayan yeni nesil bir web tarayıcısı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 543,
    title: "SigmaOS",
    url: "https://sigmaos.com",
    description: "Web'de daha hızlı ve daha iyi çalışmak için tasarlanmış bir tarayıcı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 544,
    title: "Amie Calendar",
    url: "https://amie.so",
    description: "Takvim, yapılacaklar listesi ve e-postayı bir araya getiren bir üretkenlik uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 545,
    title: "Tana",
    url: "https://tana.inc",
    description: "Tüm bilgilerinizi ve iş akışlarınızı organize etmek için tasarlanmış bir hepsi bir arada çalışma alanı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 546,
    title: "Capacities",
    url: "https://capacities.io",
    description: "Ağ bağlantılı notlar ve nesne tabanlı bir yaklaşımla fikirlerinizi organize etmek için bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 547,
    title: "Superhuman",
    url: "https://superhuman.com",
    description: "En hızlı e-posta deneyimini sunmayı vaat eden bir e-posta istemcisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 548,
    title: "Hey Email",
    url: "https://www.hey.com",
    description: "E-postaya yeni bir yaklaşım getiren, gizlilik odaklı bir e-posta hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 549,
    title: "Fathom Analytics",
    url: "https://usefathom.com",
    description: "Gizliliğe odaklanan, basit ve çerezsiz bir web sitesi analitik aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 550,
    title: "Plausible Analytics",
    url: "https://plausible.io",
    description: "Google Analytics'e basit, hafif ve açık kaynaklı bir alternatif.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 551,
    title: "Cal.com",
    url: "https://cal.com",
    description: "Açık kaynaklı, takvim ve zamanlama altyapısı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 552,
    title: "SavvyCal",
    url: "https://savvycal.com",
    description: "Hem sizin hem de alıcılarınız için toplantı planlamayı kolaylaştıran bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 553,
    title: "Tella",
    url: "https://tella.tv",
    description: "Ekranınızı, kameranızı veya her ikisini birden kaydederek harika videolar oluşturma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 554,
    title: "Scribe",
    url: "https://scribehow.com",
    description: "Herhangi bir süreci anında adım adım kılavuzlara dönüştüren bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 555,
    title: "Tango",
    url: "https://www.tango.us",
    description: "Siz çalışırken otomatik olarak nasıl yapılır kılavuzları oluşturan bir Chrome eklentisi.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 556,
    title: "Mem",
    url: "https://mem.ai",
    description: "Kendini organize eden ve düşüncelerinizi kolayca yakalamanızı, paylaşmanızı sağlayan bir not alma aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 557,
    title: "Phind",
    url: "https://www.phind.com",
    description: "Geliştiriciler için tasarlanmış, anında cevaplar ve kod örnekleri sunan bir yapay zeka arama motoru.",
    category: "Yapay Zeka"
  },
  {
    id: 558,
    title: "You.com",
    url: "https://you.com",
    description: "Kişiselleştirilebilir, yapay zeka destekli bir arama motoru.",
    category: "Yapay Zeka"
  },
  {
    id: 559,
    title: "Blackbox AI",
    url: "https://www.blackbox.ai",
    description: "Kodlama sorularınıza cevaplar bulan ve kod üreten bir yapay zeka asistanı.",
    category: "Yapay Zeka"
  },
  {
    id: 560,
    title: "Tabnine",
    url: "https://www.tabnine.com",
    description: "Yazılım geliştiriciler için yapay zeka destekli kod tamamlama aracı.",
    category: "Yapay Zeka"
  },
  {
    id: 561,
    title: "Amazon CodeWhisperer",
    url: "https://aws.amazon.com/codewhisperer/",
    description: "Yapay zeka kullanarak gerçek zamanlı kod önerileri sunan bir AWS hizmeti.",
    category: "Yapay Zeka"
  },
  {
    id: 562,
    title: "Stable Diffusion Web UI",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    description: "Stable Diffusion modellerini çalıştırmak için popüler bir tarayıcı arayüzü.",
    category: "Yapay Zeka"
  },
  {
    id: 563,
    title: "Character.ai",
    url: "https://character.ai",
    description: "Farklı karakterlerle sohbet etmenizi sağlayan bir yapay zeka platformu.",
    category: "Yapay Zeka"
  },
  {
    id: 564,
    title: "Groq",
    url: "https://groq.com",
    description: "Yapay zeka için dünyanın en hızlı dil işleme birimlerini (LPU) geliştiren bir şirket.",
    category: "Yapay Zeka"
  },
  {
    id: 565,
    title: "Mistral AI",
    url: "https://mistral.ai",
    description: "Açık ve taşınabilir yapay zeka modelleri geliştiren bir Avrupa şirketi.",
    category: "Yapay Zeka"
  },
  {
    id: 566,
    title: "Cohere",
    url: "https://cohere.com",
    description: "İşletmeler için tasarlanmış, güçlü doğal dil işleme modelleri sunan bir platform.",
    category: "Yapay Zeka"
  },
  {
    id: 567,
    title: "Pinecone",
    url: "https://www.pinecone.io",
    description: "Yapay zeka uygulamaları için yüksek performanslı vektör araması sağlayan bir vektör veritabanı.",
    category: "Yapay Zeka"
  },
  {
    id: 568,
    title: "Weaviate",
    url: "https://weaviate.io",
    description: "Açık kaynaklı, yapay zeka öncelikli bir vektör veritabanı.",
    category: "Yapay Zeka"
  },
  {
    id: 569,
    title: "LangSmith",
    url: "https://www.langchain.com/langsmith",
    description: "LLM uygulamalarını hata ayıklamak, test etmek ve izlemek için bir platform.",
    category: "Yapay Zeka"
  },
  {
    id: 570,
    title: "Weights & Biases",
    url: "https://wandb.ai",
    description: "Makine öğrenmesi geliştiricileri için deney takibi, model yönetimi ve veri seti sürümlemesi aracı.",
    category: "Yapay Zeka"
  },
  {
    id: 571,
    title: "TLDR Newsletter",
    url: "https://tldr.tech",
    description: "Teknoloji, bilim ve kodlama dünyasındaki en son haberlerin günlük özeti.",
    category: "Haberler & Medya"
  },
  {
    id: 572,
    title: "Bytes Newsletter",
    url: "https://bytes.dev",
    description: "JavaScript ve web geliştirme dünyasından en önemli haberleri içeren haftalık bülten.",
    category: "Haberler & Medya"
  },
  {
    id: 573,
    title: "The Pragmatic Engineer",
    url: "https://blog.pragmaticengineer.com",
    description: "Yazılım mühendisliği ve teknoloji endüstrisi hakkında derinlemesine analizler sunan bir bülten.",
    category: "Haberler & Medya"
  },
  {
    id: 574,
    title: "Lenny's Newsletter",
    url: "https://www.lennysnewsletter.com",
    description: "Ürün yönetimi, büyüme ve başlangıç şirketleri üzerine haftalık tavsiyeler.",
    category: "Haberler & Medya"
  },
  {
    id: 575,
    title: "Bankless",
    url: "https://www.bankless.com",
    description: "Kripto ve merkeziyetsiz finans (DeFi) üzerine odaklanmış bir medya kuruluşu.",
    category: "Haberler & Medya"
  },
  {
    id: 576,
    title: "The Milk Road",
    url: "https://www.milkroad.com",
    description: "Kripto haberlerini eğlenceli ve anlaşılır bir şekilde sunan günlük bir bülten.",
    category: "Haberler & Medya"
  },
  {
    id: 577,
    title: "Morning Brew",
    url: "https://www.morningbrew.com",
    description: "İş dünyasından en son haberleri sunan günlük bir e-posta bülteni.",
    category: "Haberler & Medya"
  },
  {
    id: 578,
    title: "The Hustle",
    url: "https://thehustle.co",
    description: "Teknoloji ve iş dünyası hakkında günlük haberler ve analizler sunan bir bülten.",
    category: "Haberler & Medya"
  },
  {
    id: 579,
    title: "Figma Tokens",
    url: "https://figmatokens.com/",
    description: "Tasarım sistemleri için Figma'da tasarım belirteçleri (design tokens) kullanmayı sağlayan bir eklenti.",
    category: "Tasarım"
  },
  {
    id: 580,
    title: "ProtoPie",
    url: "https://www.protopie.io",
    description: "Kod yazmadan kolayca yüksek duyarlılıklı prototipler oluşturma aracı.",
    category: "Tasarım"
  },
  {
    id: 581,
    title: "Maze",
    url: "https://maze.co",
    description: "Prototip testleri, anketler ve kullanıcı görüşmeleri için bir sürekli ürün keşfi platformu.",
    category: "Tasarım"
  },
  {
    id: 582,
    title: "UserTesting",
    url: "https://www.usertesting.com",
    description: "Gerçek kullanıcılardan geri bildirim alarak müşteri deneyimini iyileştirme platformu.",
    category: "Tasarım"
  },
  {
    id: 583,
    title: "Lookback",
    url: "https://lookback.io",
    description: "Canlı kullanıcı görüşmeleri ve uzaktan kullanılabilirlik testleri için bir platform.",
    category: "Tasarım"
  },
  {
    id: 584,
    title: "Dovetail",
    url: "https://dovetail.com",
    description: "Kullanıcı araştırması verilerinizi analiz etmek ve paylaşmak için bir müşteri bilgi platformu.",
    category: "Tasarım"
  },
  {
    id: 585,
    title: "Sizzy",
    url: "https://sizzy.co",
    description: "Duyarlı tasarım geliştirmeyi hızlandırmak için tasarlanmış bir tarayıcı.",
    category: "Geliştirme"
  },
  {
    id: 586,
    title: "Polypane",
    url: "https://polypane.app",
    description: "Web sitelerini ve uygulamaları birden çok ekran boyutunda aynı anda geliştirmek ve test etmek için bir tarayıcı.",
    category: "Geliştirme"
  },
  {
    id: 587,
    title: "CodeSandbox",
    url: "https://codesandbox.io",
    description: "Hızlı web geliştirme için anında tam yığın bulut geliştirme ortamı.",
    category: "Geliştirme"
  },
  {
    id: 588,
    title: "StackBlitz",
    url: "https://stackblitz.com",
    description: "Web geliştirme için tarayıcıda çalışan, anında ve güvenli bir geliştirme ortamı.",
    category: "Geliştirme"
  },
  {
    id: 589,
    title: "Visual Studio Code",
    url: "https://code.visualstudio.com",
    description: "Microsoft tarafından geliştirilen, ücretsiz ve güçlü bir kaynak kod düzenleyicisi.",
    category: "Geliştirme"
  },
  {
    id: 590,
    title: "JetBrains",
    url: "https://www.jetbrains.com",
    description: "Geliştiriciler için IntelliJ IDEA, PyCharm ve WebStorm gibi IDE'ler üreten bir şirket.",
    category: "Geliştirme"
  },
  {
    id: 591,
    title: "HTTPie",
    url: "https://httpie.io",
    description: "API'leri test etmek, hata ayıklamak ve etkileşimde bulunmak için kullanıcı dostu bir komut satırı aracı ve web uygulaması.",
    category: "Geliştirme"
  },
  {
    id: 592,
    title: "RapidAPI",
    url: "https://rapidapi.com",
    description: "Dünyanın en büyük API merkezi. Binlerce API'yi bulmak ve bağlanmak için bir platform.",
    category: "Geliştirme"
  },
  {
    id: 593,
    title: "WebAssembly (Wasm)",
    url: "https://webassembly.org",
    description: "Web tarayıcılarında çalışabilen, yüksek performanslı uygulamalar için yeni bir tür kod.",
    category: "Geliştirme"
  },
  {
    id: 594,
    title: "CMake",
    url: "https://cmake.org",
    description: "Derleme, test ve paketleme süreçlerini otomatikleştirmek için açık kaynaklı, platformlar arası bir araç ailesi.",
    category: "Geliştirme"
  },
  {
    id: 595,
    title: "Protobuf (Protocol Buffers)",
    url: "https://protobuf.dev",
    description: "Google tarafından geliştirilen, yapılandırılmış verileri serileştirmek için bir mekanizma.",
    category: "Geliştirme"
  },
  {
    id: 596,
    title: "gRPC",
    url: "https://grpc.io",
    description: "Herhangi bir ortamda çalışabilen, yüksek performanslı bir açık kaynaklı RPC çerçevesi.",
    category: "Geliştirme"
  },
  {
    id: 597,
    title: "OAuth",
    url: "https://oauth.net",
    description: "Uygulamaların birbirlerinin verilerine güvenli bir şekilde erişmesini sağlayan açık bir standart.",
    category: "Geliştirme"
  },
  {
    id: 598,
    title: "OpenID",
    url: "https://openid.net",
    description: "Kullanıcıların tek bir hesapla birden fazla web sitesinde kimlik doğrulamasına olanak tanıyan bir standart.",
    category: "Geliştirme"
  },
  {
    id: 599,
    title: "OWASP",
    url: "https://owasp.org",
    description: "Web uygulama güvenliği üzerine odaklanmış, kar amacı gütmeyen bir kuruluş.",
    category: "Geliştirme"
  },
  {
    id: 600,
    title: "Let's Encrypt",
    url: "https://letsencrypt.org",
    description: "Web siteleri için ücretsiz, otomatik ve açık bir sertifika otoritesi.",
    category: "Geliştirme"
  },
  {
    id: 601,
    title: "Cloudflare",
    url: "https://www.cloudflare.com",
    description: "Web performansı ve güvenliği sağlayan bir CDN, DNS ve DDoS koruma hizmeti.",
    category: "Geliştirme"
  },
  {
    id: 602,
    title: "Stripe Atlas",
    url: "https://stripe.com/atlas",
    description: "Dünyanın her yerinden girişimcilerin ABD'de bir şirket kurmalarına yardımcı olan bir hizmet.",
    category: "Finans & Kripto"
  },
  {
    id: 603,
    title: "Mercury",
    url: "https://mercury.com",
    description: "Başlangıç şirketleri ve teknoloji firmaları için tasarlanmış bir bankacılık hizmeti.",
    category: "Finans & Kripto"
  },
  {
    id: 604,
    title: "AngelList",
    url: "https://angel.co",
    description: "Başlangıç şirketlerinin yatırım bulduğu, işe alım yaptığı ve büyüdüğü bir platform.",
    category: "Finans & Kripto"
  },
  {
    id: 605,
    title: "Y Combinator",
    url: "https://www.ycombinator.com",
    description: "Erken aşama başlangıç şirketlerine tohum yatırımı sağlayan bir Amerikan teknoloji başlangıç hızlandırıcısı.",
    category: "Finans & Kripto"
  },
  {
    id: 606,
    title: "Plaid",
    url: "https://plaid.com",
    description: "Uygulamaların kullanıcıların banka hesaplarına güvenli bir şekilde bağlanmasını sağlayan bir finansal hizmetler API'si.",
    category: "Finans & Kripto"
  },
  {
    id: 607,
    title: "Brex",
    url: "https://www.brex.com",
    description: "Teknoloji şirketleri için kurumsal kartlar ve harcama yönetimi yazılımı.",
    category: "Finans & Kripto"
  },
  {
    id: 608,
    title: "Carta",
    url: "https://carta.com",
    description: "Özel şirketlerin sermaye tablolarını, değerlemelerini ve öz sermayelerini yönetmeleri için bir platform.",
    category: "Finans & Kripto"
  },
  {
    id: 609,
    title: "Fintual",
    url: "https://fintual.com",
    description: "Basit ve erişilebilir bir şekilde yatırım yapmanızı sağlayan bir varlık yönetimi platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 610,
    title: "eToro",
    url: "https://www.etoro.com",
    description: "Hisse senetleri, kripto paralar ve CFD'ler için bir sosyal ticaret ve yatırım platformu.",
    category: "Finans & Kripto"
  },
  {
    id: 611,
    title: "Fidelity",
    url: "https://www.fidelity.com",
    description: "Yatırım, emeklilik planlaması ve varlık yönetimi hizmetleri sunan bir finans şirketi.",
    category: "Finans & Kripto"
  },
  {
    id: 612,
    title: "Vanguard",
    url: "https://vanguard.com",
    description: "Düşük maliyetli yatırım fonları ve ETF'ler sunan büyük bir yatırım yönetimi şirketi.",
    category: "Finans & Kripto"
  },
  {
    id: 613,
    title: "Charles Schwab",
    url: "https://www.schwab.com",
    description: "Yatırım, bankacılık ve finansal danışmanlık hizmetleri sunan bir aracı kurum.",
    category: "Finans & Kripto"
  },
  {
    id: 614,
    title: "NerdWallet",
    url: "https://www.nerdwallet.com",
    description: "Kredi kartları, bankacılık ve yatırımlar hakkında kişisel finans tavsiyeleri sunan bir web sitesi.",
    category: "Finans & Kripto"
  },
  {
    id: 615,
    title: "Credit Karma",
    url: "https://www.creditkarma.com",
    description: "Ücretsiz kredi puanları, raporları ve finansal ürün önerileri sunan bir kişisel finans şirketi.",
    category: "Finans & Kripto"
  },
  {
    id: 616,
    title: "Shopier",
    url: "https://www.shopier.com",
    description: "Sosyal medya üzerinden satış yapanlar ve e-ticarete yeni başlayanlar için ödeme altyapısı.",
    category: "E-Ticaret"
  },
  {
    id: 617,
    title: "PayTR",
    url: "https://www.paytr.com",
    description: "Web siteleri ve mobil uygulamalar için sanal POS ve ödeme çözümleri sunan bir Türk şirketi.",
    category: "E-Ticaret"
  },
  {
    id: 618,
    title: "İyzico",
    url: "https://www.iyzico.com",
    description: "E-ticaret siteleri ve bireysel kullanıcılar için online ödeme altyapısı sağlayan bir finans teknolojisi şirketi.",
    category: "E-Ticaret"
  },
  {
    id: 619,
    title: "BigCommerce",
    url: "https://www.bigcommerce.com",
    description: "İşletmelerin çevrimiçi mağazalar oluşturmasına ve yönetmesine olanak tanıyan bir e-ticaret platformu.",
    category: "E-Ticaret"
  },
  {
    id: 620,
    title: "WooCommerce",
    url: "https://woocommerce.com",
    description: "WordPress için tasarlanmış, özelleştirilebilir bir açık kaynaklı e-ticaret eklentisi.",
    category: "E-Ticaret"
  },
  {
    id: 621,
    title: "Squarespace",
    url: "https://www.squarespace.com",
    description: "Web sitesi oluşturma, barındırma ve e-ticaret araçları sunan bir platform.",
    category: "E-Ticaret"
  },
  {
    id: 622,
    title: "Wix",
    url: "https://www.wix.com",
    description: "Sürükle ve bırak araçlarıyla web siteleri oluşturmayı sağlayan bir bulut tabanlı geliştirme platformu.",
    category: "E-Ticaret"
  },
  {
    id: 623,
    title: "GoDaddy",
    url: "https://www.godaddy.com",
    description: "Alan adı kaydı, web barındırma ve web sitesi oluşturma hizmetleri sunan bir şirket.",
    category: "E-Ticaret"
  },
  {
    id: 624,
    title: "Namecheap",
    url: "https://www.namecheap.com",
    description: "Uygun fiyatlı alan adı kaydı, web barındırma ve SSL sertifikaları sunan bir şirket.",
    category: "Geliştirme"
  },
  {
    id: 625,
    title: "Epicurious",
    url: "https://www.epicurious.com",
    description: "Profesyonel olarak oluşturulmuş ve test edilmiş yemek tarifleri, videolar ve pişirme ipuçları.",
    category: "Referans"
  },
  {
    id: 626,
    title: "Serious Eats",
    url: "https://www.seriouseats.com",
    description: "Titizlikle test edilmiş tarifler ve gıda bilimi üzerine odaklanmış bir yemek blogu.",
    category: "Referans"
  },
  {
    id: 627,
    title: "Smitten Kitchen",
    url: "https://smittenkitchen.com",
    description: "Erişilebilir ve lezzetli tarifler sunan popüler bir yemek blogu.",
    category: "Referans"
  },
  {
    id: 628,
    title: "Yummly",
    url: "https://www.yummly.com",
    description: "Kişiselleştirilmiş tarif önerileri, alışveriş listeleri ve yemek planlama sunan bir uygulama.",
    category: "Referans"
  },
  {
    id: 629,
    title: "Instructables",
    url: "https://www.instructables.com",
    description: "Kullanıcıların çeşitli kendin yap projeleri oluşturduğu ve paylaştığı bir web sitesi.",
    category: "Referans"
  },
  {
    id: 630,
    title: "Make:",
    url: "https://makezine.com",
    description: "Kendin yap projeleri, teknoloji ve yaratıcılık üzerine odaklanmış bir dergi ve topluluk.",
    category: "Referans"
  },
  {
    id: 631,
    title: "iFixit",
    url: "https://www.ifixit.com",
    description: "Elektronik cihazları onarmak için ücretsiz tamir kılavuzları ve araçlar sunan bir web sitesi.",
    category: "Referans"
  },
  {
    id: 632,
    title: "PCPartPicker",
    url: "https://pcpartpicker.com",
    description: "Uyumlu bilgisayar parçalarını seçerek kendi bilgisayarınızı oluşturmanıza yardımcı olan bir araç.",
    category: "Referans"
  },
  {
    id: 633,
    title: "AnandTech",
    url: "https://www.anandtech.com",
    description: "Donanım ve teknoloji üzerine derinlemesine teknik incelemeler ve haberler sunan bir site.",
    category: "Referans"
  },
  {
    id: 634,
    title: "Tom's Hardware",
    url: "https://www.tomshardware.com",
    description: "Bilgisayar donanımı meraklıları için haberler, incelemeler ve rehberler.",
    category: "Referans"
  },
  {
    id: 635,
    title: "GSMArena.com",
    url: "https://www.gsmarena.com",
    description: "Mobil telefonlar hakkında en son haberler, incelemeler ve detaylı özellikler.",
    category: "Referans"
  },
  {
    id: 636,
    title: "DPReview",
    url: "https://www.dpreview.com",
    description: "Dijital kameralar hakkında kapsamlı incelemeler, haberler ve forumlar.",
    category: "Referans"
  },
  {
    id: 637,
    title: "Car and Driver",
    url: "https://www.caranddriver.com",
    description: "Otomobil incelemeleri, haberleri ve yol testleri sunan bir otomotiv dergisi.",
    category: "Referans"
  },
  {
    id: 638,
    title: "MotorTrend",
    url: "https://www.motortrend.com",
    description: "Otomotiv dünyasından en son haberler, araba incelemeleri ve gösteriler.",
    category: "Referans"
  },
  {
    id: 639,
    title: "BoardGameGeek",
    url: "https://boardgamegeek.com",
    description: "Kutu oyunları ve masaüstü oyunları hakkında bir veritabanı ve topluluk.",
    category: "Oyun"
  },
  {
    id: 640,
    title: "Fextralife",
    url: "https://fextralife.com",
    description: "RPG oyunları için wiki'ler, haberler ve rehberler sunan bir oyun topluluğu.",
    category: "Oyun"
  },
  {
    id: 641,
    title: "Destructoid",
    url: "https://www.destructoid.com",
    description: "Video oyunları hakkında haberler, incelemeler ve videolar sunan bir blog.",
    category: "Oyun"
  },
  {
    id: 642,
    title: "Eurogamer",
    url: "https://www.eurogamer.net",
    description: "Avrupa merkezli, video oyunları üzerine odaklanmış bir haber ve inceleme sitesi.",
    category: "Oyun"
  },
  {
    id: 643,
    title: "Nintendo Life",
    url: "https://www.nintendolife.com",
    description: "Nintendo Switch, 3DS ve Wii U hakkında haberler, incelemeler ve özellikler.",
    category: "Oyun"
  },
  {
    id: 644,
    title: "Push Square",
    url: "https://www.pushsquare.com",
    description: "PlayStation 5 ve PS4 hakkında haberler, incelemeler ve topluluk.",
    category: "Oyun"
  },
  {
    id: 645,
    title: "Pure Xbox",
    url: "https://www.purexbox.com",
    description: "Xbox Series X, Series S ve Xbox One hakkında haberler, incelemeler ve rehberler.",
    category: "Oyun"
  },
  {
    id: 646,
    title: "OpenCritic",
    url: "https://opencritic.com",
    description: "Video oyunları için eleştirmen yorumlarını toplayan bir inceleme toplama sitesi.",
    category: "Oyun"
  },
  {
    id: 647,
    title: "Speedrun.com",
    url: "https://www.speedrun.com",
    description: "Video oyunları speedrun topluluğu için lider tabloları ve kaynaklar.",
    category: "Oyun"
  },
  {
    id: 648,
    title: "Sila Games",
    url: "https://www.silagames.com",
    description: "PC oyunları için dijital anahtar satan bir Türk e-ticaret sitesi.",
    category: "Oyun"
  },
  {
    id: 649,
    title: "Oyunfor",
    url: "https://www.oyunfor.com",
    description: "Oyun içi para birimleri, e-pin ve dijital oyun kodları satan bir platform.",
    category: "Oyun"
  },
  {
    id: 650,
    title: "Kinguin",
    url: "https://www.kinguin.net",
    description: "Video oyunu anahtarları ve yazılımları için küresel bir dijital pazar yeri.",
    category: "Oyun"
  },
  {
    id: 651,
    title: "G2A",
    url: "https://www.g2a.com",
    description: "Oyun anahtarları, yazılımlar ve hediye kartları için büyük bir pazar yeri.",
    category: "Oyun"
  },
  {
    id: 652,
    title: "CDKeys",
    url: "https://www.cdkeys.com",
    description: "PC, PlayStation, Xbox ve Nintendo için dijital oyun kodları satan bir site.",
    category: "Oyun"
  },
  {
    id: 653,
    title: "Blizzard Entertainment",
    url: "https://www.blizzard.com",
    description: "World of Warcraft, Diablo ve Overwatch gibi oyunların geliştiricisi.",
    category: "Oyun"
  },
  {
    id: 654,
    title: "Riot Games",
    url: "https://www.riotgames.com",
    description: "League of Legends ve Valorant gibi popüler oyunların geliştiricisi ve yayıncısı.",
    category: "Oyun"
  },
  {
    id: 655,
    title: "Electronic Arts (EA)",
    url: "https://www.ea.com",
    description: "FIFA, Madden NFL ve The Sims gibi oyun serileriyle tanınan bir video oyunu şirketi.",
    category: "Oyun"
  },
  {
    id: 656,
    title: "Ubisoft",
    url: "https://www.ubisoft.com",
    description: "Assassin's Creed ve Far Cry gibi serilerin arkasındaki video oyunu yayıncısı.",
    category: "Oyun"
  },
  {
    id: 657,
    title: "Take-Two Interactive",
    url: "https://www.take2games.com",
    description: "Rockstar Games ve 2K gibi etiketlerin sahibi olan bir video oyunu holding şirketi.",
    category: "Oyun"
  },
  {
    id: 658,
    title: "Bandai Namco Entertainment",
    url: "https://www.bandainamcoent.com",
    description: "Tekken ve Dark Souls gibi oyunlarla tanınan bir Japon video oyunu geliştiricisi ve yayıncısı.",
    category: "Oyun"
  },
  {
    id: 659,
    title: "Capcom",
    url: "https://www.capcom.com",
    description: "Street Fighter ve Resident Evil gibi ikonik oyun serilerinin yaratıcısı.",
    category: "Oyun"
  },
  {
    id: 660,
    title: "Square Enix",
    url: "https://www.square-enix.com",
    description: "Final Fantasy ve Dragon Quest gibi RPG serileriyle ünlü bir Japon oyun şirketi.",
    category: "Oyun"
  },
  {
    id: 661,
    title: "SEGA",
    url: "https://www.sega.com",
    description: "Sonic the Hedgehog ve Yakuza gibi oyun serilerinin arkasındaki efsanevi oyun şirketi.",
    category: "Oyun"
  },
  {
    id: 662,
    title: "Konami",
    url: "https://www.konami.com",
    description: "Metal Gear Solid ve Castlevania gibi oyun serileriyle tanınan bir Japon eğlence şirketi.",
    category: "Oyun"
  },
  {
    id: 663,
    title: "Devolver Digital",
    url: "https://www.devolverdigital.com",
    description: "Hotline Miami ve Gris gibi bağımsız oyunları yayınlamasıyla tanınan bir yayıncı.",
    category: "Oyun"
  },
  {
    id: 664,
    title: "Annapurna Interactive",
    url: "https://annapurnainteractive.com",
    description: "What Remains of Edith Finch ve Stray gibi sanatsal ve hikaye odaklı oyunların yayıncısı.",
    category: "Oyun"
  },
  {
    id: 665,
    title: "tinyBuild",
    url: "https://www.tinybuild.com",
    description: "Hello Neighbor gibi oyunlarla tanınan bir bağımsız video oyunu yayıncısı.",
    category: "Oyun"
  },
  {
    id: 666,
    title: "Paradox Interactive",
    url: "https://www.paradoxinteractive.com",
    description: "Strateji oyunları ve simülasyonlar konusunda uzmanlaşmış bir video oyunu yayıncısı.",
    category: "Oyun"
  },
  {
    id: 667,
    title: "Focus Entertainment",
    url: "https://www.focus-entmt.com",
    description: "A Plague Tale gibi çeşitli türlerde oyunlar yayınlayan bir Fransız yayıncı.",
    category: "Oyun"
  },
  {
    id: 668,
    title: "Private Division",
    url: "https://www.privatedivision.com",
    description: "Take-Two Interactive'e ait, bağımsız geliştiricilere odaklanmış bir yayıncılık etiketi.",
    category: "Oyun"
  },
  {
    id: 669,
    title: "11 bit studios",
    url: "https://www.11bitstudios.com",
    description: "This War of Mine ve Frostpunk gibi oyunların geliştiricisi ve yayıncısı.",
    category: "Oyun"
  },
  {
    id: 670,
    title: "Team17",
    url: "https://www.team17.com",
    description: "Worms serisi ve Overcooked gibi oyunlarla tanınan bir geliştirici ve yayıncı.",
    category: "Oyun"
  },
  {
    id: 671,
    title: "Unity",
    url: "https://unity.com",
    description: "Video oyunları ve diğer interaktif içerikler oluşturmak için bir platformlar arası oyun motoru.",
    category: "Geliştirme"
  },
  {
    id: 672,
    title: "Unreal Engine",
    url: "https://www.unrealengine.com",
    description: "Epic Games tarafından geliştirilen, gerçek zamanlı 3D oluşturma aracı ve oyun motoru.",
    category: "Geliştirme"
  },
  {
    id: 673,
    title: "Godot Engine",
    url: "https://godotengine.org",
    description: "2D ve 3D oyunlar oluşturmak için ücretsiz ve açık kaynaklı bir oyun motoru.",
    category: "Geliştirme"
  },
  {
    id: 674,
    title: "Blender",
    url: "https://www.blender.org",
    description: "3D modelleme, animasyon, render ve daha fazlası için ücretsiz ve açık kaynaklı bir yazılım.",
    category: "Tasarım"
  },
  {
    id: 675,
    title: "ZBrush",
    url: "https://www.maxon.net/en/zbrush",
    description: "Dijital heykel ve boyama için endüstri standardı bir yazılım.",
    category: "Tasarım"
  },
  {
    id: 676,
    title: "Substance 3D",
    url: "https://www.adobe.com/products/substance3d.html",
    description: "3D doku ve materyal oluşturma için Adobe'nin araç paketi.",
    category: "Tasarım"
  },
  {
    id: 677,
    title: "Marmoset Toolbag",
    url: "https://marmoset.co/toolbag/",
    description: "3D sanatçılar için gerçek zamanlı render, baking ve doku oluşturma aracı.",
    category: "Tasarım"
  },
  {
    id: 678,
    title: "MarvelApp",
    url: "https://marvelapp.com",
    description: "Tasarım ve prototipleme için fikirleri dijital ürünlere dönüştüren bir platform.",
    category: "Tasarım"
  },
  {
    id: 679,
    title: "Principle",
    url: "https://principle.app",
    description: "macOS için animasyonlu ve etkileşimli kullanıcı arayüzü tasarımları oluşturma aracı.",
    category: "Tasarım"
  },
  {
    id: 680,
    title: "Origami Studio",
    url: "https://origami.design",
    description: "Facebook (Meta) tarafından modern arayüzleri keşfetmek ve prototiplemek için oluşturulan ücretsiz bir araç.",
    category: "Tasarım"
  },
  {
    id: 681,
    title: "Fable",
    url: "https://www.fable.app",
    description: "Tasarımcılar için web tabanlı, işbirliğine dayalı bir hareket tasarımı platformu.",
    category: "Tasarım"
  },
  {
    id: 682,
    title: "Rive",
    url: "https://rive.app",
    description: "Herhangi bir platformda çalışabilen, etkileşimli vektör animasyonları oluşturma aracı.",
    category: "Tasarım"
  },
  {
    id: 683,
    title: "After Effects",
    url: "https://www.adobe.com/products/aftereffects.html",
    description: "Adobe'nin sinematik görsel efektler ve hareketli grafikler oluşturma yazılımı.",
    category: "Tasarım"
  },
  {
    id: 684,
    title: "Premiere Pro",
    url: "https://www.adobe.com/products/premiere.html",
    description: "Profesyonel video düzenleme için Adobe'nin endüstri lideri yazılımı.",
    category: "Tasarım"
  },
  {
    id: 685,
    title: "DaVinci Resolve",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    description: "Renk düzeltme, görsel efektler, ses post prodüksiyonu ve video düzenlemeyi birleştiren bir yazılım.",
    category: "Tasarım"
  },
  {
    id: 686,
    title: "Final Cut Pro",
    url: "https://www.apple.com/final-cut-pro/",
    description: "Apple'ın macOS için profesyonel video düzenleme uygulaması.",
    category: "Tasarım"
  },
  {
    id: 687,
    title: "Logic Pro",
    url: "https://www.apple.com/logic-pro/",
    description: "Apple'ın profesyonel müzik prodüksiyonu, beste ve miksaj için yazılımı.",
    category: "Tasarım"
  },
  {
    id: 688,
    title: "Ableton Live",
    url: "https://www.ableton.com/en/live/",
    description: "Müzik oluşturma, prodüksiyon ve canlı performans için bir dijital ses iş istasyonu (DAW).",
    category: "Tasarım"
  },
  {
    id: 689,
    title: "FL Studio",
    url: "https://www.image-line.com",
    description: "Müzik prodüksiyonu için eksiksiz bir yazılım ortamı veya dijital ses iş istasyonu (DAW).",
    category: "Tasarım"
  },
  {
    id: 690,
    title: "Splice",
    url: "https://splice.com",
    description: "Müzik üreticileri için ses örnekleri, eklentiler ve işbirliği araçları sunan bir platform.",
    category: "Tasarım"
  },
  {
    id: 691,
    title: "Looperman",
    url: "https://www.looperman.com",
    description: "Müzisyenler, yapımcılar ve DJ'ler için ücretsiz ses döngüleri, akapellalar ve ses örnekleri.",
    category: "Tasarım"
  },
  {
    id: 692,
    title: "Procreate",
    url: "https://procreate.art",
    description: "iPad için tasarlanmış, güçlü bir dijital çizim ve illüstrasyon uygulaması.",
    category: "Tasarım"
  },
  {
    id: 693,
    title: "Clip Studio Paint",
    url: "https://www.clipstudio.net/en/",
    description: "Çizim, illüstrasyon, manga ve animasyon için lider bir yazılım.",
    category: "Tasarım"
  },
  {
    id: 694,
    title: "Affinity Designer",
    url: "https://affinity.serif.com/en-us/designer/",
    description: "Profesyonel vektör grafik tasarımı için Adobe Illustrator'a bir alternatif.",
    category: "Tasarım"
  },
  {
    id: 695,
    title: "Affinity Photo",
    url: "https://affinity.serif.com/en-us/photo/",
    description: "Görüntü düzenleme ve rötuş için Adobe Photoshop'a güçlü bir alternatif.",
    category: "Tasarım"
  },
  {
    id: 696,
    title: "Affinity Publisher",
    url: "https://affinity.serif.com/en-us/publisher/",
    description: "Kitaplar, dergiler ve pazarlama materyalleri için profesyonel yayıncılık yazılımı.",
    category: "Tasarım"
  },
  {
    id: 697,
    title: "CorelDRAW",
    url: "https://www.coreldraw.com",
    description: "Vektör illüstrasyon, sayfa düzeni ve tipografi için bir grafik tasarım yazılımı.",
    category: "Tasarım"
  },
  {
    id: 698,
    title: "GIMP",
    url: "https://www.gimp.org",
    description: "Ücretsiz ve açık kaynaklı bir görüntü düzenleyici ve rötuşlama aracı.",
    category: "Tasarım"
  },
  {
    id: 699,
    title: "Inkscape",
    url: "https://inkscape.org",
    description: "Ücretsiz ve açık kaynaklı, güçlü bir vektör grafik düzenleyici.",
    category: "Tasarım"
  },
  {
    id: 700,
    title: "Krita",
    url: "https://krita.org",
    description: "Profesyonel, ücretsiz ve açık kaynaklı bir dijital boyama programı.",
    category: "Tasarım"
  },
  {
    id: 701,
    title: "Read.cv",
    url: "https://read.cv",
    description: "Profesyonellerin çalışmalarını ve deneyimlerini sergilediği, tasarım odaklı bir portfolyo platformu.",
    category: "Sosyal Medya"
  },
  {
    id: 702,
    title: "Polywork",
    url: "https://www.polywork.com",
    description: "Profesyonellerin işbirlikleri ve projeler için bir araya geldiği bir sosyal ağ.",
    category: "Sosyal Medya"
  },
  {
    id: 703,
    title: "Telegraph",
    url: "https://telegra.ph",
    description: "Telegram tarafından oluşturulan, zengin metin içeriği yayınlamak için minimalist bir araç.",
    category: "Sosyal Medya"
  },
  {
    id: 704,
    title: "Carrd",
    url: "https://carrd.co",
    description: "Basit, duyarlı ve tek sayfalık web siteleri oluşturmak için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 705,
    title: "Bio.link",
    url: "https://bio.link",
    description: "Tüm bağlantılarınızı tek bir yerde toplamak için bir 'link in bio' aracı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 706,
    title: "Linktree",
    url: "https://linktr.ee",
    description: "Sosyal medya profilleri için birden fazla bağlantıyı tek bir sayfada birleştiren popüler bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 707,
    title: "Buy Me a Coffee",
    url: "https://www.buymeacoffee.com",
    description: "Yaratıcıların ve sanatçıların destekçilerinden bağış ve üyelik kabul etmeleri için bir platform.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 708,
    title: "Patreon",
    url: "https://www.patreon.com",
    description: "Yaratıcıların hayranlarından düzenli gelir elde etmelerini sağlayan bir üyelik platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 709,
    title: "Ko-fi",
    url: "https://ko-fi.com",
    description: "Yaratıcıların hayranlarından bağış kabul etmeleri için basit bir yol.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 710,
    title: "Ghost",
    url: "https://ghost.org",
    description: "Profesyonel yayıncılar için tasarlanmış, açık kaynaklı bir blog ve bülten platformu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 711,
    title: "WordPress.com",
    url: "https://wordpress.com",
    description: "Bloglar ve web siteleri oluşturmak için yönetilen bir barındırma hizmeti.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 712,
    title: "WordPress.org",
    url: "https://wordpress.org",
    description: "Kendi kendine barındırılan web siteleri için ücretsiz ve açık kaynaklı içerik yönetim sistemi.",
    category: "Geliştirme"
  },
  {
    id: 713,
    title: "Fireship.io",
    url: "https://fireship.io",
    description: "Modern uygulama geliştirme üzerine yüksek yoğunluklu kod eğitimleri.",
    category: "Eğitim"
  },
  {
    id: 714,
    title: "Web Dev Simplified",
    url: "https://www.webdevsimplified.com",
    description: "Web geliştirmeyi herkes için basit ve erişilebilir hale getiren eğitimler.",
    category: "Eğitim"
  },
  {
    id: 715,
    title: "Traversy Media",
    url: "https://www.traversymedia.com",
    description: "Web geliştirme ve programlama üzerine pratik eğitimler ve kurslar.",
    category: "Eğitim"
  },
  {
    id: 716,
    title: "The Net Ninja",
    url: "https://www.thenetninja.co.uk",
    description: "Web geliştirme becerilerini geliştirmek için 1000'den fazla ücretsiz programlama eğitimi.",
    category: "Eğitim"
  },
  {
    id: 717,
    title: "Academind",
    url: "https://academind.com",
    description: "Web geliştirme ve veri bilimi üzerine kapsamlı çevrimiçi kurslar.",
    category: "Eğitim"
  },
  {
    id: 718,
    title: "DesignCourse",
    url: "https://designcourse.com",
    description: "UI/UX, frontend ve grafik tasarım üzerine eğitimler sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 719,
    title: "Code with Mosh",
    url: "https://codewithmosh.com",
    description: "Yazılım mühendisleri için yüksek kaliteli çevrimiçi kodlama kursları.",
    category: "Eğitim"
  },
  {
    id: 720,
    title: "Level Up Tutorials",
    url: "https://leveluptutorials.com",
    description: "Web geliştirme ve tasarım üzerine derinlemesine video eğitimleri.",
    category: "Eğitim"
  },
  {
    id: 721,
    title: "Wes Bos",
    url: "https://wesbos.com",
    description: "JavaScript, React ve web geliştirme üzerine premium kurslar sunan bir geliştirici.",
    category: "Eğitim"
  },
  {
    id: 722,
    title: "Kent C. Dodds",
    url: "https://kentcdodds.com",
    description: "React, test ve web geliştirme üzerine kaliteli eğitim materyalleri ve atölyeler.",
    category: "Eğitim"
  },
  {
    id: 723,
    title: "Josh W. Comeau",
    url: "https://www.joshwcomeau.com",
    description: "React ve CSS üzerine interaktif ve derinlemesine eğitimler sunan bir blog ve kurs platformu.",
    category: "Eğitim"
  },
  {
    id: 724,
    title: "Execute Program",
    url: "https://www.executeprogram.com",
    description: "SQL, Regex ve JavaScript gibi konuları öğrenmek için etkileşimli bir platform.",
    category: "Eğitim"
  },
  {
    id: 725,
    title: "The Odin Project",
    url: "https://www.theodinproject.com",
    description: "Web geliştirme öğrenmek için ücretsiz, açık kaynaklı bir müfredat.",
    category: "Eğitim"
  },
  {
    id: 726,
    title: "Full Stack Open",
    url: "https://fullstackopen.com",
    description: "Helsinki Üniversitesi tarafından sunulan, modern web geliştirmeye derinlemesine bir giriş.",
    category: "Eğitim"
  },
  {
    id: 727,
    title: "CSSBattle",
    url: "https://cssbattle.dev",
    description: "CSS becerilerinizi test etmek ve geliştirmek için bir kodlama oyunu.",
    category: "Eğitim"
  },
  {
    id: 728,
    title: "Flexbox Froggy",
    url: "https://flexboxfroggy.com",
    description: "CSS Flexbox'ı öğrenmek için tasarlanmış eğlenceli bir oyun.",
    category: "Eğitim"
  },
  {
    id: 729,
    title: "Grid Garden",
    url: "https://cssgridgarden.com",
    description: "CSS Grid Layout'u öğrenmek için interaktif bir oyun.",
    category: "Eğitim"
  },
  {
    id: 730,
    title: "Untools",
    url: "https://untools.co",
    description: "Daha iyi düşünmenize yardımcı olacak düşünme araçları ve çerçevelerinden oluşan bir koleksiyon.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 731,
    title: "HackerRank",
    url: "https://www.hackerrank.com",
    description: "Geliştiriciler için rekabetçi programlama zorlukları sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 732,
    title: "TopCoder",
    url: "https://www.topcoder.com",
    description: "Tasarım, geliştirme ve veri bilimi zorlukları sunan bir kitle kaynak platformu.",
    category: "Eğitim"
  },
  {
    id: 733,
    title: "Project Euler",
    url: "https://projecteuler.net",
    description: "Hesaplamalı ve matematiksel problem çözme becerilerini geliştiren zorlu problemler serisi.",
    category: "Eğitim"
  },
  {
    id: 734,
    title: "Rosetta Code",
    url: "https://rosettacode.org",
    description: "Aynı görevin farklı programlama dillerinde nasıl çözüldüğünü gösteren bir programlama chrestomathy sitesi.",
    category: "Referans"
  },
  {
    id: 735,
    title: "Hyperpolyglot",
    url: "http://hyperpolyglot.org",
    description: "Farklı programlama dillerinin özelliklerini yan yana karşılaştıran bir kaynak.",
    category: "Referans"
  },
  {
    id: 736,
    title: "The A-Z of AI",
    url: "https://www.theazofai.com",
    description: "Yapay zeka terimlerini ve kavramlarını basit bir dille açıklayan bir rehber.",
    category: "Referans"
  },
  {
    id: 737,
    title: "Papers with Code",
    url: "https://paperswithcode.com",
    description: "En son makine öğrenmesi makalelerini, kodlarını ve değerlendirme tablolarını içeren bir kaynak.",
    category: "Referans"
  },
  {
    id: 738,
    title: "arXiv",
    url: "https://arxiv.org",
    description: "Fizik, matematik, bilgisayar bilimi ve daha birçok alanda bilimsel makalelerin bulunduğu bir arşiv.",
    category: "Referans"
  },
  {
    id: 739,
    title: "ResearchGate",
    url: "https://www.researchgate.net",
    description: "Bilim insanları ve araştırmacılar için makaleleri paylaşmak ve işbirliği yapmak için bir sosyal ağ.",
    category: "Referans"
  },
  {
    id: 740,
    title: "Academia.edu",
    url: "https://www.academia.edu",
    description: "Akademisyenlerin araştırma makalelerini paylaştığı bir platform.",
    category: "Referans"
  },
  {
    id: 741,
    title: "Zotero",
    url: "https://www.zotero.org",
    description: "Araştırma kaynaklarınızı toplamanıza, organize etmenize ve alıntılamanıza yardımcı olan ücretsiz bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 742,
    title: "Mendeley",
    url: "https://www.mendeley.com",
    description: "Araştırma makalelerinizi yönetmek ve paylaşmak için bir referans yöneticisi ve akademik sosyal ağ.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 743,
    title: "Overleaf",
    url: "https://www.overleaf.com",
    description: "Çevrimiçi, işbirliğine dayalı bir LaTeX ve zengin metin düzenleyici.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 744,
    title: "Google Dataset Search",
    url: "https://datasetsearch.research.google.com",
    description: "Web üzerindeki veri kümelerini bulmak için bir arama motoru.",
    category: "Referans"
  },
  {
    id: 745,
    title: "UCI Machine Learning Repository",
    url: "https://archive.ics.uci.edu/ml/index.php",
    description: "Makine öğrenmesi topluluğu tarafından kullanılan veri kümeleri, teoriler ve algoritmalar koleksiyonu.",
    category: "Referans"
  },
  {
    id: 746,
    title: "FiveThirtyEight",
    url: "https://fivethirtyeight.com",
    description: "Veri odaklı gazetecilik ile politika, spor ve bilim üzerine analizler sunan bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 747,
    title: "The Pudding",
    url: "https://pudding.cool",
    description: "Tartışmalı konuları görsel denemelerle açıklayan bir dijital yayın.",
    category: "Haberler & Medya"
  },
  {
    id: 748,
    title: "Nautilus",
    url: "https://nautil.us",
    description: "Bilim, felsefe ve kültür üzerine derinlemesine hikayeler sunan bir dergi.",
    category: "Haberler & Medya"
  },
  {
    id: 749,
    title: "Aeon",
    url: "https://aeon.co",
    description: "Felsefe, bilim ve kültür üzerine derin düşünceler ve makaleler sunan bir dijital dergi.",
    category: "Haberler & Medya"
  },
  {
    id: 750,
    title: "ProPublica",
    url: "https://www.propublica.org",
    description: "Kamu yararına araştırmacı gazetecilik yapan, kar amacı gütmeyen bir haber odası.",
    category: "Haberler & Medya"
  },
  {
    id: 751,
    title: "The Athletic",
    url: "https://theathletic.com",
    description: "Abonelik tabanlı, reklamsız ve derinlemesine spor haberleri sunan bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 752,
    title: "Letter",
    url: "https://letter.wiki",
    description: "Önemli konular üzerine iki kişi arasında geçen özel mektup yazışmalarını yayınlayan bir platform.",
    category: "Haberler & Medya"
  },
  {
    id: 753,
    title: "1440",
    url: "https://join1440.com",
    description: "Tarafsız, gerçeklere dayalı haberler sunan günlük bir e-posta bülteni.",
    category: "Haberler & Medya"
  },
  {
    id: 754,
    title: "Techmeme",
    url: "https://www.techmeme.com",
    description: "Teknoloji dünyasındaki en önemli haberleri bir araya getiren bir haber toplayıcı.",
    category: "Haberler & Medya"
  },
  {
    id: 755,
    title: "Mediagazer",
    url: "https://www.mediagazer.com",
    description: "Medya endüstrisindeki en son haberleri ve tartışmaları özetleyen bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 756,
    title: "RealClearPolitics",
    url: "https://www.realclearpolitics.com",
    description: "Farklı kaynaklardan siyasi haberler, anketler ve yorumlar toplayan bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 757,
    title: "Arts & Letters Daily",
    url: "https://www.aldaily.com",
    description: "Felsefe, estetik ve fikirler üzerine en iyi makaleleri ve denemeleri bir araya getiren bir site.",
    category: "Haberler & Medya"
  },
  {
    id: 758,
    title: "Longform.org",
    url: "https://longform.org",
    description: "Yeni ve klasik, kurgusal olmayan uzun makaleleri öneren bir platform.",
    category: "Haberler & Medya"
  },
  {
    id: 759,
    title: "Pocket",
    url: "https://getpocket.com",
    description: "Makaleleri, videoları ve hikayeleri daha sonra okumak veya izlemek için kaydetme uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 760,
    title: "Instapaper",
    url: "https://www.instapaper.com",
    description: "Web makalelerini daha sonra okumak için temiz ve okunabilir bir formatta kaydeden bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 761,
    title: "Feedly",
    url: "https://feedly.com",
    description: "Favori yayınlarınızı, bloglarınızı ve YouTube kanallarınızı takip etmek için bir haber toplayıcı.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 762,
    title: "Inoreader",
    url: "https://www.inoreader.com",
    description: "Güçlü otomasyon özelliklerine sahip, özelleştirilebilir bir içerik ve RSS okuyucu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 763,
    title: "Reeder",
    url: "https://reeder.app",
    description: "Apple cihazları için tasarlanmış popüler bir RSS okuyucu ve daha sonra oku uygulaması.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 764,
    title: "NetNewsWire",
    url: "https://netnewswire.com",
    description: "Mac ve iOS için ücretsiz ve açık kaynaklı bir RSS okuyucu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 765,
    title: "The Old Reader",
    url: "https://theoldreader.com",
    description: "Basit ve sosyal bir RSS okuyucu.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 766,
    title: "Blinkist",
    url: "https://www.blinkist.com",
    description: "Kurgusal olmayan kitapları ve podcast'leri 15 dakikalık özetler halinde sunan bir hizmet.",
    category: "Eğitim"
  },
  {
    id: 767,
    title: "Shortform",
    url: "https://www.shortform.com",
    description: "Dünyanın en iyi kurgusal olmayan kitaplarının derinlemesine özetlerini sunan bir platform.",
    category: "Eğitim"
  },
  {
    id: 768,
    title: "Audible",
    url: "https://www.audible.com",
    description: "Amazon'a ait, dünyanın en büyük sesli kitap ve podcast üreticisi ve satıcısı.",
    category: "Eğlence"
  },
  {
    id: 769,
    title: "LibriVox",
    url: "https://librivox.org",
    description: "Gönüllüler tarafından okunan, kamu malı sesli kitapların bulunduğu bir kütüphane.",
    category: "Eğlence"
  },
  {
    id: 770,
    title: "Project Gutenberg",
    url: "https://www.gutenberg.org",
    description: "Telif hakkı süresi dolmuş kitapların ücretsiz e-kitaplarını sunan bir gönüllü projesi.",
    category: "Referans"
  },
  {
    id: 771,
    title: "Standard Ebooks",
    url: "https://standardebooks.org",
    description: "Project Gutenberg'den alınan kamu malı e-kitapları özenle biçimlendiren ve modernleştiren bir proje.",
    category: "Referans"
  },
  {
    id: 772,
    title: "Scribd",
    url: "https://www.scribd.com",
    description: "E-kitaplar, sesli kitaplar, dergiler ve belgelere abonelik tabanlı erişim sunan bir dijital kütüphane.",
    category: "Eğlence"
  },
  {
    id: 773,
    title: "Issuu",
    url: "https://issuu.com",
    description: "Dergiler, kataloglar ve gazeteler gibi dijital yayınları yayınlamak ve okumak için bir platform.",
    category: "Eğlence"
  },
  {
    id: 774,
    title: "FlippingBook",
    url: "https://flippingbook.com",
    description: "PDF'leri profesyonel, etkileşimli dijital flipbook'lara dönüştüren bir yazılım.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 775,
    title: "Kialo",
    url: "https://www.kialo.com",
    description: "Tartışmalı konuları keşfetmek ve mantıksal argümanlar oluşturmak için bir tartışma platformu.",
    category: "Eğitim"
  },
  {
    id: 776,
    title: "LessWrong",
    url: "https://www.lesswrong.com",
    description: "İnsan rasyonelliği ve bilişsel bilimler üzerine odaklanmış bir topluluk blogu.",
    category: "Eğitim"
  },
  {
    id: 777,
    title: "Farnam Street",
    url: "https://fs.blog",
    description: "Zihinsel modelleri ve daha iyi karar verme üzerine odaklanmış bir blog.",
    category: "Eğitim"
  },
  {
    id: 778,
    title: "Wait But Why",
    url: "https://waitbutwhy.com",
    description: "Karmaşık konuları derinlemesine ve eğlenceli bir şekilde açıklayan uzun formlu bir blog.",
    category: "Eğitim"
  },
  {
    id: 779,
    title: "Kurzgesagt",
    url: "https://kurzgesagt.org",
    description: "Bilim ve felsefe konularını animasyonlu videolarla açıklayan bir YouTube kanalı ve stüdyo.",
    category: "Eğitim"
  },
  {
    id: 780,
    title: "Mark Rober",
    url: "https://www.youtube.com/c/MarkRober",
    description: "Eğlenceli ve yaratıcı mühendislik projeleri ve bilim deneyleri sunan bir YouTuber.",
    category: "Eğitim"
  },
  {
    id: 781,
    title: "SmarterEveryDay",
    url: "https://www.youtube.com/c/smartereveryday",
    description: "Bilimsel keşifleri ve dünyayı yavaş çekimde keşfeden bir YouTube serisi.",
    category: "Eğitim"
  },
  {
    id: 782,
    title: "Veritasium",
    url: "https://www.youtube.com/c/veritasium",
    description: "Bilim, eğitim ve mühendislik üzerine videolar üreten bir YouTube kanalı.",
    category: "Eğitim"
  },
  {
    id: 783,
    title: "Vsauce",
    url: "https://www.youtube.com/c/vsauce1",
    description: "İlginç bilimsel, felsefi ve matematiksel soruları araştıran bir YouTube kanalı.",
    category: "Eğitim"
  },
  {
    id: 784,
    title: "CGP Grey",
    url: "https://www.youtube.com/c/CGPGrey",
    description: "Karmaşık konuları (politika, coğrafya, teknoloji) animasyonlarla açıklayan bir YouTuber.",
    category: "Eğitim"
  },
  {
    id: 785,
    title: "Oversimplified",
    url: "https://www.youtube.com/c/OverSimplified",
    description: "Tarihi olayları basitleştirilmiş ve komik animasyonlarla anlatan bir YouTube kanalı.",
    category: "Eğitim"
  },
  {
    id: 786,
    title: "History Matters",
    url: "https://www.youtube.com/c/HistoryMatters",
    description: "Tarihi konuları kısa ve öz animasyonlu videolarla açıklayan bir kanal.",
    category: "Eğitim"
  },
  {
    id: 787,
    title: "The School of Life",
    url: "https://www.theschooloflife.com",
    description: "Daha sakin, daha dirençli ve daha bilinçli bir yaşam sürmenize yardımcı olan bir kaynak.",
    category: "Eğitim"
  },
  {
    id: 788,
    title: "Simple English Wikipedia",
    url: "https://simple.wikipedia.org",
    description: "Standart Wikipedia'nın basitleştirilmiş İngilizce ile yazılmış bir versiyonu.",
    category: "Referans"
  },
  {
    id: 789,
    title: "WikiArt",
    url: "https://www.wikiart.org",
    description: "Görsel sanat eserlerinin çevrimiçi, düzenlenebilir bir ansiklopedisi.",
    category: "Referans"
  },
  {
    id: 790,
    title: "Art UK",
    url: "https://artuk.org",
    description: "Birleşik Krallık'taki halka açık sanat koleksiyonlarını sergileyen bir web sitesi.",
    category: "Referans"
  },
  {
    id: 791,
    title: "Google Arts & Culture",
    url: "https://artsandculture.google.com",
    description: "Dünya çapındaki müzelerden ve arşivlerden sanat eserlerini ve kültürel eserleri keşfetme platformu.",
    category: "Referans"
  },
  {
    id: 792,
    title: "Europeana",
    url: "https://www.europeana.eu",
    description: "Avrupa'nın dijitalleştirilmiş müze koleksiyonlarına, kütüphanelerine ve arşivlerine erişim.",
    category: "Referans"
  },
  {
    id: 793,
    title: "Smithsonian Institution",
    url: "https://www.si.edu",
    description: "Dünyanın en büyük müze, eğitim ve araştırma kompleksi.",
    category: "Referans"
  },
  {
    id: 794,
    title: "NASA",
    url: "https://www.nasa.gov",
    description: "ABD'nin Ulusal Havacılık ve Uzay Dairesi. Uzay araştırmaları ve keşifleri hakkında bilgiler.",
    category: "Referans"
  },
  {
    id: 795,
    title: "SpaceX",
    url: "https://www.spacex.com",
    description: "Roketler ve uzay araçları tasarlayan, üreten ve fırlatan bir havacılık şirketi.",
    category: "Teknoloji"
  },
  {
    id: 796,
    title: "ESA (European Space Agency)",
    url: "https://www.esa.int",
    description: "Avrupa'nın uzay programını şekillendiren ve yürüten hükümetler arası bir kuruluş.",
    category: "Referans"
  },
  {
    id: 797,
    title: "JAXA (Japan Aerospace Exploration Agency)",
    url: "https://global.jaxa.jp",
    description: "Japonya'nın ulusal havacılık ve uzay ajansı.",
    category: "Referans"
  },
  {
    id: 798,
    title: "Britannica",
    url: "https://www.britannica.com",
    description: "Güvenilir ve kapsamlı bilgiler sunan köklü bir genel bilgi ansiklopedisi.",
    category: "Referans"
  },
  {
    id: 799,
    title: "Infoplease",
    url: "https://www.infoplease.com",
    description: "Ansiklopedi, sözlük, atlas ve almanak bilgilerini bir araya getiren bir referans sitesi.",
    category: "Referans"
  },
  {
    id: 800,
    title: "Fact Monster",
    url: "https://www.factmonster.com",
    description: "Çocuklar için tasarlanmış, ödev yardımı ve gerçekleri içeren bir referans sitesi.",
    category: "Referans"
  },
  {
    id: 801,
    title: "Wolfram MathWorld",
    url: "https://mathworld.wolfram.com",
    description: "Kapsamlı bir matematiksel kaynak.",
    category: "Referans"
  },
  {
    id: 802,
    title: "ProofWiki",
    url: "https://proofwiki.org",
    description: "Matematiksel kanıtların çevrimiçi bir özeti.",
    category: "Referans"
  },
  {
    id: 803,
    title: "The Feynman Lectures on Physics",
    url: "https://www.feynmanlectures.caltech.edu",
    description: "Richard Feynman'ın efsanevi fizik derslerinin ücretsiz çevrimiçi baskısı.",
    category: "Eğitim"
  },
  {
    id: 804,
    title: "BioRender",
    url: "https://biorender.com",
    description: "Bilimsel diyagramlar, illüstrasyonlar ve posterler oluşturmak için bir web uygulaması.",
    category: "Tasarım"
  },
  {
    id: 805,
    title: "arXiv Vanity",
    url: "https://www.arxiv-vanity.com",
    description: "arXiv'deki bilimsel makaleleri okunabilir ve duyarlı web sayfalarına dönüştürür.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 806,
    title: "Connected Papers",
    url: "https://www.connectedpapers.com",
    description: "Akademik makaleleri keşfetmek için görsel bir araç.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 807,
    title: "Scite",
    url: "https://scite.ai",
    description: "Araştırma makalelerinin nasıl alıntılandığını göstererek daha güvenilir bilimsel çalışmalar yapmanıza yardımcı olur.",
    category: "Araçlar & Üretkenlik"
  },
  {
    id: 808,
    title: "Elicit",
    url: "https://elicit.org",
    description: "Araştırma sorularınıza ilgili makalelerden özetlenmiş cevaplar bulan bir yapay zeka araştırma asistanı.",
    category: "Yapay Zeka"
  },
  {
    id: 809,
    title: "Consensus",
    url: "https://consensus.app",
    description: "Bilimsel araştırmalardan kanıta dayalı cevaplar çıkaran bir yapay zeka arama motoru.",
    category: "Yapay Zeka"
  },
  {
    id: 810,
    title: "Sci-Hub",
    url: "https://sci-hub.se",
    description: "Ödeme duvarlarını aşarak milyonlarca araştırma makalesine erişim sağlayan bir gölge kütüphane.",
    category: "Referans"
  },
  {
    id: 811,
    title: "Library Genesis (LibGen)",
    url: "https://libgen.is",
    description: "Bilimsel dergi makaleleri, akademik kitaplar ve genel ilgi kitapları için bir dosya paylaşım web sitesi.",
    category: "Referans"
  },
  {
    id: 812,
    title: "Z-Library",
    url: "https://z-lib.org",
    description: "Gölge kütüphane projelerinden biri olan, e-kitaplar ve akademik makaleler için bir dosya paylaşım sitesi.",
    category: "Referans"
  },
  {
    id: 813,
    title: "JSTOR",
    url: "https://www.jstor.org",
    description: "Akademik dergiler, kitaplar ve birincil kaynaklar için bir dijital kütüphane.",
    category: "Referans"
  },
  {
    id: 814,
    title: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    description: "Biyomedikal ve yaşam bilimleri literatürünü içeren bir ücretsiz arama motoru.",
    category: "Referans"
  },
  {
    id: 815,
    title: "ERIC (Education Resources Information Center)",
    url: "https://eric.ed.gov",
    description: "Eğitim literatürü ve kaynakları için bir çevrimiçi dijital kütüphane.",
    category: "Referans"
  },
  {
    id: 816,
    title: "The Dieline",
    url: "https://thedieline.com",
    description: "Ambalaj tasarımı endüstrisine odaklanmış bir blog ve topluluk.",
    category: "Tasarım"
  },
  {
    id: 817,
    title: "Brand New",
    url: "https://www.underconsideration.com/brandnew/",
    description: "Kurumsal ve marka kimliği çalışmaları üzerine görüşler sunan bir blog.",
    category: "Tasarım"
  },
  {
    id: 818,
    title: "Identity Designed",
    url: "https://identitydesigned.com",
    description: "Dünya çapındaki en iyi marka kimliği projelerini sergileyen bir vitrin.",
    category: "Tasarım"
  },
  {
    id: 819,
    title: "LogoLounge",
    url: "https://www.logolounge.com",
    description: "Profesyonel logo tasarımcıları için bir araştırma, ilham ve referans aracı.",
    category: "Tasarım"
  },
  {
    id: 820,
    title: "LogoPond",
    url: "https://logopond.com",
    description: "Logo tasarımı ilhamı için bir galeri ve topluluk.",
    category: "Tasarım"
  },
  {
    id: 821,
    title: "Fonts.com",
    url: "https://www.fonts.com",
    description: "Masaüstü ve web için binlerce yazı tipi satın almak ve indirmek için bir pazar yeri.",
    category: "Tasarım"
  },
  {
    id: 822,
    title: "MyFonts",
    url: "https://www.myfonts.com",
    description: "Dünyanın en büyük dijital yazı tipi koleksiyonlarından biri.",
    category: "Tasarım"
  },
  {
    id: 823,
    title: "Fontspring",
    url: "https://www.fontspring.com",
    description: "Endişesiz lisanslama ile yüksek kaliteli yazı tipleri sunan bir pazar yeri.",
    category: "Tasarım"
  },
  {
    id: 824,
    title: "Lost Type Co-op",
    url: "http://www.losttype.com",
    description: "Benzersiz ve yüksek kaliteli yazı tipleri sunan bir tip dökümhanesi.",
    category: "Tasarım"
  },
  {
    id: 825,
    title: "Tipeez",
    url: "https://www.tipeez.com",
    description: "Çocuklara ve gençlere yönelik oyunlar, videolar ve içerikler sunan bir eğlence platformu.",
    category: "Eğlence"
  }
];
