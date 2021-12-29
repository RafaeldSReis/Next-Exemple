import { Meta, Story } from '@storybook/react/types-6-0';
import { CloneMe, cloneMeProps } from '.';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: Story<cloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
