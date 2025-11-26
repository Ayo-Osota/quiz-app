import type { IModule } from "./interface";
import info_week9 from "./questions/info_week9.json";
import info_week10 from "./questions/info_week10.json";
import info_week11 from "./questions/info_week11.json";
import info_week12 from "./questions/info_week12.json";
import info_week13 from "./questions/info_week13.json";
import info_week14 from "./questions/info_week14.json";
import database_week9 from "./questions/database_week9.json";
import database_week11 from "./questions/database_week11.json";
import database_week12 from "./questions/database_week12.json";

export const modules: IModule[] = [
  { id: "database_week9", title: "Database Wk 9", data: database_week9 },
  { id: "database_week11", title: "Database Wk 11", data: database_week11 },
  { id: "database_week12", title: "Database Wk 12", data: database_week12 },
  { id: "info_week9", title: "INFO 1380 Wk 9", data: info_week9 },
  { id: "info_week10", title: "INFO 1380 Wk 10", data: info_week10 },
  { id: "info_week11", title: "INFO 1380 Wk 11", data: info_week11 },
  { id: "info_week12", title: "INFO 1380 Wk 12", data: info_week12 },
  { id: "info_week13", title: "INFO 1380 Wk 13", data: info_week13 },
  { id: "info_week14", title: "INFO 1380 Wk 14", data: info_week14 },
];
