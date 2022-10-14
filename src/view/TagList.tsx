import React from 'react';
import { CSS_PREFIX } from '../constants';
import TagView from './Tag';

interface TagListProps {
    tags: {
        text: string,
        cls?: string,
    }[]
}

const TagListView = ({ tags }: TagListProps): JSX.Element =>
    <ul className={`${CSS_PREFIX}taglist`}>
        {tags.map(tag =>
            <TagView key={tag.text} additionalCls={`${CSS_PREFIX}${tag.cls}`}>
                {tag.text}
            </TagView>
        )}
    </ul>

export default TagListView;
