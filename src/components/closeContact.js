import React from "react"
import { Button } from "./button"

export const CloseContact = (dispatch, index, items, symptoms) => {
  return (
    <div key="closeContact" className="card">
      <p>
        Did you have close contact with a person who travelled outside of
        Trinidad and tobago in the last 14 days who has become ill (cough,
        fever, sneezing, or sore throat)?
      </p>

      <div>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-no" ||
            items[index]?.flag === "NoSymptoms"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-no", index })
            } else {
              dispatch({ type: "NoSymptoms", index })
            }
          }}
        >
          No
        </Button>
        <Button
          selected={
            items[index]?.flag === "Isolate10Warning-yes" ||
            items[index]?.flag === "SelfMonitor"
          }
          onClick={() => {
            if (symptoms) {
              dispatch({ type: "Isolate10Warning-yes", index })
            } else {
              dispatch({ type: "SelfMonitor", index })
            }
          }}
        >
          Yes
        </Button>
      </div>
    </div>
  )
}
