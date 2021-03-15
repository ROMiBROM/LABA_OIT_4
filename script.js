/*Задание 1. Создать пользовательский объект Gruppa (использовать пример, представленный выше). Добавить метод sub_stud (исключить из группы k студентов).
Создать несколько экземпляров объекта Gruppa (gr2, gr3, gr4). 
Применить методы add_stud и sub_stud к каждому экземпляру. Вывести на страницу количество студентов в каждой группе.*/
function Gruppa(n,spec,kolich) {
    //Свойства(номер, специальность, количество)
    this.n=n;
    this.spec=spec;
    this.kolich=kolich;
    //Метод (добавить в группу k студентов)
    this.add_stud=function add_stud(k) {
        document.write('В группе номер '+ this.n + ' специальности '+ this.spec + ' было ' + this.kolich + ' студентов <br\>'); 
        this.kolich = this.kolich + k;
        document.write('В группу ' + this.n + ' добавили '+ k + ' студентов.</br>Нынешнее количество студентов ' + this.kolich + '<br\>'); 
    }
    this.sub_stud = function sub_stud(d){
        document.write('В группе номер '+ this.n + ' специальности '+ this.spec + ' было ' + this.kolich + ' студентов <br\>'); 
        this.kolich = this.kolich - d;
        document.write('Из группы ' + this.n + ' исключили '+ d + ' студентов.</br>Нынешнее количество студентов ' + this.kolich + '<br\>'); 
    }
}

Gruppa(1,'ИСиТ', 20);
add_stud(2);
sub_stud(5);
document.write('<br><br><br>');

gr2=Gruppa(2, 'ИСиТ', 31);
add_stud(7);
sub_stud(3);

document.write('<br><br><br>');

gr3=Gruppa(3, 'ИСиТ', 29);
add_stud(4);
sub_stud(2);

document.write('<br><br><br>');

gr4=Gruppa(4, 'ПОИТ', 29);
add_stud(1);
sub_stud(10);


/* Задание 2 Создать пользовательский объект Студент. Свойства: имя, фамилия, физика (оценка), математика, информатика. Методы: вывести свое имя и фамилию в окно,
рассчитать средний балл и вывести на страницу. Создать 3 экземпляра объекта Студент. Вывести информацию о всех студентах.
Добавить какое-нибудь свойство объекту Студент. Задать значение этого свойства для всех экземпляров. Вывести информацию о всех студентах на страницу.
Вместо объекта Студент можно придумать свой пример. Это приветствуется. */

function Student(name,surName,physics,chemistry,maths,Informatics,kurs) {
    //Свойства(номер, специальность, количество)
    this.kurs = kurs;
    this.name=name;
    this.surName = surName;
    this.physics = physics;
    this.chemistry = chemistry;
    this.maths = maths;
    this.Informatics = Informatics;
    //Метод (добавить в группу k студентов)
    this.name_output = function name_output(){
        alert('Имя студента '+ this.name + ' Фамилия студента ' + this.surName);
        document.write('Курс студента ' + this.kurs + '</br>');
    }
    this.Srednii_ball = function Srednii_ball(){
        let ball = (this.physics + this.chemistry + this.maths + this.Informatics) / 4;
        document.write('Средний балл студента ' + this.surName + ' ' + this.name+ ' : '  + ball);
    }

 
}

/*document.write('<br><br><br>');
Student('Вера','Максимова',4,4,5,9,1);
name_output();
Srednii_ball();

document.write('<br><br><br>');
student_1 = Student('Иван','Иванов',6,4,8,9,2);
name_output();
Srednii_ball();

document.write('<br><br><br>');
student_2 = Student('Люба','Вердеревская',4,4,9,9,4);
name_output();
Srednii_ball();

document.write('<br><br><br>');
student_3 = Student('Марина','Брестская',10,4,8,9,3);
name_output();
Srednii_ball(); */

/* Задание 3
Использовать объекты Math, Array и String из лабораторной работы № 3.
Delete. Удалить из массива элемент с номером 3, вывести исходный массив и полученный.
In. Проверить, имеется ли у массива 2-й элемент. Проверить наличие любого свойства у созданных ранее пользовательских объектов Gruppa и Студент. 
Instanceof. Проверить, являются ли созданные объекты объектами Array, String, Object.
Typeof. Создать функцию, которая просто возвращает значение 5. Узнать тип всех созданных ранее объектов, включая функцию.
Узнать тип всех свойств пользовательских объектов Gruppa и  Студент. */

document.write('<br><br><br>3 Задание');

x = new Number(6 * Math.pow((Math.PI),2) + 3 * Math.exp(8));
y = new Number(2 * Math.cos(4) + Math.cos(2) + 8 * Math.exp(3));
z = new Number(3 * Math.sin(9) + Math.log(5) + Math.sqrt(3));
t = new Number(2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12));

console.log('Массив элементов');
var arr_= [Number(x),Number(y),Number(z),Number(t)];
console.log(arr_);
let max = x;
let min = x;
let index_min = 0;
let index_max = 0;
for(let i = 0; i <= arr_.length;i++){
    if(max < arr_[i]){
        max = arr_[i];
        index_max = i;
    }
    if(min > arr_[i]){
        min = arr_[i];
        index_min = i;
    }
}

console.log('Максимальный элемент');
console.log(max);
console.log('Индекс максимального элемента');
console.log(index_max);
console.log('Минимальный элемент');
console.log(min);
console.log('Индекс минимального элемента');
console.log(index_min);