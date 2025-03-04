export type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

export type Grade = 1 | "A" | 2 | "B" | 3 | "C" | 4 | "D" | 5 | "E" | 6 | "F" | undefined

export function printStudent (student: Student): void {
    console.log()
    let firstLine: string = student.firstName + " " + student.lastName + " (" + student.age + ")"
    console.log(firstLine)
    let highlightLine: string = ""
    for (let i = 0; i < firstLine.length; i++) {
        highlightLine += "="
    }
    console.log(highlightLine)
    let gradesString: string = ""
    for(let i= 0; i < student.grades.length - 1; i++) {
        if (student.grades[i] !== undefined && student.grades[i] !== null) {
            gradesString += student.grades[i] + ","
        }
        else {
            gradesString += "*,"
        }
    }
    if (student.grades[student.grades.length - 1] !== undefined && student.grades[student.grades.length - 1] !== null)
        gradesString += student.grades[student.grades.length - 1]
    else
        gradesString += "*"
    console.log("Grades: "+ gradesString)
}

export function  printStudents (students: Student[]): void {
    for (let i = 0; i < students.length; i++) {
        printStudent(students[i])
    }
}