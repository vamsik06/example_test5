import React, { useState } from "react";

const AutoScreenshotCapture = () => {
  const [testResults, setTestResults] = useState([
    { testName: "Test 1", status: "passed", screenshot: null },
    { testName: "Test 2", status: "failed", screenshot: null },
    { testName: "Test 3", status: "passed", screenshot: null },
    { testName: "Test 4", status: "failed", screenshot: null },
  ]);

  // Function to simulate automatic screenshot capture for failed tests
  const automateScreenshotCapture = () => {
    setTestResults((prevResults) =>
      prevResults.map((test) => {
        if (test.status === "failed" && !test.screenshot) {
          return { ...test, screenshot: `Screenshot for ${test.testName}.png` };
        }
        return test;
      })
    );
  };

  // Render different status with color coding
  const renderTestStatus = (status) => {
    switch (status) {
      case "passed":
        return <span style={styles.statusPassed}>Passed</span>;
      case "failed":
        return <span style={styles.statusFailed}>Failed</span>;
      default:
        return <span>Unknown</span>;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Automated Screenshot Capture for Failed Tests</h2>
      <div style={styles.testSequence}>
        {testResults.map((test, index) => (
          <div key={index} style={styles.testItem}>
            <div style={styles.testName}>
              {test.testName} - {renderTestStatus(test.status)}
            </div>
            {test.status === "failed" && !test.screenshot && (
              <div style={styles.automationStatus}>Automated Screenshot Capture in Progress...</div>
            )}
            {test.screenshot && (
              <div style={styles.screenshot}>
                <span>{test.screenshot}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={automateScreenshotCapture} style={styles.captureButton}>
        Automate Screenshot Capture
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "450px",
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    color: "#333",
    overflow: "hidden",
    fontSize: "16px",
  },
  header: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  testSequence: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  testItem: {
    width: "100%",
    padding: "20px",
    margin: "12px 0",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    fontSize: "1.1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  testItemHovered: {
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-5px)",
  },
  testName: {
    marginBottom: "14px",
    fontWeight: "600",
    fontSize: "1.1rem",
    letterSpacing: "0.5px",
  },
  statusPassed: {
    color: "#28a745",
    fontWeight: "bold",
  },
  statusFailed: {
    color: "#dc3545",
    fontWeight: "bold",
  },
  automationStatus: {
    marginTop: "12px",
    color: "#ffc107",
    fontWeight: "bold",
    fontSize: "1rem",
    fontStyle: "italic",
  },
  screenshot: {
    fontSize: "0.95rem",
    color: "#007bff",
    marginTop: "15px",
    fontStyle: "italic",
  },
  captureButton: {
    padding: "14px 30px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    marginTop: "25px",
  },
  captureButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default AutoScreenshotCapture;
