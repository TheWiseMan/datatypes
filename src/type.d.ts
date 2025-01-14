type Datatype<T extends object> = {
    type: string;
    id: string;
    version: number,
    typeversion: number,
    data: T
};

type DataLoader<T> = (id: string, type?: string) => Datatype<T>;

interface DataHandler<T> {
    static generateRandom: () => Datatype<T>;
}

type DataLibrary = { [type: string]: DataHandler };