class App {
    constructor(view, color, size, height, fanceColor ) {
        this.view = view;
        this.color = color;
        this.size = size;
        this.height = height;
        this.fanceColor = fanceColor;
    }
    voise(){
        console.log(this.fanceColor)
    }
}

class house extends App {
    constructor(view, color, size, height, fanceColor, DoorColor, RoofColor) {
        super(view, color, size, height, fanceColor);
        this.DoorColor = DoorColor;
        this.RoofColor = RoofColor;
    }
    Roof(){
        console.log(`home: ${this.DoorColor}\nRoof: ${this.RoofColor}`)
    }
}
const exterior = new house(
    'good',
    'yellow',
    'big',
    '8',
    'green',
    'black'
)
exterior.Roof();

const interior = new house(
    'ideal',
    'dawn',
    '2',
    'diversified',
    'green',
    'brown'
)
console.log(interior)


//

class housed {
    constructor(view, color, size, height, fanceColor ) {
        this.view = view;
        this.color = color;
        this.size = size;
        this.height = height;
        this.fanceColor = fanceColor;
    }
    voise(){
        console.log(this.fanceColor)
    }
}

class interiorhouse extends house {
    constructor(view, color, size, height, fanceColor, DoorColor, RoofColor,
                sofa, table, television, room, bath, desk,  computer, cupboard,
                floor, ladder, Hall, kitchen, patalok, wall, window ) {
        super(view, color, size, height, fanceColor);
        this.DoorColor = DoorColor;
        this.RoofColor = RoofColor;
        this.sofa = sofa;
        this.table = table;
        this. television= television;
        this.room = room ;
        this. bath=bath ;
        this.desk =desk ;
        this. computer= computer;
        this. cupboard= cupboard;
        this.floor = floor;
        this.ladder = ladder;
        this.Hall = Hall;
        this.kitchen = kitchen;
        this.patalok = patalok;
        this.wall = wall;
    }
    wall(){
        console.log(`home: ${this.DoorColor}
        \\nRoof: ${this.sofa}\\nRoof: ${this.kitchen}
        \\nRoof: ${this.table}\\nRoof: ${this.Hall}
        \\nRoof: ${this.room}\\nRoof: ${this.television}
        \nRoof: ${this.desk}\\nRoof: ${this.floor}
        \nRoof: ${this.ladder}\nRoof: ${this.computer}
        \\nRoof: ${this.cupboard}\\nRoof: ${this.bath}\\nRoof: ${this.wall()}`)
    }
}
const house1 = new interiorhouse(
    'good',
    'yellow',
    'big',
    '8',
    'green',
    'black',
    'yellow',
    'idael',
    'small',
    'big',
    'blue',
    'height',
    'brown',
    'new',
    'black',
    'line',
    'bright',
    'jask',
    '2.5',
    'bright',
    'wait'
)
house1.Roof();

const house2 = new interiorhouse(
    'ideal',
    'dawn',
    '2',
    'diversified',
    'green',
    'brown',
    'yellow',
    'idael',
    'small',
    'big',
    'blue',
    'height',
    'brown',
    'new',
    'black',
    'line',
    'bright',
    'jask',
    '2.5',
    'bright',
    'wait'
)
console.log(house2)