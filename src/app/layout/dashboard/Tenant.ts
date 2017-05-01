/**
 * Created by ciprianosanchez on 4/5/17.
 */
export interface Tenant {
    _id: any;
    tenantName: string;
    adminEmail: string;
    adminPassword: string;
    applications: Array<Object>;
}
