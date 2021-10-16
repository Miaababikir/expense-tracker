const AppReducer = require("./AppReducer")
// @ponicode
describe("AppReducer.default", () => {
    test("0", () => {
        let callFunction = () => {
            AppReducer.default({ transactions: ["deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668", "invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125"] }, { payload: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            AppReducer.default({ transactions: ["withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447"] }, { payload: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            AppReducer.default({ transactions: ["payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447"] }, { payload: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            AppReducer.default({ transactions: ["payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125", "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125"] }, { payload: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            AppReducer.default({ transactions: ["invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018", "withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372"] }, { payload: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            AppReducer.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
