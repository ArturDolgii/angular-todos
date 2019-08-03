export interface ITodo {
    id: number;
    completed: boolean;
    text: string;
    hidden: boolean;
}

export type TodosFilterType = "ALL" | "ACTIVE" | "COMPLETED";
