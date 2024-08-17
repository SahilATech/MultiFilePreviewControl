/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    Single: ComponentFramework.PropertyTypes.StringProperty;
    recordId: ComponentFramework.PropertyTypes.StringProperty;
    childEntityName: ComponentFramework.PropertyTypes.StringProperty;
    childEntitypluralName: ComponentFramework.PropertyTypes.StringProperty;
    Primaryfield: ComponentFramework.PropertyTypes.StringProperty;
    FilefieldName: ComponentFramework.PropertyTypes.StringProperty;
    LookupFieldName: ComponentFramework.PropertyTypes.StringProperty;
    Count: ComponentFramework.PropertyTypes.WholeNumberProperty;
    Filter: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    Single?: string;
}
