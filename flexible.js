// alert("hola")

const jugadores=[
{top:1,name:" Lionel", apellido:" Messi", club:"Paris SaintGermain", val:	91,progreso: -2},
{top:2,name:" Robert", apellido:" Lewandowski", club:"FC Barcelona", val:	91,progreso: -1},
{top:3,name:" Kylian", apellido:" Mbappé", club:"Paris SaintGermain", val:	91,progreso: 0},
{top:4,name:" Karim" ,apellido:" Benzema", club:"Real Madrid", val:	91,progreso: +2},
{top:5,name:" Kevin" ,apellido:" De Bruyne",  club:"Manchester City", val:	91,progreso: 0},
{top:6,name:" Cristiano", apellido:" Ronaldo", club:"Manchester United", val:	90,progreso: -1},
{top:7,name:" Mohamed", apellido:" Salah", club:"Liverpool FC", val:	90,progreso: +1},
{top:8,name:" Manuel", apellido:" Neuer", club:"Bayern de Múnich", val: 	90,progreso: 0},
{top:9,name:" Virgil", apellido:" van Dijk",  club:"Liverpool FC", val:	90,progreso: +1},
{top:10,name:" Thibaut", apellido:" Courtois", club:"Real Madrid", val:	90,progreso: +1},
{top:11, name: "Ederson", apellido:"morales", club:"Manchester City" ,val:89, progreso:0},
{top:12, name: "Casemiro", apellido:" ", club:"Manchester United" ,val:89, progreso:0},
{top:13, name: "NGolo", apellido: "Kanté", club:"Chelsea FC" ,val:89 ,progreso:-1},
{top:14, name: "Jan", apellido: "Oblak", club:"Atlético de madrid",val:89 ,progreso:-2 },
{top:15, name: "Neymar", apellido:" junior", club:"Paris Saint german",val:89, progreso: -1},
{top:16, name: "Alisson", apellido: "Becker", club:"Liverpool FC",val:  89,progreso: 0},
{top:17, name: "Joshua", apellido: "Kimmich", club:"Bayern de Múnich",val:89 ,progreso:0  },
{top:18, name: "Sadio", apellido: "Mané", club:"Bayern de Múnich",val: 89,progreso:0  },
{top:19, name: "Heung", apellido: "Min Son", club:"Tottenham Hotspur",val:  89,progreso: 0},
{top:20, name: "Harry", apellido: "Kane", club:"Tottenham Hotspur",val:  89,progreso: -1},
{top:21, name: "Luka", apellido: "Modric", club:"Real Madrid",val:  88,progreso: +1},
{top:22, name: "Toni", apellido: "Kroos", club:"Real Madrid",val:  88,progreso: 0},
{top:23, name: "Marc", apellido:-"Andre Ter Stegen", club:"FC Barcelona",val: 88,progreso: -2},
{top:24, name: "Gianluigi", apellido: "Donnarumma", club:"Paris SaintGermain", val: 88, progreso:-1},
{top:25, name: "Bernardo", apellido: "Silva", club:"Manchester City",val:  88,progreso: +2},
{top:26, name: "Rúben", apellido: "Dias", club:"Manchester City",val:  88,progreso: +1},
{top:27, name: "Keylor", apellido: "Navas", club:"Paris SaintGermain", val: 88, progreso: 0},
{top:28, name: "Marquinhos", apellido:" ", club:"Paris Saint german",val:88, progreso: +1},
{top:29, name: "Erling", apellido: "Haaland", club:"Manchester City",val:  88,progreso: 0},
{top:30, name: "João", apellido: "Cancelo", club:"Manchester City",val:  88,progreso: +2},
{top:31, name: "Mike", apellido: "Maignan", club:"AC Milan",val:  87,progreso: +3},
{top:32, name: "David", apellido: "De Gea", club:"Manchester United",val:  87,progreso: +3},
{top:33, name: "Alexander", apellido: "Arnold", club:"Liverpool FC",val:  87,progreso: 0},
{top:34, name: "Thomas", apellido: "Müller", club:"Bayern de Múnich",val: 87,progreso: 0 },
{top:35, name: "Leon", apellido: "Goretzka", club:"Bayern de Múnich",val: 87,progreso: 0 },
{top:36, name: "Hugo", apellido: "Lloris", club:"Tottenham Hotspur",val:  87,progreso: 0},
{top:37, name: "Frenkie", apellido: "de Jong", club:"FC Barcelona",val:  87,progreso: 0},
{top:38, name: "Kalidou", apellido: "Koulibaly", club:"Chelsea FC",val:  87,progreso: +1},
{top:39, name: "Antonio", apellido: "Rüdiger", club:"Real Madrid",val:  87,progreso: +4},
{top:40, name: "Andrew", apellido: "Robertson", club:"Liverpool FC",val:  87,progreso: 0},
{top:41, name: "Marco", apellido: "Verratti", club:"Paris SaintGermain", val: 87, progreso:0},
{top:42, name: "Fabinho", apellido:" ", club:"Liverpool FC",val:87, progreso:+1},
{top:43, name: "Rodri", apellido:"", club:"Manchester City",val:87, progreso:+1},
{top:44, name: "Bruno", apellido: "Fernandes", club:"Manchester United",val:  86,progreso: -2},
{top:45, name: "Wojciech", apellido: "Szczesny", club:"Juventus", val:86, progreso: -1},
{top:46, name: "Riyad", apellido: "Mahrez", club:"Manchester City",val:  86,progreso: 0},
{top:47, name: "Kingsley", apellido: "Coman", club:"Bayern de Múnich", val: 86,progreso: 0},
{top:48, name: "Vinicius", apellido: "Junior", club:"Real Madrid",val:  86,progreso: +6},
{top:49, name: "Milan", apellido: "Škriniar", club:"Inter de Milán", val: 86,progreso: 0},
{top:50, name: "Romelu", apellido: "Lukaku", club:"Inter de Milán", val: 86,progreso: -2},
{top:51, name: "Thiago", apellido: "Silva", club:"Chelsea FC",val:  86,progreso: +1},
{top:52, name: "Édouard", apellido: "Mendy", club:"Chelsea FC",val:  86,progreso: +3},
{top:53, name: "Theo", apellido: "Hernandez", club:"AC Milan",val:  86,progreso: +2},
{top:54, name: "Paulo", apellido: "Dybala", club:"Roma FC",val:86 ,progreso:-1 },   
{top:55, name: "Aymeric", apellido: "Laporte", club:"Manchester City",val:  86,progreso: 0},
{top:56, name: "Marcelo", apellido: "Brozović", club:"Inter de Milán", val: 86,progreso: +2},
{top:57, name: "Christopher", apellido: "Nkunku", club:"RB Leipzig",val:  86,progreso: +5},
{top:58, name: "Savic", apellido: "Milinkovic", club: "Latium", val:86, progreso: +1},
{top:59, name: "Nicolò", apellido: "Barella", club:"Inter de Milán", val: 86,progreso: +2},
{top:60, name: "Lautaro", apellido: "Martínez", club:"Inter de Milán", val: 86,progreso: +1},
{top:61, name: "Daniel", apellido: "Parejo", club:"Villarreal CF",val:  86,progreso: 0},
{top:62, name: "David", apellido: "Alaba", club:"Real Madrid",val:  86,progreso: +2},
{top:63, name: "Thiago", apellido:"", club:"Liverpool FC",val:86, progreso:0},
{top:64, name: "Raheem", apellido: "Sterling", club:"Chelsea FC",val:  86,progreso: -2},
{top:65, name: "Jorginho", apellido:"", club:"Chelsea FC",val:85, progreso:0},
{top:66, name: "Serge", apellido: "Gnabry", club:"Bayern de Múnich",val:85, progreso:0  },
{top:67, name: "Jordi", apellido: "Alba", club:"FC Barcelona",val:85,progreso: -1},
{top:68, name: "Paul", apellido: "Pogba", club:"Juventus" ,val:86 ,progreso:-2},
{top:69, name: "Pedri", apellido:" ", club:"FC Barcelona",val:85, progreso:+4},
{top:70, name: "Memphis", apellido: "Depay", club:"FC Barcelona", val: 85,progreso:0},
{top:71, name: "Aubameyang", apellido:"Emerick", club:"FC Barcelona",val:85,progreso: 0},
{top:72, name: "Matthijs", apellido: "De Ligt", club:"Bayern de Múnich", val: 85,progreso: 0},
{top:73, name: "Jamie", apellido: "Vardy", club:"Leicester City",val:  85,progreso: -1},
{top:74, name: "Kyle", apellido: "Walker", club:"Manchester City",val:  85,progreso: 0},
{top:75, name: "Ilkay", apellido: "Gündogan", club:"Manchester City",val:  85,progreso: 0},
{top:76, name: "Phil", apellido: "Foden", club:"Manchester City",val:  85,progreso: +1},
{top:77, name: "Marco", apellido: "Reus", club:"Borussia Dortmund",val:  85,progreso: 0},
{top:78, name: "Niklas", apellido: "Süle", club:"Borussia Dortmund",val:  85,progreso: +3},
{top:79, name: "Nabil", apellido: "Fekir", club:"Real Betis Sevilla", val: 85,progreso: +1},
{top:80, name: "Péter", apellido: "Gulácsi", club:"RB Leipzig",val:  85,progreso: 0},
{top:81, name: "Marcos", apellido: "Acuna", club:"FC Sevilla",val:  85,progreso: +1},
{top:82, name: "Angel", apellido: "Di Maria",club: "Juventus", val: 84, progreso:-3},
{top:83, name: "Joao", apellido: "Felix", club:"Atlético de Madrid", val: 84,progreso: +1},
{top:84, name: "Sergio", apellido: "Ramos", club:"Paris SaintGermain", val: 84, progreso :-4},
{top:85, name: "Dusan", apellido: "Tadic", club:"Ajax Amsterdam", val:84, progreso: 0},
{top:86, name: "Kai", apellido: "Havertz", club:"Chelsea FC",val:  84,progreso: 0},
{top:87, name: "Matteo", apellido: "Kovacic", club:"Chelsea FC",val:  84,progreso: +1},
{top:88, name: "Rafael", apellido: "Leão", club:"AC Milan",val:  84,progreso: +7},
{top:89, name: "Sandro", apellido: "Tonalli", club:"AC Milan",val:  84,progreso: +7},
{top:90, name: "Alphonso", apellido: "Davies", club:"Bayern de Múnich", val: 84,progreso: +2},
{top:91, name: "Mikkel", apellido: "Oyarzabal", club:"Real Sociedad",val:  84,progreso: -1},
{top:92, name: "Fikayo", apellido: "Tomori", club:"AC Milan",val:  84,progreso: +5},
{top:93, name: "Mats", apellido: "Hummels", club:"Borussia Dortmund",val:  84,progreso: -2},
{top:94, name: "Federico", apellido: "Valverde", club:"Real Madrid",val:  84,progreso: +1},
{top:95, name: "Franck", apellido: "Kessie", club:"FC Barcelona",val:  84,progreso: 0},
{top:96, name: "Eden", apellido: "Hazard", club:"Real Madrid",val:  84,progreso: -1},
{top:97, name: "Jadon", apellido: "Sancho", club:"Manchester United",val:  84,progreso: -3},
{top:98, name: "Raphaël", apellido: "Varane", club:"Manchester United",val:  84,progreso: -2},
{top:99, name: "Marcos", apellido: "Llorente", club:"Atlético de Madrid", val: 84,progreso: -2},
{top:100, name:- "Achraf", apellido: "Hakimi", club:"Paris SaintGermain", val: 84, progreso:-1}
]
play=document.querySelector(".section-ul")
ranking10=jugadores.filter((el)=>el.top<=10)
console.log(ranking10)
ranking10.forEach(el => {
    const li=document.createElement("li");
    li.innerHTML=`${el.top} - ${el.name} ${el.apellido} con ${el.val} de media.`


    play.append(li)
});
