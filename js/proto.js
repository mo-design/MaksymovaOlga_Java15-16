$(document).ready(function () {
	
	
	
	function Human(name, age) {
		this.name = name;		
		this.age = age;
		this.gen = 'M';
		this.height = 180;
		this.weight = 80;
	};
	
	
	
	
	function Worker(work, salary)  {
		this.workPlace = work;
		this.salary = salary;
		this.work = function() {
					console.log('The place of my work is '+ this.workPlace);
					},
		this.__proto__ =  Human
	}


	function Student(vuz, serName) {
		
		this.studyPlace = vuz;
		this.salary = 50;
		this.seriesTV = function() {
						console.log('Я смотрю сериал "' + serName + '"');
						};	
	}
	
	
	Student.prototype = Human;
	
	
	
	
	var man1 = new Human ('Иван', 35);
	
	var worker1 = new Worker('Завод ХТЗ', 250);
	
	worker1.__proto__ = man1;

	
	console.log('Имя - ' + worker1.name + '.');
	console.log('Возраст - ' + worker1.age + '.');
	console.log('Среднестатистический вес - ' + worker1.weight + '.');
	console.log('Место работы - ' + worker1.workPlace + '.');
	
	console.log('-------------------');
	
	
	var student = new Student('ХПИ', 'Игры престолов');
	
	
	console.log('Мое имя - ' + student.name + '. \n/потому что еще не задано/.');
	console.log('Я учусь в ' + student.studyPlace + '.');
	student.seriesTV();
	
	console.log('-------------------');

	
		
	
	var man2 = new Human ('Дима', 18);
	student.__proto__ = man2;
	
	console.log('Мое имя - ' + student.name + '. \n/уже задано/.');
	console.log('Мой возраст - ' + student.age + ' лет.');
	console.log('Я учусь в ' + student.studyPlace + '.');
	student.seriesTV();
	
	console.log('-------------------');
	
	
	var man3 = new Human ('Игорь', 20);
	var student2 = new Student('ХНМУ', 'Доктор Хаус')
	
	student2.__proto__ = man3;
	
	console.log('Мое имя - ' + student2.name + '.');
	console.log('Мой возраст - ' + student2.age + ' лет.');
	console.log('Я учусь в ' + student2.studyPlace + '.');
	student2.seriesTV();
	
	console.log('-------------------');
	
	
});