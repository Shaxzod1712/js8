// const  user  =  [
//     {
//      имя : 'Эшмат' ,
//      год : 2011 ,
//      id : 1 ,
//      статус : 'студент' ,
//      ключ : 'тест' ,
//    } ,
   
//    {
//      имя : 'Эшмат акаси' ,
//      год : 2012 ,
//      id : 2 ,
//      статус : 'программист' ,
//      ключ : 'тест' ,
//    } ,
   
//    {
//      название : 'Тошмат' ,
//      год : 2010 ,
//      id : 3 ,
//      статус : 'студент' ,
//      ключ : "тест" ,
//    }
//    ]
   
   // << Удаление объекта с текущим id >>>
   
   
   // const onDelete = id => user.filter (value => value.id! == id);
   // console.log (onDelete (2));
   
   
   // <<< сортировка по году >>>
   
   // const userSort = user.sort (function (a, b) {
   // if (a.year> b.year) {
   // возвращаем 1
   // } еще {
   // возвращаем -1
   //}
   //})
   
   // console.log (userSort);
   
   
   // <<< сортировка по имени >>>
   
   // const sortName = user.filter (function (value) {
   // if (value.name === 'Eshmat') {
   // возвращаемое значение;
   //}
   //})
   
   // console.log (sortName);
   
   
   // <<< фильтрация по статусу >>
   
   // const filterStatus = user.filter (value => value.status === 'student');
   
   // console.log (filterStatus);
   
   
   // <<< Вызов по ключу и имени >>> ФИЛЬТР РАСШИРЕННЫЙ
   
   // const filterAdvanced = (ключ, значение) => {
   // const res = [];
   // user.map (val => {
   // если (val [ключ] .includes (значение)) {
   // for (const kalit in val) {
   // if (kalit === key) {
   // res.push (val)
   //}
   //}
   //}
   //})
   // возвращаем res;
   //};
   
   // console.log (filterAdvanced ('name', «Эшмат»));
   
   
   
   
   
   // // Свойства животных и инкапсуляция метода
   // var Animal = {
   // тип: 'Беспозвоночные', // Значение свойств по умолчанию
   // displayType: function () {// Метод, который будет отображать тип Animal
   // console.log (this.type);
   //}
   //};
   
   // // Создаем новый тип животных под названием animal1
   // var animal1 = Object.create (Animal);
   // animal1.displayType (); // Вывод: беспозвоночные
   
   // // Создаем новый тип животных под названием Рыбы
   // var fish = Object.create (Animal);
   // fish.type = 'Рыбы';
   // fish.displayType (); // Вывод: Рыбы