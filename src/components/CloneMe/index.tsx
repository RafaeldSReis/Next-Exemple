import * as C from './styles';

export type cloneMeProps = {
  title?: string;
};

export function CloneMe({ title = 'Change-me' }: cloneMeProps) {
  return (
    <C.Container>
      <h1>Project Start</h1>
    </C.Container>
  );
}
