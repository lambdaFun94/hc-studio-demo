export interface ProsDoctorsStream234 {
	slug: string,
}

export interface CityDirectory {
	id: string,
	uid: string,
	meta: any,
	name: string,
	slug: string,
	c_addressRegionDisplayName: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface C_doctorsPracticingHere {
	id?: string,
	name?: string,
	slug?: string,
}

export interface LocationPage {
	name: string,
	meta: any,
	id: string,
	uid: string,
	address: Address,
	mainPhone: any,
	slug: string,
	geocodedCoordinate: Coordinate,
	c_doctorsPracticingHere: C_doctorsPracticingHere[],
}

export interface C_relatedProcedures2 {
	id?: string,
	name?: string,
	slug?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface C_providersWithSpecialty {
	id?: string,
	name?: string,
	slug?: string,
	headshot?: Image,
	c_specialty?: any,
}

export interface Taxonomy_relatedConditions {
	id?: string,
	name?: string,
	slug?: string,
}

export interface Taxonomy_subspecialties {
	id?: string,
	name?: string,
	slug?: string,
}

export interface Taxonomy_relatedReasonsForVisit {
	id?: string,
	name?: string,
	slug?: string,
}

export interface SpecialtyFad234 {
	name: string,
	meta: any,
	id: string,
	uid: string,
	slug: string,
	taxonomy_synonyms: string[],
	c_relatedProcedures2: C_relatedProcedures2[],
	c_providersWithSpecialty: C_providersWithSpecialty[],
	taxonomy_relatedConditions: Taxonomy_relatedConditions[],
	taxonomy_subspecialties: Taxonomy_subspecialties[],
	taxonomy_relatedReasonsForVisit: Taxonomy_relatedReasonsForVisit[],
}

export interface StateDirectory {
	id: string,
	uid: string,
	meta: any,
	name: string,
	slug: string,
	c_addressRegionDisplayName: string,
}

export interface ConditionsFad234 {
	name: string,
	description: string,
	slug: string,
}

export interface DirectoryRoot {
	id: string,
	uid: string,
	meta: any,
	name: string,
	slug: string,
	c_addressRegionDisplayName: string,
	c_addressCountry: string,
}

export interface C_relatedSpecialties2 {
	id?: string,
	slug?: string,
	name?: string,
}

export interface ProceduresFad234 {
	name: string,
	meta: any,
	id: string,
	uid: string,
	slug: string,
	taxonomy_synonyms: string[],
	description: string,
	c_relatedSpecialties2: C_relatedSpecialties2[],
}

export interface Taxonomy_relatedSpecialties {
	id?: string,
	slug?: string,
	name?: string,
}

export interface VisitReasonFad234 {
	name: string,
	meta: any,
	id: string,
	uid: string,
	slug: string,
	taxonomy_synonyms: string[],
	taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties[],
}

export interface SiteEntity {
	name: string,
}
