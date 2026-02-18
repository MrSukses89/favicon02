// --- 1. DATA PLAYLIST ---
// Gunakan link raw.githubusercontent.com agar file bisa di-stream langsung
// --- 1. DATA PLAYLIST ---
const songList = [
    { 
        title: "Whataya Want From Me", 
        artist: "Adam Lambert", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what_from_me.mp3", 
        cover: "linear-gradient(135deg, #feb47b, #ff7e5f)"
    }, 
    { 
        title: "Hall of Fame", 
        artist: "The Script ft. will.i.am", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/hall%20of%20fame.mp3", 
        cover: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {   
        title: "It's My Life",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/its_My_Life.mp3",
        cover: "linear-gradient(135deg, #43e97b, #38f9d7)"
    }, 
{   
        title: "Green Day - 21 Guns",
        artist: "Green Day",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Green%20Day_21%20Gun.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Iris",
    artist: "Goo Goo Dolls",
    // Gunakan format RAW agar lancar jaya
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Iris.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 

{
        title: "Don't Cry",
        artist: "Guns N' Roses",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dont%20cry%20gnr.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bad Liar",
        artist: "Imagine Dragons",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bad%20liar.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "In The End",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/in%20the%20end.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Young Dumb & Broke",
    artist: "Khalid",
    // Link sudah diperbaiki ke format RAW yang benar
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/young_dumb.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Slow Dancing in the Burning Room",  
        artist: "John Mayer",
        // Pastikan file ini memang eksis di repo GitHub lo
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/slow_dacing.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Can We Kiss Forever?",
        artist: "Kina ft. Adriana Proenza",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/can_we_kiss.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Poker Face",
        artist: "Lady Gaga",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/poker_face.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Rain On Me",
        artist: "Lady Gaga & Ariana Grande",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rain_on_me.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Numb",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/numb.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Perfect",
        artist: "Simple Plan",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Perfect_simpel.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Surender",
        artist: "Natalie Taylor",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/surender.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Something Like This",
        artist: "The Chainsmokers & Coldplay",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/something%20like%20this.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Akatsuki No Ito",
        artist: "Wakaki",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/akatsuki%20no%20ito.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "What I've Done",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what%20ive%20done.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Where You Will Go",
        artist: "OneRepublic",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/where%20you%20will%20go.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 01",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 02",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 03",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 04",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ghibli%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/gibli%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "river flow rock",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/River%20Flow%20Rock.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Getcha",
        artist: "Sania Twain",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sania_twain_getcha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 04",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 05",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 06",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic 07",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2007.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

    },
{
        title: "Clasic 08",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2008.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi 01",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi 02",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi 03",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Viera 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Viera 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot 01",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot 02",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot 03",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Daughtry",
        artist: "Daughtry",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Daughtry.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion 01",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion 02",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion 03",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh 01",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh 02",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu 01",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu 02",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu 03",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah 01",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%20001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Noah 02",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

        
    },
{
        title: "Noah 03",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah 04",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah 05",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah 06",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 01",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 02",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 03",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 04",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Naff 01",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff 02",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff 03",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha 01",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha 02",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele 01",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele 02",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele 03",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran 01",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran 02",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran 03",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

];



// --- 2. SETUP AUDIO ---
let trackIndex = 0;
let isPlaying = false;
let audio = new Audio();
audio.crossOrigin = "anonymous"; 

// --- 3. FUNGSI LOAD LAGU ---
function loadTrack(index) {
    if (!songList[index]) return; 
    
    audio.src = songList[index].src;
    audio.load();
    
    // Update UI Player
    document.getElementById("song-title").innerText = songList[index].title;
    document.getElementById("artist-name").innerText = songList[index].artist;
    document.querySelector(".album-art").style.background = songList[index].cover;
    
    // Refresh Playlist agar tanda 'active' pindah
    renderPlaylist(document.getElementById('songSearch').value);
}

// --- 4. RENDER DAFTAR LAGU (PLAYLIST) + FITUR SEARCH ---
function renderPlaylist(filterQuery = "") {
    const playlistEl = document.getElementById("playlist");
    if (!playlistEl) return;

    playlistEl.innerHTML = ""; // Kosongkan list

    songList.forEach((song, index) => {
        // Cek apakah judul/artis cocok dengan pencarian
        const isMatch = song.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
                        song.artist.toLowerCase().includes(filterQuery.toLowerCase());
        
        if (isMatch) {
            const li = document.createElement("li");
            li.className = `playlist-item ${index === trackIndex ? 'active' : ''}`;
            
            li.innerHTML = `
                <div style="display:flex; flex-direction:column;">
                    <span class="song-name">${song.title}</span>
                    <span style="font-size:10px; opacity:0.6;">${song.artist}</span>
                </div>
                ${index === trackIndex ? '<span style="font-size:12px;">🎵</span>' : ''}
            `;

            li.onclick = () => {
                trackIndex = index;
                loadTrack(trackIndex);
                playMusic(true); // Paksa putar
            };
            playlistEl.appendChild(li);
        }
    });
}

// --- 5. KONTROL UTAMA ---
function playMusic(forcePlay = false) {
    const playBtn = document.getElementById("play-btn");
    const wave = document.getElementById("wave-container");
    
    if (forcePlay) isPlaying = false; // Reset state jika dipaksa play dari list

    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            playBtn.innerText = "⏸";
            if(wave) wave.style.display = "flex";
        }).catch(e => console.error("Error playing audio:", e));
    } else {
        audio.pause();
        isPlaying = false;
        playBtn.innerText = "▶";
        if(wave) wave.style.display = "none";
    }
}

function nextSong() {
    trackIndex = (trackIndex + 1) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

function prevSong() {
    trackIndex = (trackIndex - 1 + songList.length) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

// --- 6. PROGRESS BAR & TIME ---
audio.addEventListener("timeupdate", () => {
    const progress = document.getElementById("progress");
    const currTime = document.getElementById("current-time");
    const durTime = document.getElementById("duration-time");

    if (audio.duration) {
        const pc = (audio.currentTime / audio.duration) * 100;
        progress.style.width = pc + "%";

        // Format Waktu
        const curM = Math.floor(audio.currentTime / 60);
        const curS = Math.floor(audio.currentTime % 60);
        const durM = Math.floor(audio.duration / 60);
        const durS = Math.floor(audio.duration % 60);
        
        currTime.innerText = `${curM}:${curS < 10 ? '0'+curS : curS}`;
        durTime.innerText = `${durM}:${durS < 10 ? '0'+durS : durS}`;
    }
});

// Klik pada progress bar untuk skip
function seekAudio(e) {
    const container = document.querySelector(".progress-container");
    const rect = container.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
}

// --- 7. TOGGLE UI (BUKA/TUTUP) ---
function toggleMusic() {
    const card = document.getElementById("music-card");
    card.style.display = (card.style.display === "block") ? "none" : "block";
}

function togglePlaylist() {
    const card = document.getElementById("music-card");
    const side = document.getElementById("side-playlist");
    card.classList.toggle("list-open");
    side.style.display = card.classList.contains("list-open") ? "block" : "none";
}

// --- 8. SEARCH EVENT ---
document.getElementById('songSearch').addEventListener('input', (e) => {
    renderPlaylist(e.target.value);
});

// Jalankan saat pertama kali load
window.onload = () => {
    loadTrack(trackIndex);
};

// Auto next kalau lagu habis
audio.onended = nextSong;

// Listener untuk input pencarian
const searchInput = document.getElementById('songSearch');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value;
        renderPlaylist(keyword); // Memanggil fungsi render yang sudah saya buat sebelumnya
    });
}s