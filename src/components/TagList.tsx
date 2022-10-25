import React from 'react';
import { CSS_PREFIX } from '../constants';
import TagView from './Tag';

interface TagListProps {
    tags: string[]
}

const TagListView = ({ tags }: TagListProps): JSX.Element =>
    <ul className={`${CSS_PREFIX}taglist`}>
        {tags.map(tag => <TagView key={tag}>{tag}</TagView>)}
    </ul>

export default TagListView;
