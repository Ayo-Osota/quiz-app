import type { IModule } from "./interface";
import info_week9 from "./questions/info_week9.json";
import info_week10 from "./questions/info_week10.json";
import info_week11 from "./questions/info_week11.json";
import info_week12 from "./questions/info_week12.json";
import info_week13 from "./questions/info_week13.json";
import info_week14 from "./questions/info_week14.json";
import database_week2 from "./questions/database_week2.json";
import database_week3 from "./questions/database_week3.json";
import database_week4 from "./questions/database_week4.json";
import database_week5 from "./questions/database_week5.json";
import database_week9 from "./questions/database_week9.json";
import database_week11 from "./questions/database_week11.json";
import database_week12 from "./questions/database_week12.json";
import database_week13 from "./questions/database_week13.json";
import database_exam_review from "./questions/database_exam_review.json";
import prog1926_week1 from "./questions/prog1926_week1.json";
import prog1926_week2 from "./questions/prog1926_week2.json";
import prog1926_week3 from "./questions/prog1926_week3.json";
import prog1926_week4 from "./questions/prog1926_week4.json";
import prog1926_week5 from "./questions/prog1926_week5.json";
import prog1926_week7 from "./questions/prog1926_week7.json";
import prog1926_week9 from "./questions/prog1926_week9.json";
import prog1926_week10 from "./questions/prog1926_week10.json";
import prog1926_week11 from "./questions/prog1926_week11.json";
import prog1926_week12 from "./questions/prog1926_week12.json";
import prog1926_week13 from "./questions/prog1926_week13.json";
import prog1926_exam_review from "./questions/prog1926_exam_review.json";
import prog2511_a04_quiz from "./questions/prog2511_a04_quiz.json";
import dataStructuresWeek1 from "./questions/data-structures/week1-introduction-to-data-structures.json";
import dataStructuresWeek2 from "./questions/data-structures/week2-algorithm-efficiency-and-big-o.json";
import dataStructuresWeek3 from "./questions/data-structures/week3-simple-linked-lists.json";
import dataStructuresWeek4 from "./questions/data-structures/week4-advanced-linked-lists.json";
import dataStructuresWeek5 from "./questions/data-structures/week5-stacks-and-queues.json";
import dataStructuresWeek6 from "./questions/data-structures/week6-circular-data-structures.json";
import os_week1 from "./questions/os_week1.json";
import os_week2 from "./questions/os_week2.json";
import os_week3 from "./questions/os_week3.json";
import os_week4 from "./questions/os_week4.json";
import os_week5 from "./questions/os_week5.json";

export const modules: IModule[] = [
  { id: "database_week2", title: "Database Wk 2", data: database_week2 },
  { id: "database_week3", title: "Database Wk 3", data: database_week3 },
  { id: "database_week4", title: "Database Wk 4", data: database_week4 },
  { id: "database_week5", title: "Database Wk 5", data: database_week5 },
  { id: "database_week9", title: "Database Wk 9", data: database_week9 },
  { id: "database_week11", title: "Database Wk 11", data: database_week11 },
  { id: "database_week12", title: "Database Wk 12", data: database_week12 },
  { id: "database_week13", title: "Database Wk 13", data: database_week13 },
  { id: "database_exam_review", title: "Database Exam Review", data: database_exam_review },
  { id: "info_week9", title: "INFO 1380 Wk 9", data: info_week9 },
  { id: "info_week10", title: "INFO 1380 Wk 10", data: info_week10 },
  { id: "info_week11", title: "INFO 1380 Wk 11", data: info_week11 },
  { id: "info_week12", title: "INFO 1380 Wk 12", data: info_week12 },
  { id: "info_week13", title: "INFO 1380 Wk 13", data: info_week13 },
  { id: "info_week14", title: "INFO 1380 Wk 14", data: info_week14 },
  { id: "prog1926_week1", title: "PROG1926 Wk 1", data: prog1926_week1 },
  { id: "prog1926_week2", title: "PROG1926 Wk 2", data: prog1926_week2 },
  { id: "prog1926_week3", title: "PROG1926 Wk 3", data: prog1926_week3 },
  { id: "prog1926_week4", title: "PROG1926 Wk 4", data: prog1926_week4 },
  { id: "prog1926_week5", title: "PROG1926 Wk 5", data: prog1926_week5 },
  { id: "prog1926_week7", title: "PROG1926 Wk 7", data: prog1926_week7 },
  { id: "prog1926_week9", title: "PROG1926 Wk 9", data: prog1926_week9 },
  { id: "prog1926_week10", title: "PROG1926 Wk 10", data: prog1926_week10 },
  { id: "prog1926_week11", title: "PROG1926 Wk 11", data: prog1926_week11 },
  { id: "prog1926_week12", title: "PROG1926 Wk 12", data: prog1926_week12 },
  { id: "prog1926_week13", title: "PROG1926 Wk 13", data: prog1926_week13 },
  { id: "prog1926_exam_review", title: "PROG1926 Exam Review", data: prog1926_exam_review },
  { id: "prog2511_a04_quiz", title: "Object Oriented Programming", data: prog2511_a04_quiz },
  { id: "data_structures_week1", title: "Data Structures Wk 1: Introduction", data: dataStructuresWeek1 },
  { id: "data_structures_week2", title: "Data Structures Wk 2: Algorithm Efficiency and Big O", data: dataStructuresWeek2 },
  { id: "data_structures_week3", title: "Data Structures Wk 3: Simple Linked Lists", data: dataStructuresWeek3 },
  { id: "data_structures_week4", title: "Data Structures Wk 4: Advanced Linked Lists", data: dataStructuresWeek4 },
  { id: "data_structures_week5", title: "Data Structures Wk 5: Stacks and Queues", data: dataStructuresWeek5 },
  { id: "data_structures_week6", title: "Data Structures Wk 6: Circular Data Structures", data: dataStructuresWeek6 },
  { id: "os_week1", title: "OS (PROG 2635) Wk 1", data: os_week1 },
  { id: "os_week2", title: "OS (PROG 2635) Wk 2", data: os_week2 },
  { id: "os_week3", title: "OS (PROG 2635) Wk 3", data: os_week3 },
  { id: "os_week4", title: "OS (PROG 2635) Wk 4", data: os_week4 },
  { id: "os_week5", title: "OS (PROG 2635) Wk 5", data: os_week5 },
];
