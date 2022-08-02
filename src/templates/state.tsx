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

export const getPath: GetPath<TemplateProps> = (data) => {
    return data.document.slug;
};

const StateDirectory: Template<TemplateRenderProps> = (data) => {
    const { name, dm_directoryChildren, dm_directoryChildrenCount } = data.document;


    return (
        <PageLayout>
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

export default StateDirectory;