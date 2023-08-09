import React from 'react';
import { DefaultButton, Panel } from '@fluentui/react';
import './Styles-UnitDetailsPanel.css';
import UnitCard from './UnitCard';

interface UnitDetailsPanelProps {
    unit: Unit;
    isOpen: boolean;
    onClose: () => void;
    onAddUnit?: (unit: Unit) => void;
}

const UnitDetailsPanel: React.FC<UnitDetailsPanelProps> = ({ unit, isOpen, onClose, onAddUnit }) => {

    if (!unit) {
        return null;
    }

    const handleAddUnit = () => {
        if (onAddUnit) {
            onAddUnit(unit);
        }
        onClose();
    };

    return (
        <Panel
            isOpen={isOpen}
            onDismiss={onClose}
            headerText={unit.Name}
            closeButtonAriaLabel="Close"
        >
            <UnitCard unit={unit}></UnitCard>
            {onAddUnit && (
                <DefaultButton
                    text="Add Unit"
                    onClick={handleAddUnit}
                />
            )}
        </Panel>
    );
};

export default UnitDetailsPanel;
