export type RootStackParamList = {
    TabScreen: undefined
    Home: undefined
    Activities: {activityNumber: number},
    Circuits: undefined,
    CircuitDetails: {circuitNumber: number},
    Contact: undefined,
}

export type CircuitsJsonTypes = {
    mainImage: string
    name: string
    shortName: string
    introText: string
    image:Array<string>
}
