interface ILangState {
    entrie: string;
}

interface ILayoutState {
    sidebar: boolean;
}

export default interface IRootState {
    lang: ILangState;
    layout: ILayoutState;
}
