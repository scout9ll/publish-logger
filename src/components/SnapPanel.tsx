import React from "react";

export interface snapLog {
  projectName: string;
  env: string;
  publishUser?: string;
  branch: {
    name: string;
    commitId?: string;
    commitAnthor?: string;
    commitDesc?: string;
  };
}

export interface Props {
  currentLog: snapLog;
}

const SnapPanel = ({ currentLog }: Props) => {
  return (
    <div className="sanp-panel">
      <div>
        <span className="info-label">项目名</span>
        <span>{currentLog.projectName}</span>
      </div>
      <div>
        <span className="info-label">环境</span>
        <span className="info-value">{currentLog.env}</span>
      </div>
      <div>
        <span className="info-label">发版人</span>
        <span className="info-value">{currentLog.publishUser}</span>
      </div>
      <div>
        <span className="info-label">打包分支</span>
        <span className="info-value">{currentLog.branch.name}</span>
      </div>
      <div>
        <span className="info-label">提交ID</span>
        <span className="info-value">{currentLog.branch.commitId}</span>
      </div>
      <div>
        <span className="info-label">提交作者</span>
        <span className="info-value">{currentLog.branch.commitAnthor}</span>
      </div>
      <div>
        <span className="info-label">提交信息</span>
        <span className="info-value">{currentLog.branch.commitDesc}</span>
      </div>
    </div>
  );
};

export default SnapPanel;
