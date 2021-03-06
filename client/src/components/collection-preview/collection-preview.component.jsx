import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewContainer>
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default CollectionPreview;
