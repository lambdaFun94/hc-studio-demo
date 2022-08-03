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
import { buildBreadCrumbs } from "../utilities";

export const config: TemplateConfig = {
    stream: {
        $id: "state-directory",
        fields: [
            "id",
            "uid",
            "meta",
            "name",
            "slug",
            ...directoryListFields
        ],
        filter: {
            entityTypes: ["ce_state"],
        },
        localization: {
            locales: ["en"],
            primary: false,
        },
    },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug;
};

const StateDirectory: Template<TemplateRenderProps> = ({ document, relativePrefixToRoot }) => {
    const { name, dm_directoryChildren, dm_directoryChildrenCount, dm_directoryParents } = document;

    return (
        <PageLayout
            title={`Health Care Facilities in ${name}`}
            breadcrumbs={
                [
                    { label: "All Locations", href: "/locations" },
                    ...buildBreadCrumbs(dm_directoryParents, relativePrefixToRoot)
                ]}>
            <div>
                <DirectoryList
                    name={name}
                    showNumLocs={true}
                    count={dm_directoryChildrenCount}
                    directoryChildren={dm_directoryChildren}
                    relativePrefixToRoot={relativePrefixToRoot}
                />
            </div>
        </PageLayout>
    );
};

export default StateDirectory;