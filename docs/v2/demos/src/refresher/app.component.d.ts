import { Refresher } from 'ionic-angular';
export declare class MockProvider {
    getData(): any[];
    getAsyncData(): Promise<any[]>;
    private _getRandomData();
    private _data;
}
export declare class ApiDemoPage {
    private mockProvider;
    items: string[];
    constructor(mockProvider: MockProvider);
    doRefresh(refresher: Refresher): void;
    doPulling(refresher: Refresher): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
