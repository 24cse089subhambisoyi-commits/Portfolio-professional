import React from 'react';
import { FileText, Download, Eye, Sparkles, AlertCircle } from 'lucide-react';
import { Modal } from './Modal';
import { userProfileData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-5 h-5 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Resume & Credentials
        </h2>
        <div className="h-px bg-outline-variant/30 flex-1 ml-4"></div>
      </div>

      <div className="bg-surface-container rounded-2xl border border-outline-variant/40 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        
        {/* Recruiter Summary Details */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECRUITER QUICK SNAPSHOT</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
            {userProfileData.name} — SWE Intern Applicant
          </h3>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            3rd Year B.Tech CSE student at GIET University specializing in Python, Java, Data Structures, Algorithms, Spring Boot, and analytical application development.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
              <span className="font-mono text-[10px] text-secondary uppercase block">Degree</span>
              <span className="text-xs font-bold text-on-surface">B.Tech CSE (3rd Yr)</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
              <span className="font-mono text-[10px] text-secondary uppercase block">Primary Languages</span>
              <span className="text-xs font-bold text-primary">Python & Java</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
              <span className="font-mono text-[10px] text-secondary uppercase block">Key Framework</span>
              <span className="text-xs font-bold text-on-surface">Spring Boot</span>
            </div>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
          <button
            onClick={onOpenModal}
            className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-dim text-on-primary font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>Preview Resume Modal</span>
          </button>

          <a
            href="/resume.pdf"
            download="Subham_Bisoyi_Resume.pdf"
            className="w-full py-3 px-5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-medium text-sm flex items-center justify-center gap-2 border border-outline-variant/40 transition-all active:scale-95 text-center"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Download Resume PDF</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Resume Preview" maxWidthClass="max-w-3xl">
      <div className="space-y-6 text-on-surface">
        {/* Content Preview */}
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 font-mono text-xs leading-relaxed space-y-4 text-secondary">
          <div className="text-center border-b border-outline-variant/20 pb-4 space-y-1">
            <h4 className="text-base font-bold text-on-surface">{userProfileData.name.toUpperCase()}</h4>
            <p className="text-primary text-[11px]">Software Engineering Intern Candidate</p>
            <p className="text-[11px] text-outline">
              Gunupur, Odisha • {userProfileData.email} • {userProfileData.linkedinUrl}
            </p>
          </div>

          <div className="space-y-1">
            <h5 className="text-primary font-bold uppercase">EDUCATION</h5>
            <p className="text-on-surface font-semibold">GIET University, Gunupur, Odisha</p>
            <p>B.Tech in Computer Science & Engineering (3rd Year, 2024–2028)</p>
            <p className="text-outline">Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), DBMS, OS, DMDW</p>
          </div>

          <div className="space-y-1 pt-2">
            <h5 className="text-primary font-bold uppercase">FEATURED PROJECTS</h5>
            <p className="text-on-surface font-semibold">Task Management Tracker (Full Stack & AI)</p>
            <p className="text-outline">• Custom task tracking web app with AI bot assistant integration and motion UI animations.</p>
            <p className="text-on-surface font-semibold pt-1">Data Mining & Data Warehousing Suite (Python / Jupyter)</p>
            <p className="text-outline">• Implementations of data preprocessing, association rule mining, and classification algorithms.</p>
          </div>

          <div className="space-y-1 pt-2">
            <h5 className="text-primary font-bold uppercase">CERTIFICATIONS & TRAINING</h5>
            <p>• Android Developer Virtual Internship (Certified)</p>
            <p>• Applied AI Tools Workshop (Completed)</p>
            <p>• Attendance Hashgraph Developer Certification (Accredited)</p>
          </div>
        </div>

        {/* Footer Notice & Actions */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-xs text-secondary">
            <AlertCircle className="w-4 h-4 text-primary shrink-0" />
            <span className="font-mono text-[11px]">
              [Note]: To replace with your custom PDF file, place <code>resume.pdf</code> inside the <code>public/</code> folder.
            </span>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-surface-container-high text-xs font-mono text-secondary hover:text-on-surface"
            >
              Close Preview
            </button>
            <a
              href="/resume.pdf"
              download="Subham_Bisoyi_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
