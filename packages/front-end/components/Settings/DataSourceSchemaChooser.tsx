import { DataSourceType, SchemaFormat } from "back-end/types/datasource";
import clsx from "clsx";

const options: { value: SchemaFormat; label: string }[] = [
  {
    value: "segment",
    label: "Segment",
  },
  {
    value: "snowplow",
    label: "Snowplow",
  },
  {
    value: "ga4",
    label: "Google Analytics v4",
  },
  {
    value: "rudderstack",
    label: "RudderStack",
  },
  /*
  {
    value: "jitsu",
    label: "Jitsu",
  },
  {
    value: "matomo",
    label: "Matomo",
  },
  {
    value: "amplitude",
    label: "Amplitude",
  },
  */
];

export default function DataSourceSchemaChooser({
  format,
  setValue,
  datasource,
}: {
  format?: SchemaFormat;
  setValue: (format: SchemaFormat) => void;
  datasource?: DataSourceType;
}) {
  return (
    <div>
      <h4>Database Schema</h4>
      <p>
        GrowthBook has out-of-the-box support for a number of database schemas.
        Choose one below.
      </p>
      <div className="d-flex flex-wrap">
        {options
          // GA4 only works when the datasource is bigquery
          .filter((o) => datasource === "bigquery" || o.value !== "ga4")
          .map(({ value, label }) => (
            <a
              href="#"
              key={value}
              onClick={(e) => {
                e.preventDefault();
                setValue(value);
              }}
              className={clsx("btn btn-outline-primary mr-3 mb-3", {
                active: format === value,
              })}
            >
              {label}
            </a>
          ))}
      </div>
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setValue("custom");
          }}
        >
          None of the above
        </a>
      </p>
    </div>
  );
}
