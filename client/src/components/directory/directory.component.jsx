import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import DirectoryMenuContainer from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
