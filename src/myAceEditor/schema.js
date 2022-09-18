export const schema = {
    "schema": [
        {
            "name": "hr.d",
            "columns": [
                {
                    "name": "departmentid",
                    "type": "integer"
                },
                {
                    "name": "groupname",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "hr.e",
            "columns": [
                {
                    "name": "birthdate",
                    "type": "date"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "currentflag",
                    "type": "boolean"
                },
                {
                    "name": "gender",
                    "type": "character"
                },
                {
                    "name": "hiredate",
                    "type": "date"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "loginid",
                    "type": "character varying"
                },
                {
                    "name": "maritalstatus",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "nationalidnumber",
                    "type": "character varying"
                },
                {
                    "name": "organizationnode",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salariedflag",
                    "type": "boolean"
                },
                {
                    "name": "sickleavehours",
                    "type": "smallint"
                },
                {
                    "name": "vacationhours",
                    "type": "smallint"
                }
            ]
        },
        {
            "name": "hr.edh",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "departmentid",
                    "type": "smallint"
                },
                {
                    "name": "enddate",
                    "type": "date"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shiftid",
                    "type": "smallint"
                },
                {
                    "name": "startdate",
                    "type": "date"
                }
            ]
        },
        {
            "name": "hr.eph",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "payfrequency",
                    "type": "smallint"
                },
                {
                    "name": "rate",
                    "type": "numeric"
                },
                {
                    "name": "ratechangedate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "hr.jc",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "jobcandidateid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "resume",
                    "type": "xml"
                }
            ]
        },
        {
            "name": "hr.s",
            "columns": [
                {
                    "name": "endtime",
                    "type": "time without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "shiftid",
                    "type": "integer"
                },
                {
                    "name": "starttime",
                    "type": "time without time zone"
                }
            ]
        },
        {
            "name": "humanresources.department",
            "columns": [
                {
                    "name": "departmentid",
                    "type": "integer"
                },
                {
                    "name": "groupname",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "humanresources.employee",
            "columns": [
                {
                    "name": "birthdate",
                    "type": "date"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "currentflag",
                    "type": "boolean"
                },
                {
                    "name": "gender",
                    "type": "character"
                },
                {
                    "name": "hiredate",
                    "type": "date"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "loginid",
                    "type": "character varying"
                },
                {
                    "name": "maritalstatus",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "nationalidnumber",
                    "type": "character varying"
                },
                {
                    "name": "organizationnode",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salariedflag",
                    "type": "boolean"
                },
                {
                    "name": "sickleavehours",
                    "type": "smallint"
                },
                {
                    "name": "vacationhours",
                    "type": "smallint"
                }
            ]
        },
        {
            "name": "humanresources.employeedepartmenthistory",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "departmentid",
                    "type": "smallint"
                },
                {
                    "name": "enddate",
                    "type": "date"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shiftid",
                    "type": "smallint"
                },
                {
                    "name": "startdate",
                    "type": "date"
                }
            ]
        },
        {
            "name": "humanresources.employeepayhistory",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "payfrequency",
                    "type": "smallint"
                },
                {
                    "name": "rate",
                    "type": "numeric"
                },
                {
                    "name": "ratechangedate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "humanresources.jobcandidate",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "jobcandidateid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "resume",
                    "type": "xml"
                }
            ]
        },
        {
            "name": "humanresources.shift",
            "columns": [
                {
                    "name": "endtime",
                    "type": "time without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "shiftid",
                    "type": "integer"
                },
                {
                    "name": "starttime",
                    "type": "time without time zone"
                }
            ]
        },
        {
            "name": "humanresources.vemployee",
            "columns": [
                {
                    "name": "additionalcontactinfo",
                    "type": "xml"
                },
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "countryregionname",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertype",
                    "type": "character varying"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "stateprovincename",
                    "type": "character varying"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "humanresources.vemployeedepartment",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "department",
                    "type": "character varying"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "groupname",
                    "type": "character varying"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "startdate",
                    "type": "date"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "humanresources.vemployeedepartmenthistory",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "department",
                    "type": "character varying"
                },
                {
                    "name": "enddate",
                    "type": "date"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "groupname",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "shift",
                    "type": "character varying"
                },
                {
                    "name": "startdate",
                    "type": "date"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "humanresources.vjobcandidate",
            "columns": [
                {
                    "name": "Addr.Loc.City",
                    "type": "character varying"
                },
                {
                    "name": "Addr.Loc.CountryRegion",
                    "type": "character varying"
                },
                {
                    "name": "Addr.Loc.State",
                    "type": "character varying"
                },
                {
                    "name": "Addr.PostalCode",
                    "type": "character varying"
                },
                {
                    "name": "Addr.Type",
                    "type": "character varying"
                },
                {
                    "name": "EMail",
                    "type": "character varying"
                },
                {
                    "name": "Name.First",
                    "type": "character varying"
                },
                {
                    "name": "Name.Last",
                    "type": "character varying"
                },
                {
                    "name": "Name.Middle",
                    "type": "character varying"
                },
                {
                    "name": "Name.Prefix",
                    "type": "character varying"
                },
                {
                    "name": "Name.Suffix",
                    "type": "character varying"
                },
                {
                    "name": "Skills",
                    "type": "character varying"
                },
                {
                    "name": "WebSite",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "jobcandidateid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "humanresources.vjobcandidateeducation",
            "columns": [
                {
                    "name": "Edu.Degree",
                    "type": "character varying"
                },
                {
                    "name": "Edu.EndDate",
                    "type": "date"
                },
                {
                    "name": "Edu.GPA",
                    "type": "character varying"
                },
                {
                    "name": "Edu.GPAScale",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Level",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Loc.City",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Loc.CountryRegion",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Loc.State",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Major",
                    "type": "character varying"
                },
                {
                    "name": "Edu.Minor",
                    "type": "character varying"
                },
                {
                    "name": "Edu.School",
                    "type": "character varying"
                },
                {
                    "name": "Edu.StartDate",
                    "type": "date"
                },
                {
                    "name": "jobcandidateid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "humanresources.vjobcandidateemployment",
            "columns": [
                {
                    "name": "Emp.EndDate",
                    "type": "date"
                },
                {
                    "name": "Emp.FunctionCategory",
                    "type": "character varying"
                },
                {
                    "name": "Emp.IndustryCategory",
                    "type": "character varying"
                },
                {
                    "name": "Emp.JobTitle",
                    "type": "character varying"
                },
                {
                    "name": "Emp.Loc.City",
                    "type": "character varying"
                },
                {
                    "name": "Emp.Loc.CountryRegion",
                    "type": "character varying"
                },
                {
                    "name": "Emp.Loc.State",
                    "type": "character varying"
                },
                {
                    "name": "Emp.OrgName",
                    "type": "character varying"
                },
                {
                    "name": "Emp.Responsibility",
                    "type": "character varying"
                },
                {
                    "name": "Emp.StartDate",
                    "type": "date"
                },
                {
                    "name": "jobcandidateid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pe.a",
            "columns": [
                {
                    "name": "addressid",
                    "type": "integer"
                },
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "spatiallocation",
                    "type": "character varying"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pe.at",
            "columns": [
                {
                    "name": "addresstypeid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.be",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.bea",
            "columns": [
                {
                    "name": "addressid",
                    "type": "integer"
                },
                {
                    "name": "addresstypeid",
                    "type": "integer"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.bec",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "contacttypeid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "personid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.cr",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pe.ct",
            "columns": [
                {
                    "name": "contacttypeid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pe.e",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailaddressid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.p",
            "columns": [
                {
                    "name": "additionalcontactinfo",
                    "type": "xml"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "demographics",
                    "type": "xml"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "namestyle",
                    "type": "boolean"
                },
                {
                    "name": "persontype",
                    "type": "character"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pe.pa",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "passwordhash",
                    "type": "character varying"
                },
                {
                    "name": "passwordsalt",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pe.pnt",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertypeid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pe.pp",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertypeid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pe.sp",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "isonlystateprovinceflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "stateprovincecode",
                    "type": "character"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "person.address",
            "columns": [
                {
                    "name": "addressid",
                    "type": "integer"
                },
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "spatiallocation",
                    "type": "character varying"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "person.addresstype",
            "columns": [
                {
                    "name": "addresstypeid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.businessentity",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.businessentityaddress",
            "columns": [
                {
                    "name": "addressid",
                    "type": "integer"
                },
                {
                    "name": "addresstypeid",
                    "type": "integer"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.businessentitycontact",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "contacttypeid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "personid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.contacttype",
            "columns": [
                {
                    "name": "contacttypeid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "person.countryregion",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "person.emailaddress",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailaddressid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.password",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "passwordhash",
                    "type": "character varying"
                },
                {
                    "name": "passwordsalt",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "person.person",
            "columns": [
                {
                    "name": "additionalcontactinfo",
                    "type": "xml"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "demographics",
                    "type": "xml"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "namestyle",
                    "type": "boolean"
                },
                {
                    "name": "persontype",
                    "type": "character"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "person.personphone",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertypeid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "person.phonenumbertype",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertypeid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "person.stateprovince",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "isonlystateprovinceflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "stateprovincecode",
                    "type": "character"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "person.vadditionalcontactinfo",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "xml"
                },
                {
                    "name": "countryregion",
                    "type": "xml"
                },
                {
                    "name": "emailaddress",
                    "type": "xml"
                },
                {
                    "name": "emailspecialinstructions",
                    "type": "text"
                },
                {
                    "name": "emailtelephonenumber",
                    "type": "xml"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "homeaddressspecialinstructions",
                    "type": "xml"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "postalcode",
                    "type": "xml"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "stateprovince",
                    "type": "xml"
                },
                {
                    "name": "street",
                    "type": "xml"
                },
                {
                    "name": "telephonenumber",
                    "type": "xml"
                },
                {
                    "name": "telephonespecialinstructions",
                    "type": "text"
                }
            ]
        },
        {
            "name": "person.vstateprovincecountryregion",
            "columns": [
                "countryregioncode",
                "countryregionname",
                "isonlystateprovinceflag",
                "stateprovincecode",
                "stateprovinceid",
                "stateprovincename",
                "territoryid"
            ]
        },
        {
            "name": "pr.bom",
            "columns": [
                {
                    "name": "billofmaterialsid",
                    "type": "integer"
                },
                {
                    "name": "bomlevel",
                    "type": "smallint"
                },
                {
                    "name": "componentid",
                    "type": "integer"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "perassemblyqty",
                    "type": "numeric"
                },
                {
                    "name": "productassemblyid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pr.c",
            "columns": [
                {
                    "name": "cultureid",
                    "type": "character"
                },
                {
                    "name": "id",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.d",
            "columns": [
                {
                    "name": "changenumber",
                    "type": "integer"
                },
                {
                    "name": "document",
                    "type": "bytea"
                },
                {
                    "name": "documentnode",
                    "type": "character varying"
                },
                {
                    "name": "documentsummary",
                    "type": "text"
                },
                {
                    "name": "fileextension",
                    "type": "character varying"
                },
                {
                    "name": "filename",
                    "type": "character varying"
                },
                {
                    "name": "folderflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "owner",
                    "type": "integer"
                },
                {
                    "name": "revision",
                    "type": "character"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.i",
            "columns": [
                {
                    "name": "diagram",
                    "type": "xml"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "illustrationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "pr.l",
            "columns": [
                {
                    "name": "availability",
                    "type": "numeric"
                },
                {
                    "name": "costrate",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "locationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.p",
            "columns": [
                {
                    "name": "class",
                    "type": "character"
                },
                {
                    "name": "color",
                    "type": "character varying"
                },
                {
                    "name": "daystomanufacture",
                    "type": "integer"
                },
                {
                    "name": "discontinueddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "finishedgoodsflag",
                    "type": "boolean"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "listprice",
                    "type": "numeric"
                },
                {
                    "name": "makeflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productline",
                    "type": "character"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "productnumber",
                    "type": "character varying"
                },
                {
                    "name": "productsubcategoryid",
                    "type": "integer"
                },
                {
                    "name": "reorderpoint",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "safetystocklevel",
                    "type": "smallint"
                },
                {
                    "name": "sellenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "sellstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "size",
                    "type": "character varying"
                },
                {
                    "name": "sizeunitmeasurecode",
                    "type": "character"
                },
                {
                    "name": "standardcost",
                    "type": "numeric"
                },
                {
                    "name": "style",
                    "type": "character"
                },
                {
                    "name": "weight",
                    "type": "numeric"
                },
                {
                    "name": "weightunitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pr.pc",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productcategoryid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pr.pch",
            "columns": [
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "standardcost",
                    "type": "numeric"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "pr.pd",
            "columns": [
                {
                    "name": "description",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productdescriptionid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pr.pdoc",
            "columns": [
                {
                    "name": "documentnode",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.pi",
            "columns": [
                {
                    "name": "bin",
                    "type": "smallint"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "locationid",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "shelf",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.plph",
            "columns": [
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "listprice",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "pr.pm",
            "columns": [
                {
                    "name": "catalogdescription",
                    "type": "xml"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "instructions",
                    "type": "xml"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pr.pmi",
            "columns": [
                {
                    "name": "illustrationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.pmpdc",
            "columns": [
                {
                    "name": "cultureid",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productdescriptionid",
                    "type": "integer"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.pp",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "largephoto",
                    "type": "bytea"
                },
                {
                    "name": "largephotofilename",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productphotoid",
                    "type": "integer"
                },
                {
                    "name": "thumbnailphoto",
                    "type": "bytea"
                },
                {
                    "name": "thumbnailphotofilename",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.ppp",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "primary",
                    "type": "boolean"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productphotoid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.pr",
            "columns": [
                {
                    "name": "comments",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productreviewid",
                    "type": "integer"
                },
                {
                    "name": "rating",
                    "type": "integer"
                },
                {
                    "name": "reviewdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "reviewername",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "pr.psc",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productcategoryid",
                    "type": "integer"
                },
                {
                    "name": "productsubcategoryid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "pr.sr",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "scrapreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.th",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "referenceorderid",
                    "type": "integer"
                },
                {
                    "name": "referenceorderlineid",
                    "type": "integer"
                },
                {
                    "name": "transactiondate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "transactionid",
                    "type": "integer"
                },
                {
                    "name": "transactiontype",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pr.tha",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "referenceorderid",
                    "type": "integer"
                },
                {
                    "name": "referenceorderlineid",
                    "type": "integer"
                },
                {
                    "name": "transactiondate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "transactionid",
                    "type": "integer"
                },
                {
                    "name": "transactiontype",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pr.um",
            "columns": [
                {
                    "name": "id",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pr.w",
            "columns": [
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "integer"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "scrappedqty",
                    "type": "smallint"
                },
                {
                    "name": "scrapreasonid",
                    "type": "smallint"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "workorderid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pr.wr",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "actualenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "actualresourcehrs",
                    "type": "numeric"
                },
                {
                    "name": "actualstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "locationid",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "operationsequence",
                    "type": "smallint"
                },
                {
                    "name": "plannedcost",
                    "type": "numeric"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "scheduledenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "scheduledstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "workorderid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.billofmaterials",
            "columns": [
                {
                    "name": "billofmaterialsid",
                    "type": "integer"
                },
                {
                    "name": "bomlevel",
                    "type": "smallint"
                },
                {
                    "name": "componentid",
                    "type": "integer"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "perassemblyqty",
                    "type": "numeric"
                },
                {
                    "name": "productassemblyid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "production.culture",
            "columns": [
                {
                    "name": "cultureid",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.document",
            "columns": [
                {
                    "name": "changenumber",
                    "type": "integer"
                },
                {
                    "name": "document",
                    "type": "bytea"
                },
                {
                    "name": "documentnode",
                    "type": "character varying"
                },
                {
                    "name": "documentsummary",
                    "type": "text"
                },
                {
                    "name": "fileextension",
                    "type": "character varying"
                },
                {
                    "name": "filename",
                    "type": "character varying"
                },
                {
                    "name": "folderflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "owner",
                    "type": "integer"
                },
                {
                    "name": "revision",
                    "type": "character"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.illustration",
            "columns": [
                {
                    "name": "diagram",
                    "type": "xml"
                },
                {
                    "name": "illustrationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "production.location",
            "columns": [
                {
                    "name": "availability",
                    "type": "numeric"
                },
                {
                    "name": "costrate",
                    "type": "numeric"
                },
                {
                    "name": "locationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.product",
            "columns": [
                {
                    "name": "class",
                    "type": "character"
                },
                {
                    "name": "color",
                    "type": "character varying"
                },
                {
                    "name": "daystomanufacture",
                    "type": "integer"
                },
                {
                    "name": "discontinueddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "finishedgoodsflag",
                    "type": "boolean"
                },
                {
                    "name": "listprice",
                    "type": "numeric"
                },
                {
                    "name": "makeflag",
                    "type": "boolean"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productline",
                    "type": "character"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "productnumber",
                    "type": "character varying"
                },
                {
                    "name": "productsubcategoryid",
                    "type": "integer"
                },
                {
                    "name": "reorderpoint",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "safetystocklevel",
                    "type": "smallint"
                },
                {
                    "name": "sellenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "sellstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "size",
                    "type": "character varying"
                },
                {
                    "name": "sizeunitmeasurecode",
                    "type": "character"
                },
                {
                    "name": "standardcost",
                    "type": "numeric"
                },
                {
                    "name": "style",
                    "type": "character"
                },
                {
                    "name": "weight",
                    "type": "numeric"
                },
                {
                    "name": "weightunitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "production.productcategory",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productcategoryid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "production.productcosthistory",
            "columns": [
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "standardcost",
                    "type": "numeric"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "production.productdescription",
            "columns": [
                {
                    "name": "description",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productdescriptionid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "production.productdocument",
            "columns": [
                {
                    "name": "documentnode",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.productinventory",
            "columns": [
                {
                    "name": "bin",
                    "type": "smallint"
                },
                {
                    "name": "locationid",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "shelf",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.productlistpricehistory",
            "columns": [
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "listprice",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "production.productmodel",
            "columns": [
                {
                    "name": "catalogdescription",
                    "type": "xml"
                },
                {
                    "name": "instructions",
                    "type": "xml"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "production.productmodelillustration",
            "columns": [
                {
                    "name": "illustrationid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.productmodelproductdescriptionculture",
            "columns": [
                {
                    "name": "cultureid",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productdescriptionid",
                    "type": "integer"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.productphoto",
            "columns": [
                {
                    "name": "largephoto",
                    "type": "bytea"
                },
                {
                    "name": "largephotofilename",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productphotoid",
                    "type": "integer"
                },
                {
                    "name": "thumbnailphoto",
                    "type": "bytea"
                },
                {
                    "name": "thumbnailphotofilename",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.productproductphoto",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "primary",
                    "type": "boolean"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productphotoid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.productreview",
            "columns": [
                {
                    "name": "comments",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "productreviewid",
                    "type": "integer"
                },
                {
                    "name": "rating",
                    "type": "integer"
                },
                {
                    "name": "reviewdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "reviewername",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.productsubcategory",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productcategoryid",
                    "type": "integer"
                },
                {
                    "name": "productsubcategoryid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "production.scrapreason",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "scrapreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.transactionhistory",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "referenceorderid",
                    "type": "integer"
                },
                {
                    "name": "referenceorderlineid",
                    "type": "integer"
                },
                {
                    "name": "transactiondate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "transactionid",
                    "type": "integer"
                },
                {
                    "name": "transactiontype",
                    "type": "character"
                }
            ]
        },
        {
            "name": "production.transactionhistoryarchive",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "referenceorderid",
                    "type": "integer"
                },
                {
                    "name": "referenceorderlineid",
                    "type": "integer"
                },
                {
                    "name": "transactiondate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "transactionid",
                    "type": "integer"
                },
                {
                    "name": "transactiontype",
                    "type": "character"
                }
            ]
        },
        {
            "name": "production.unitmeasure",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "production.vproductanddescription",
            "columns": [
                "cultureid",
                "description",
                "name",
                "productid",
                "productmodel"
            ]
        },
        {
            "name": "production.vproductmodelcatalogdescription",
            "columns": [
                {
                    "name": "Summary",
                    "type": "character varying"
                },
                {
                    "name": "bikeframe",
                    "type": "character varying"
                },
                {
                    "name": "color",
                    "type": "character varying"
                },
                {
                    "name": "copyright",
                    "type": "character varying"
                },
                {
                    "name": "crankset",
                    "type": "character varying"
                },
                {
                    "name": "maintenancedescription",
                    "type": "character varying"
                },
                {
                    "name": "manufacturer",
                    "type": "character varying"
                },
                {
                    "name": "material",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "noofyears",
                    "type": "character varying"
                },
                {
                    "name": "pedal",
                    "type": "character varying"
                },
                {
                    "name": "pictureangle",
                    "type": "character varying"
                },
                {
                    "name": "picturesize",
                    "type": "character varying"
                },
                {
                    "name": "productline",
                    "type": "character varying"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "productphotoid",
                    "type": "character varying"
                },
                {
                    "name": "producturl",
                    "type": "character varying"
                },
                {
                    "name": "riderexperience",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "saddle",
                    "type": "character varying"
                },
                {
                    "name": "style",
                    "type": "character varying"
                },
                {
                    "name": "warrantydescription",
                    "type": "character varying"
                },
                {
                    "name": "warrantyperiod",
                    "type": "character varying"
                },
                {
                    "name": "wheel",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "production.vproductmodelinstructions",
            "columns": [
                {
                    "name": "LaborHours",
                    "type": "numeric"
                },
                {
                    "name": "LocationID",
                    "type": "integer"
                },
                {
                    "name": "LotSize",
                    "type": "integer"
                },
                {
                    "name": "MachineHours",
                    "type": "numeric"
                },
                {
                    "name": "SetupHours",
                    "type": "numeric"
                },
                {
                    "name": "Step",
                    "type": "character varying"
                },
                {
                    "name": "instructions",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "productmodelid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                }
            ]
        },
        {
            "name": "production.workorder",
            "columns": [
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "integer"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "scrappedqty",
                    "type": "smallint"
                },
                {
                    "name": "scrapreasonid",
                    "type": "smallint"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "workorderid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "production.workorderrouting",
            "columns": [
                {
                    "name": "actualcost",
                    "type": "numeric"
                },
                {
                    "name": "actualenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "actualresourcehrs",
                    "type": "numeric"
                },
                {
                    "name": "actualstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "locationid",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "operationsequence",
                    "type": "smallint"
                },
                {
                    "name": "plannedcost",
                    "type": "numeric"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "scheduledenddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "scheduledstartdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "workorderid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pu.pod",
            "columns": [
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "smallint"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "purchaseorderdetailid",
                    "type": "integer"
                },
                {
                    "name": "purchaseorderid",
                    "type": "integer"
                },
                {
                    "name": "receivedqty",
                    "type": "numeric"
                },
                {
                    "name": "rejectedqty",
                    "type": "numeric"
                },
                {
                    "name": "unitprice",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "pu.poh",
            "columns": [
                {
                    "name": "employeeid",
                    "type": "integer"
                },
                {
                    "name": "freight",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "purchaseorderid",
                    "type": "integer"
                },
                {
                    "name": "revisionnumber",
                    "type": "smallint"
                },
                {
                    "name": "shipdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "subtotal",
                    "type": "numeric"
                },
                {
                    "name": "taxamt",
                    "type": "numeric"
                },
                {
                    "name": "vendorid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "pu.pv",
            "columns": [
                {
                    "name": "averageleadtime",
                    "type": "integer"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "lastreceiptcost",
                    "type": "numeric"
                },
                {
                    "name": "lastreceiptdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "maxorderqty",
                    "type": "integer"
                },
                {
                    "name": "minorderqty",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "onorderqty",
                    "type": "integer"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "standardprice",
                    "type": "numeric"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "pu.sm",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "shipbase",
                    "type": "numeric"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "shiprate",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "pu.v",
            "columns": [
                {
                    "name": "accountnumber",
                    "type": "character varying"
                },
                {
                    "name": "activeflag",
                    "type": "boolean"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "creditrating",
                    "type": "smallint"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "preferredvendorstatus",
                    "type": "boolean"
                },
                {
                    "name": "purchasingwebserviceurl",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "purchasing.productvendor",
            "columns": [
                {
                    "name": "averageleadtime",
                    "type": "integer"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "lastreceiptcost",
                    "type": "numeric"
                },
                {
                    "name": "lastreceiptdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "maxorderqty",
                    "type": "integer"
                },
                {
                    "name": "minorderqty",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "onorderqty",
                    "type": "integer"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "standardprice",
                    "type": "numeric"
                },
                {
                    "name": "unitmeasurecode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "purchasing.purchaseorderdetail",
            "columns": [
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "smallint"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "purchaseorderdetailid",
                    "type": "integer"
                },
                {
                    "name": "purchaseorderid",
                    "type": "integer"
                },
                {
                    "name": "receivedqty",
                    "type": "numeric"
                },
                {
                    "name": "rejectedqty",
                    "type": "numeric"
                },
                {
                    "name": "unitprice",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "purchasing.purchaseorderheader",
            "columns": [
                {
                    "name": "employeeid",
                    "type": "integer"
                },
                {
                    "name": "freight",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "purchaseorderid",
                    "type": "integer"
                },
                {
                    "name": "revisionnumber",
                    "type": "smallint"
                },
                {
                    "name": "shipdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "subtotal",
                    "type": "numeric"
                },
                {
                    "name": "taxamt",
                    "type": "numeric"
                },
                {
                    "name": "vendorid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "purchasing.shipmethod",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "shipbase",
                    "type": "numeric"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "shiprate",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "purchasing.vendor",
            "columns": [
                {
                    "name": "accountnumber",
                    "type": "character varying"
                },
                {
                    "name": "activeflag",
                    "type": "boolean"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "creditrating",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "preferredvendorstatus",
                    "type": "boolean"
                },
                {
                    "name": "purchasingwebserviceurl",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "purchasing.vvendorwithaddresses",
            "columns": [
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "addresstype",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "countryregionname",
                    "type": "character varying"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "stateprovincename",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "purchasing.vvendorwithcontacts",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "contacttype",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertype",
                    "type": "character varying"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sa.c",
            "columns": [
                {
                    "name": "customerid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "personid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "storeid",
                    "type": "integer"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.cc",
            "columns": [
                {
                    "name": "cardnumber",
                    "type": "character varying"
                },
                {
                    "name": "cardtype",
                    "type": "character varying"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "expmonth",
                    "type": "smallint"
                },
                {
                    "name": "expyear",
                    "type": "smallint"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sa.cr",
            "columns": [
                {
                    "name": "averagerate",
                    "type": "numeric"
                },
                {
                    "name": "currencyratedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "currencyrateid",
                    "type": "integer"
                },
                {
                    "name": "endofdayrate",
                    "type": "numeric"
                },
                {
                    "name": "fromcurrencycode",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "tocurrencycode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "sa.crc",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "currencycode",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sa.cu",
            "columns": [
                {
                    "name": "currencycode",
                    "type": "character"
                },
                {
                    "name": "id",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sa.pcc",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sa.s",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "demographics",
                    "type": "xml"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salespersonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.sci",
            "columns": [
                {
                    "name": "datecreated",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "shoppingcartid",
                    "type": "character varying"
                },
                {
                    "name": "shoppingcartitemid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.so",
            "columns": [
                {
                    "name": "category",
                    "type": "character varying"
                },
                {
                    "name": "description",
                    "type": "character varying"
                },
                {
                    "name": "discountpct",
                    "type": "numeric"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "maxqty",
                    "type": "integer"
                },
                {
                    "name": "minqty",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "type",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sa.sod",
            "columns": [
                {
                    "name": "carriertrackingnumber",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "smallint"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesorderdetailid",
                    "type": "integer"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                },
                {
                    "name": "unitprice",
                    "type": "numeric"
                },
                {
                    "name": "unitpricediscount",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sa.soh",
            "columns": [
                {
                    "name": "accountnumber",
                    "type": "character varying"
                },
                {
                    "name": "billtoaddressid",
                    "type": "integer"
                },
                {
                    "name": "comment",
                    "type": "character varying"
                },
                {
                    "name": "creditcardapprovalcode",
                    "type": "character varying"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "currencyrateid",
                    "type": "integer"
                },
                {
                    "name": "customerid",
                    "type": "integer"
                },
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "freight",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "onlineorderflag",
                    "type": "boolean"
                },
                {
                    "name": "orderdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "purchaseordernumber",
                    "type": "character varying"
                },
                {
                    "name": "revisionnumber",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "salespersonid",
                    "type": "integer"
                },
                {
                    "name": "shipdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "shiptoaddressid",
                    "type": "integer"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "subtotal",
                    "type": "numeric"
                },
                {
                    "name": "taxamt",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                },
                {
                    "name": "totaldue",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sa.sohsr",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "salesreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.sop",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.sp",
            "columns": [
                {
                    "name": "bonus",
                    "type": "numeric"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "commissionpct",
                    "type": "numeric"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "saleslastyear",
                    "type": "numeric"
                },
                {
                    "name": "salesquota",
                    "type": "numeric"
                },
                {
                    "name": "salesytd",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.spqh",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "quotadate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesquota",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sa.sr",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "reasontype",
                    "type": "character varying"
                },
                {
                    "name": "salesreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.st",
            "columns": [
                {
                    "name": "costlastyear",
                    "type": "numeric"
                },
                {
                    "name": "costytd",
                    "type": "numeric"
                },
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "group",
                    "type": "character varying"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "saleslastyear",
                    "type": "numeric"
                },
                {
                    "name": "salesytd",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.sth",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sa.tr",
            "columns": [
                {
                    "name": "id",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salestaxrateid",
                    "type": "integer"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                },
                {
                    "name": "taxrate",
                    "type": "numeric"
                },
                {
                    "name": "taxtype",
                    "type": "smallint"
                }
            ]
        },
        {
            "name": "sales.countryregioncurrency",
            "columns": [
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "currencycode",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sales.creditcard",
            "columns": [
                {
                    "name": "cardnumber",
                    "type": "character varying"
                },
                {
                    "name": "cardtype",
                    "type": "character varying"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "expmonth",
                    "type": "smallint"
                },
                {
                    "name": "expyear",
                    "type": "smallint"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sales.currency",
            "columns": [
                {
                    "name": "currencycode",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.currencyrate",
            "columns": [
                {
                    "name": "averagerate",
                    "type": "numeric"
                },
                {
                    "name": "currencyratedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "currencyrateid",
                    "type": "integer"
                },
                {
                    "name": "endofdayrate",
                    "type": "numeric"
                },
                {
                    "name": "fromcurrencycode",
                    "type": "character"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "tocurrencycode",
                    "type": "character"
                }
            ]
        },
        {
            "name": "sales.customer",
            "columns": [
                {
                    "name": "customerid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "personid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "storeid",
                    "type": "integer"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.personcreditcard",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                }
            ]
        },
        {
            "name": "sales.salesorderdetail",
            "columns": [
                {
                    "name": "carriertrackingnumber",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "orderqty",
                    "type": "smallint"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesorderdetailid",
                    "type": "integer"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                },
                {
                    "name": "unitprice",
                    "type": "numeric"
                },
                {
                    "name": "unitpricediscount",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sales.salesorderheader",
            "columns": [
                {
                    "name": "accountnumber",
                    "type": "character varying"
                },
                {
                    "name": "billtoaddressid",
                    "type": "integer"
                },
                {
                    "name": "comment",
                    "type": "character varying"
                },
                {
                    "name": "creditcardapprovalcode",
                    "type": "character varying"
                },
                {
                    "name": "creditcardid",
                    "type": "integer"
                },
                {
                    "name": "currencyrateid",
                    "type": "integer"
                },
                {
                    "name": "customerid",
                    "type": "integer"
                },
                {
                    "name": "duedate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "freight",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "onlineorderflag",
                    "type": "boolean"
                },
                {
                    "name": "orderdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "purchaseordernumber",
                    "type": "character varying"
                },
                {
                    "name": "revisionnumber",
                    "type": "smallint"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "salespersonid",
                    "type": "integer"
                },
                {
                    "name": "shipdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "shipmethodid",
                    "type": "integer"
                },
                {
                    "name": "shiptoaddressid",
                    "type": "integer"
                },
                {
                    "name": "status",
                    "type": "smallint"
                },
                {
                    "name": "subtotal",
                    "type": "numeric"
                },
                {
                    "name": "taxamt",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                },
                {
                    "name": "totaldue",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sales.salesorderheadersalesreason",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "salesorderid",
                    "type": "integer"
                },
                {
                    "name": "salesreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.salesperson",
            "columns": [
                {
                    "name": "bonus",
                    "type": "numeric"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "commissionpct",
                    "type": "numeric"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "saleslastyear",
                    "type": "numeric"
                },
                {
                    "name": "salesquota",
                    "type": "numeric"
                },
                {
                    "name": "salesytd",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.salespersonquotahistory",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "quotadate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salesquota",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sales.salesreason",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "reasontype",
                    "type": "character varying"
                },
                {
                    "name": "salesreasonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.salestaxrate",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salestaxrateid",
                    "type": "integer"
                },
                {
                    "name": "stateprovinceid",
                    "type": "integer"
                },
                {
                    "name": "taxrate",
                    "type": "numeric"
                },
                {
                    "name": "taxtype",
                    "type": "smallint"
                }
            ]
        },
        {
            "name": "sales.salesterritory",
            "columns": [
                {
                    "name": "costlastyear",
                    "type": "numeric"
                },
                {
                    "name": "costytd",
                    "type": "numeric"
                },
                {
                    "name": "countryregioncode",
                    "type": "character varying"
                },
                {
                    "name": "group",
                    "type": "character varying"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "saleslastyear",
                    "type": "numeric"
                },
                {
                    "name": "salesytd",
                    "type": "numeric"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.salesterritoryhistory",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "territoryid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.shoppingcartitem",
            "columns": [
                {
                    "name": "datecreated",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "quantity",
                    "type": "integer"
                },
                {
                    "name": "shoppingcartid",
                    "type": "character varying"
                },
                {
                    "name": "shoppingcartitemid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.specialoffer",
            "columns": [
                {
                    "name": "category",
                    "type": "character varying"
                },
                {
                    "name": "description",
                    "type": "character varying"
                },
                {
                    "name": "discountpct",
                    "type": "numeric"
                },
                {
                    "name": "enddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "maxqty",
                    "type": "integer"
                },
                {
                    "name": "minqty",
                    "type": "integer"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                },
                {
                    "name": "startdate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "type",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.specialofferproduct",
            "columns": [
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "productid",
                    "type": "integer"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "specialofferid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.store",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "demographics",
                    "type": "xml"
                },
                {
                    "name": "modifieddate",
                    "type": "timestamp without time zone"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "rowguid",
                    "type": "uuid"
                },
                {
                    "name": "salespersonid",
                    "type": "integer"
                }
            ]
        },
        {
            "name": "sales.vindividualcustomer",
            "columns": [
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "addresstype",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "countryregionname",
                    "type": "character varying"
                },
                {
                    "name": "demographics",
                    "type": "xml"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertype",
                    "type": "character varying"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "stateprovincename",
                    "type": "character varying"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.vpersondemographics",
            "columns": [
                {
                    "name": "birthdate",
                    "type": "date"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "datefirstpurchase",
                    "type": "date"
                },
                {
                    "name": "education",
                    "type": "character varying"
                },
                {
                    "name": "gender",
                    "type": "character varying"
                },
                {
                    "name": "homeownerflag",
                    "type": "boolean"
                },
                {
                    "name": "maritalstatus",
                    "type": "character varying"
                },
                {
                    "name": "numbercarsowned",
                    "type": "integer"
                },
                {
                    "name": "numberchildrenathome",
                    "type": "integer"
                },
                {
                    "name": "occupation",
                    "type": "character varying"
                },
                {
                    "name": "totalchildren",
                    "type": "integer"
                },
                {
                    "name": "totalpurchaseytd",
                    "type": "money"
                },
                {
                    "name": "yearlyincome",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.vsalesperson",
            "columns": [
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "countryregionname",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertype",
                    "type": "character varying"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "saleslastyear",
                    "type": "numeric"
                },
                {
                    "name": "salesquota",
                    "type": "numeric"
                },
                {
                    "name": "salesytd",
                    "type": "numeric"
                },
                {
                    "name": "stateprovincename",
                    "type": "character varying"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "territorygroup",
                    "type": "character varying"
                },
                {
                    "name": "territoryname",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.vsalespersonsalesbyfiscalyears",
            "columns": [
                {
                    "name": "2012",
                    "type": "numeric"
                },
                {
                    "name": "2013",
                    "type": "numeric"
                },
                {
                    "name": "2014",
                    "type": "numeric"
                },
                {
                    "name": "FullName",
                    "type": "text"
                },
                {
                    "name": "JobTitle",
                    "type": "text"
                },
                {
                    "name": "SalesPersonID",
                    "type": "integer"
                },
                {
                    "name": "SalesTerritory",
                    "type": "text"
                }
            ]
        },
        {
            "name": "sales.vsalespersonsalesbyfiscalyearsdata",
            "columns": [
                {
                    "name": "fiscalyear",
                    "type": "double precision"
                },
                {
                    "name": "fullname",
                    "type": "text"
                },
                {
                    "name": "jobtitle",
                    "type": "character varying"
                },
                {
                    "name": "salespersonid",
                    "type": "integer"
                },
                {
                    "name": "salesterritory",
                    "type": "character varying"
                },
                {
                    "name": "salestotal",
                    "type": "numeric"
                }
            ]
        },
        {
            "name": "sales.vstorewithaddresses",
            "columns": [
                {
                    "name": "addressline1",
                    "type": "character varying"
                },
                {
                    "name": "addressline2",
                    "type": "character varying"
                },
                {
                    "name": "addresstype",
                    "type": "character varying"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "city",
                    "type": "character varying"
                },
                {
                    "name": "countryregionname",
                    "type": "character varying"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "postalcode",
                    "type": "character varying"
                },
                {
                    "name": "stateprovincename",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.vstorewithcontacts",
            "columns": [
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "contacttype",
                    "type": "character varying"
                },
                {
                    "name": "emailaddress",
                    "type": "character varying"
                },
                {
                    "name": "emailpromotion",
                    "type": "integer"
                },
                {
                    "name": "firstname",
                    "type": "character varying"
                },
                {
                    "name": "lastname",
                    "type": "character varying"
                },
                {
                    "name": "middlename",
                    "type": "character varying"
                },
                {
                    "name": "name",
                    "type": "character varying"
                },
                {
                    "name": "phonenumber",
                    "type": "character varying"
                },
                {
                    "name": "phonenumbertype",
                    "type": "character varying"
                },
                {
                    "name": "suffix",
                    "type": "character varying"
                },
                {
                    "name": "title",
                    "type": "character varying"
                }
            ]
        },
        {
            "name": "sales.vstorewithdemographics",
            "columns": [
                {
                    "name": "AnnualRevenue",
                    "type": "money"
                },
                {
                    "name": "AnnualSales",
                    "type": "money"
                },
                {
                    "name": "BankName",
                    "type": "character varying"
                },
                {
                    "name": "Brands",
                    "type": "character varying"
                },
                {
                    "name": "BusinessType",
                    "type": "character varying"
                },
                {
                    "name": "Internet",
                    "type": "character varying"
                },
                {
                    "name": "NumberEmployees",
                    "type": "integer"
                },
                {
                    "name": "Specialty",
                    "type": "character varying"
                },
                {
                    "name": "SquareFeet",
                    "type": "integer"
                },
                {
                    "name": "YearOpened",
                    "type": "integer"
                },
                {
                    "name": "businessentityid",
                    "type": "integer"
                },
                {
                    "name": "name",
                    "type": "character varying"
                }
            ]
        }
    ]
}