CREATE TABLE departments (
    uid UUID PRIMARY KEY,
    name TEXT NOT NULL,
    institute_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (NOW() AT TIME ZONE 'UTC'::TEXT),
    FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (institute_id) REFERENCES institutes(uid) ON DELETE CASCADE
);