import React from 'react';
import { CSS_PREFIX } from '../constants';
import Tag from './Tag';

interface TagListProps {
    tags: string[]
}

const TagList = ({ tags }: TagListProps): JSX.Element =>
    <ul className={`${CSS_PREFIX}tag-list`}>
        { tags.map(tag => <Tag key={tag}>{tag}</Tag>) }
    </ul>

export default TagList;
