import { FC, useState } from 'react';
import Picker from 'react-mobile-picker';
import { AgePickerProps } from './AgePicker.interface';

const AgePicker: FC<AgePickerProps> = ({ onChange, height }) => {
  const [pickerValue, setPickerValue] = useState({
    age: 18,
  });

  const ages = Array.from({ length: 80 }, (_, i) => i + 1);

  const handleChange = (obj: typeof pickerValue) => {
    onChange(obj.age);
    setPickerValue(obj);
  };

  return (
    <Picker
      value={pickerValue}
      onChange={handleChange}
      wheelMode='natural'
      itemHeight={80}
      height={height}
      className='mt-5 [&_div:last-child>div]:!bg-[#FF7387] [&_div:last-child>div]:!h-[3px] w-[140px]'
    >
      <Picker.Column key={'age'} name={'age'}>
        {ages.map((item) => (
          <Picker.Item key={item} value={item}>
            {({ selected }) => (
              <span
                className={`transition-all leading-none ${
                  selected
                    ? 'font-bold text-[#FF5069] text-[64px]'
                    : 'text-black text-[48px]'
                }`}
              >
                {item}
              </span>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};
export default AgePicker;
