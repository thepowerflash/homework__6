import React from "react";
import { Tab, Tabs } from "@mui/material";

function TabsComponent({ categoriesSelect, value, setValue, valueKey = 'value', labelKey = 'label' }) {
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className="categoriesList">
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {categoriesSelect.map((tab) => 
                    <Tab
                        className="categoriesTitle"
                        key={tab[valueKey]}
                        value={tab[valueKey]}
                        label={tab[labelKey]}>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}

export default TabsComponent