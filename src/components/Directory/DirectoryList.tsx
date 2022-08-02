import * as React from "react";
import "../../styles/Directory.css";

export const directoryListFields = [
    "dm_directoryParents",
    "dm_directoryChildrenCount",
    "dm_directoryChildren.slug",
    "dm_directoryChildren.name",
    "dm_directoryChildren.dm_directoryChildrenCount",
]

interface DirectoryListProps {
    name: string;
    count: number;
    showNumLocs: boolean;
    directoryChildren: { slug: string; name: string, dm_directoryChildren: number[] }[];
    relativePrefixToRoot: string;
}

export function DirectoryList(props: DirectoryListProps) {
    const { name, count, showNumLocs, directoryChildren, relativePrefixToRoot } = props;
    return (
        <div className="container my-8">
            <h1 className="mb-6">
                {count} locations in {name}
            </h1>
            <ul className="flex flex-wrap">
                {directoryChildren.map((child: any, idx: number) => (
                    <li className="Directory-listItem" key={idx}>
                        <a
                            className="Directory-listLink m-6"
                            href={relativePrefixToRoot + child.slug}
                            data-count={showNumLocs ? child.dm_directoryChildrenCount : ''}
                        >
                            {child.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}