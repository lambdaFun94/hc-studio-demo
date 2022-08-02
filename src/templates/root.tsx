import * as React from "react";
import {
    Template,
    TemplateProps,
    TemplateRenderProps,
    GetPath,
    TemplateConfig,
} from "@yext/pages";
import { DirectoryList, directoryListFields } from "../components/Directory/DirectoryList"
import PageLayout from "../components/PageLayout";

export const config: TemplateConfig = {
    stream: {
        $id: "directory-root",
        fields: [
            "id",
            "uid",
            "meta",
            "name",
            "slug",
            ...directoryListFields
        ],
        // Defines the scope of entities that qualify for this stream.
        filter: {
            entityTypes: ["ce_root"],
        },
        // The entity language profiles that documents will be generated for.
        localization: {
            locales: ["en"],
            primary: false,
        },
    },
};

export const getPath: GetPath<TemplateProps> = (data) => {
    return data.document.slug;
};

const Root: Template<TemplateRenderProps> = (data) => {
    const { name, dm_directoryChildren, dm_directoryChildrenCount } = data.document;


    return (
        <PageLayout
            title="Facilities in the US"
            breadcrumbs={[{ label: "All Facilities", href: "/" }]}>
            <div>
                <DirectoryList
                    name={name}
                    showNumLocs={true}
                    count={dm_directoryChildrenCount}
                    directoryChildren={dm_directoryChildren}
                    relativePrefixToRoot={data.relativePrefixToRoot}
                />
            </div>
        </PageLayout>
    );
};

export default Root;