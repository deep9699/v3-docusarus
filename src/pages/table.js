import React from "react";

function TablePage() {
  const Level31 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          3.1 Technical Architecture (Level 1)
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Major
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>3.1a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Level 1 Technical Architecture Diagram</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the Level 1 architecture adhere to Amex Tech Standards
                  and appropriately adopt Architecture as Code Frameworks
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the Level 1 architecture meet business features, growth,
                  response times, availability, financial balancing, resilience,
                  scalability, data consistency, data durability, secunty,
                  audil, and On-Cop requirements.
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Are the interfaces and interactions defined
                </div>
              </td>
              <td>Diagram</td>
              <td>+3</td>
              <td>
                <div>Prompt 25 - Level 3 Projection*</div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 26 - Level 3 Projection*
                </div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 27 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.1b</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Level 1 Technical Architecture description</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the Level 1 Architecture decompose into subs-systems,
                  services components and are the components fully
                  defined/described including the function, as well as wherher
                  it is an existing service, buy, software as a service or new
                  build
                </div>
              </td>
              <td>Description</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 28 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.1c</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Overview heading-description</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Is there a summary description that details the purpose of the
                  architecture
                </div>
              </td>
              <td>Heading Description</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 29 - Level 1 Direct Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.1d</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Review heading-description</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Has the Technical Architecture been approved (by Engineering
                  Peer Review, Architecture Review Committee, and/or Office of
                  the Chief Architect)
                </div>
              </td>
              <td>Heading Description</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 30 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.1e</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Principles heading-description</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Are there Technical Principles/Considerations defined and do
                  they align with company/industry/standard principles. (i.e.
                  GCRTP, 12 Factor App etc)
                </div>
              </td>
              <td>Heading Description</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 31 - Level 3 Projection*
                </div>
              </td>
            </tr>
            <tr style={{ backgroundColor: "transparent" }}>
              <td>Bonus</td>
            </tr>
            <tr>
              <td>3.1f</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of{" "}
                  <b>
                    Business Capability Map (w/ Technology Mappings) Diagram
                  </b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Is there a Business Capability Map defined with corresponding
                  Technical Components (it applicable)
                </div>
              </td>
              <td>Diagram</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 32 - Level 1 Direct Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.1g</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Proof of Concept heading-description</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Is there a Proof of Concept that was created that proved out
                  the product (if applicable)
                </div>
              </td>
              <td>Heading Description</td>
              <td>+0.5</td>
              <td>
                <div style={{ marginTop: "10px" }}>
                  Prompt 33 - Level 1 Direct Matching
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level32 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          3.2 Sequence Diagrams
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Simple
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>3.2a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of Sequence or <b>Interaction Flow Diagram</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the sequence diagram present interactions in a logical,
                  chronological order allowing viewers to follow the flow of
                  messages easily
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the sequence diagram include error handling and
                  alternative paths to clearly depict how the system deals with
                  unexpected situations
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the sequence diagram illustrate concurrent paths and
                  synchronization points (if the system involves parallel or
                  concurrent activities
                </div>
              </td>
              <td>Diagram</td>
              <td>+5</td>
              <td>
                <div>Prompt 34 - Level 3 Projection</div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 35 - Level 2 Concept Matching
                </div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 36 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level33 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          3.3 API Interface Defination
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Standard
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>3.3a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in{" "}
                  <b>Technical APIs table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Name</b>
                    </li>
                    <li>
                      <b>Description</b>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Do the technical APIs documented describe the
                  operations/function of the APf fully
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Are the technical APIs defined at a domain level/capability
                  level
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  If a new API is being created, have teams confirmed that there
                  are no existing APIs that can be reused in-full or modified
                  slightly to satisfy the requirement
                </div>
              </td>
              <td>Column-Description</td>
              <td>+3</td>
              <td>
                <div>Prompt 37 - Level 2 Concept Matching</div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 38 - Level 2 Concept Matching
                </div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 39 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.3b</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in
                  <b>Technical APIs table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Source</b>
                    </li>
                    <li>
                      <b>Consumers</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>Column-Description</td>
              <td>+1</td>
              <td>
                <div>Prompt 40 - Level 1 Direct Matching</div>
              </td>
            </tr>
            <tr>
              <td>3.3c</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in
                  <b>Technical APIs table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Input</b>
                    </li>
                    <li>
                      <b>Output</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>Column-Description</td>
              <td>+1</td>
              <td>
                <div>Prompt 41 - Level 1 Direct Matching</div>
              </td>
            </tr>
            <tr style={{ backgroundColor: "transparent" }}>
              <td>Bonus</td>
            </tr>
            <tr>
              <td>3.3d</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in
                  <b>Technical APIs table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Type</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>Column-Description</td>
              <td>+0.5</td>
              <td>
                <div>Prompt 42 - Level 1 Direct Matching</div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level34 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          3.4 Buy/Build/Reuse Assessment
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Standard
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>3.4a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following rows-descriptions in
                  <b>Assessment table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Options</b>
                    </li>
                    <li>
                      <b>Capabilities</b>
                    </li>
                    <li>
                      <b>Capability Score</b>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the Buy/Build Assessment include a needs/capability
                  assessment across the various options with a scoring on each
                  capability
                </div>
              </td>
              <td>Row-Description</td>
              <td>+3</td>
              <td>
                <div>Prompt 43 - Level 1 Direct Matching</div>
                <div style={{ marginTop: "10px" }}>
                  Prompt 44 - Level 2 Concept Matching
                </div>
              </td>
            </tr>
            <tr>
              <td>3.4b</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following rows-descriptions in
                  <b>Assessment table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Risks</b>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the Buy Build Assessment include a cost-benefit analysis
                </div>
              </td>
              <td>Row-Description</td>
              <td>+1</td>
              <td>
                <div>Prompt 45 - Level 1 Direct Matching</div>
                <div>Prompt 46 - Level 2 Concept Matching</div>
              </td>
            </tr>
            <tr>
              <td>3.4c</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following rows-descriptions in
                  <b>Assessment table:</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <ul>
                    <li>
                      <b>Cost</b>
                    </li>
                  </ul>
                </div>
              </td>
              <td>Row-Description</td>
              <td>+1</td>
              <td>
                <div>Prompt 47 - Level 1 Direct Matching</div>
                <div>Prompt 48 - Level 2 Concept Matching</div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level71 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          7.1 Security Design
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Simple
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>7.1a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of <b>Baya Threat Model link</b>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Does the team leverage the Baya Tool for their Threat Modeling
                  and provide an image link to the baya diagram
                </div>
              </td>
              <td>Link</td>
              <td>+5</td>
              <td>
                <div>Prompt 99 - Level 2 Concept Matching</div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level72 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          7.2 Data Protection
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Standard
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>7.2a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in{" "}
                  <b>Data Protection Approach table:</b>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <ul>
                    <li>
                      <b>Description</b>
                    </li>
                    <li>
                      <b>SDE/PII Data Field</b>
                    </li>
                    <li>
                      <b>Location</b>
                    </li>
                    <li>
                      <b>Data Protection Approach</b>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Have the Data Protection approaches been documented for
                  in-transit, being processed, and at-rest
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Have PC/ compliance requirements been met
                </div>
              </td>
              <td>Column Description</td>
              <td>+3</td>
              <td>
                <div>Prompt 100 - Level 1 Direct Matching</div>
                <div>Prompt 101 - Level 2 Concept Matching</div>
                <div>Prompt 102 - Level 3 Projection*</div>
              </td>
            </tr>
            <tr>
              <td>7.2b</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of{" "}
                  <b>Technical Architecture Level 1 Reference Diagram</b>
                </div>
              </td>
              <td>Diagram</td>
              <td>+1</td>
              <td>
                <div>Prompt 103 - Level 1 Direct Matching</div>
              </td>
            </tr>
            <tr>
              <td>7.2c</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in{" "}
                  <b>SDE/PII Data Fields table:</b>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <ul>
                    <li>
                      <b>SDE/PII Data Field</b>
                    </li>
                    <li>
                      <b>Description</b>
                    </li>
                    <li>
                      <b>SDE Category</b>
                    </li>
                    <li>
                      <b>Data Protection Approach</b>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Have SDE/PII Data Fields been clearly identified along with
                  their descriptions
                </div>
              </td>
              <td>Column Description</td>
              <td>+1</td>
              <td>
                <div>Prompt 104 - Level 1 Direct Matching</div>
                <div>Prompt 105 - Level 2 Concept Matching</div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  const Level73 = () => {
    return (
      <>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "20px",
          }}
        >
          7.3 AuthN/AuthZ Approach
        </div>
        <div
          style={{
            marginLeft: "22px",
            marginTop: "8px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Scoring Type:{" "}
          <div
            style={{
              fontSize: "8px",
              borderRadius: "10px",
              marginLeft: "2px",
              display: "inline",
              padding: "3px 8px",
            }}
            variant="solid"
            colorScheme="orange"
          >
            Standard
          </div>
        </div>
        <table className="tableClassTOC">
          <thead>
            <th>
              <b>ID</b>
            </th>
            <th colSpan={5}>
              <b>Criteria</b>
            </th>
            <th>
              <b>Elements</b>
            </th>
            <th>
              <b>Points</b>
            </th>
            <th>
              <b>Prompt IDs</b>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>7.3a</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of the following columns-descriptions in{" "}
                  <b>
                    Intranet/A2A AuthN/AuthZ Approach or Internet/B2B
                    AuthN/AuthZ Approach table:
                  </b>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <ul>
                    <li>
                      <b>Description</b>
                    </li>
                    <li>
                      <b>AuthN/AuthZ Approach</b>
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Have all AuthN/AuthZ approaches been documented
                </div>
              </td>
              <td>Column Description</td>
              <td>+3</td>
              <td>
                <div>Prompt 106 - Level 1 Direct Matching</div>
                <div>Prompt 107 - Level 2 Concept Matching</div>
              </td>
            </tr>
            <tr>
              <td>7.3b</td>
              <td colSpan={5}>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Presence of{" "}
                  <b>Technical Architecture Level 1 Reference Diagram</b>
                </div>
                <div
                  style={{
                    marginBottom: "10px",
                    color: "rgb(122,134,154)",
                    fontStyle: "italic",
                  }}
                >
                  Have all AuthN/AuthZ approaches been described/labeled on the
                  L1 Architecture
                </div>
              </td>
              <td>Diagram</td>
              <td>+2</td>
              <td>
                <div>Prompt 108 - Level 2 Concept Matching</div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <Level73 />
    </>
  );
}

export default TablePage;
