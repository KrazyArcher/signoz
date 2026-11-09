import { useCallback } from 'react';
import { Combobox, type ComboboxItemType } from '@signozhq/ui/combobox';
import { RuletypesAlertStateDTO } from 'api/generated/services/sigNoz.schemas';

import styles from './RuleStatesFilter.module.scss';

const STATE_ITEMS: ComboboxItemType[] = [
	{ type: 'item', value: RuletypesAlertStateDTO.firing, label: 'Firing' },
	{ type: 'item', value: RuletypesAlertStateDTO.pending, label: 'Pending' },
	{
		type: 'item',
		value: RuletypesAlertStateDTO.recovering,
		label: 'Recovering',
	},
	{ type: 'item', value: RuletypesAlertStateDTO.inactive, label: 'OK' },
	{ type: 'item', value: RuletypesAlertStateDTO.nodata, label: 'No data' },
	{ type: 'item', value: RuletypesAlertStateDTO.disabled, label: 'Disabled' },
];

interface RuleStatesFilterProps {
	states: string[];
	onChange: (states: string[]) => void;
}

function RuleStatesFilter({
	states,
	onChange,
}: RuleStatesFilterProps): JSX.Element {
	const handleChange = useCallback(
		(values: unknown): void => {
			if (Array.isArray(values)) {
				onChange(values as string[]);
			}
		},
		[onChange],
	);

	return (
		<div className={styles.statesSelect}>
			<Combobox
				multiple
				value={states}
				onChange={handleChange}
				placeholder="Filter by state"
				searchInputProps={{ placeholder: 'Select one or more' }}
				items={STATE_ITEMS}
				maxDisplayedPills={2}
				testId="alert-rules-filter-states"
			/>
		</div>
	);
}

export default RuleStatesFilter;
