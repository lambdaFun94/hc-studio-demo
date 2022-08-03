import * as React from "react";
import "../../styles/Directory.css";

export const directoryListFields = [
    "dm_directoryParents.slug",
    "dm_directoryParents.name",
    "dm_directoryChildrenCount",
    "dm_directoryChildren.slug",
    "dm_directoryChildren.name",
    "dm_directoryChildren.dm_directoryChildrenCount",
]

interface DirectoryListProps {
    name: string;
    count: number;
    showNumLocs: boolean;
    directoryChildren: DirectoryChild[]
    relativePrefixToRoot: string;
}

export interface DirectoryChild {
    slug: string;
    name: string,
    dm_directoryChildren: number[]
}

const sortByName = (x: DirectoryChild, y: DirectoryChild) => {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
}

export function DirectoryList(props: DirectoryListProps) {
    const { name, count, showNumLocs, directoryChildren, relativePrefixToRoot } = props;
    const sortedChildren = directoryChildren != undefined ? directoryChildren.sort(sortByName) : undefined;

    return (
        <div className="container my-8">
            <h1 className="mb-6">
                {count} locations in {name}
            </h1>
            <ul>
                {sortedChildren != undefined ? sortedChildren.map((child: any, idx: number) => (
                    <li className="Directory-listItem" key={idx}>
                        <a
                            className="Directory-listLink m-6"
                            href={relativePrefixToRoot + child.slug}
                        >
                            {child.name} {showNumLocs ? `(${child.dm_directoryChildrenCount})` : ''}
                        </a>
                    </li>
                )) : ''}
            </ul>
        </div>
    )
}