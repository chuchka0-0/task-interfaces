export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

/*
Найдите и исправьте ошибку в данных, возвращаемых функцией getPerson.
Ошибка: поле age должно быть числом (number), а передавалась строка '7'.
Исправление: заменено '7' на 7.
 */
export function getPerson(): IPersonData {
    return {
        name: 'Petr',
        secondName: 'Smith',
        age: 7, // было '7' (строка), стало 7 (число) — соответствует типу number в интерфейсе
    };
}

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

/*
Допишите функцию `getStudentsData` так, чтобы она возвращала массив из указанных в комментарии данных.
Данные должны храниться в объектах, соответствующих интерфейсу `IStudentData`.
 */
export function getStudentsData(): IStudentData[] {
    /**
     * Данные студентов которые нужно передать:
     *
     * 1. Ivan Petrov 20 лет +7(555)555-55-50
     * 2. Stepan Petrov 19 лет +7(555)555-55-51
     * 3. Petr Ivanov 19 лет
     *
     */
    return [
        {
            name: 'Ivan',
            secondName: 'Petrov',
            age: 20,
            phone: '+7(555)555-55-50',
        },
        {
            name: 'Stepan',
            secondName: 'Petrov',
            age: 19,
            phone: '+7(555)555-55-51',
        },
        {
            name: 'Petr',
            secondName: 'Ivanov',
            age: 19,
            // phone не указан — допустимо, т.к. поле опциональное (phone?: string)
        },
    ];
}
